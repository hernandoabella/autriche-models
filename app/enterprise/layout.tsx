import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Model Management Platform",
  description: "Platform for models, enterprises, and administrators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
