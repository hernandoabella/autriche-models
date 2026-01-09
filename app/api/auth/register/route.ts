import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, role } = body;

    if (!email || !password || !role) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
      },
    });

    // Opcional: crear perfil vacío según rol
    if (role === "MODEL") {
      await prisma.modelProfile.create({
        data: {
          userId: user.id,
          fullName: "",
          bio: "",
        },
      });
    } else if (role === "ENTERPRISE") {
      await prisma.enterpriseProfile.create({
        data: {
          userId: user.id,
          companyName: "",
          isActive: true,
        },
      });
    }

    return NextResponse.json({ message: "User registered", userId: user.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
