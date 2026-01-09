"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const formRef = useRef(null);

  // State for Login Data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      formRef.current,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power4.out" }
    );

    // ROLE-BASED REDIRECT LOGIC
    // This runs automatically if the session is detected
    if (status === "authenticated" && session?.user) {
      const role = (session.user as any).role?.toLowerCase();
      
      if (role) {
        router.push(`/${role}/dashboard`);
      } else {
        // Fallback if role is missing
        router.push("/dashboard");
      }
    }
  }, [session, status, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // Tactile button feedback
    gsap.to(".login-btn", { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
    
    const result = await signIn("credentials", { 
      email, 
      password,
      redirect: false // Crucial for manual role-based routing
    });

    if (result?.error) {
      setError("Credenciales inválidas");
      setLoading(false);
      // Shake animation for errors
      gsap.fromTo(".error-msg", { x: -10 }, { x: 0, duration: 0.1, repeat: 5, ease: "linear" });
    }
    // If successful, the useEffect above will catch the new session and redirect
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-white overflow-hidden">
      {/* Background Brand Decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-gray-50 opacity-[0.03] select-none uppercase tracking-tighter">
          Autriche
        </div>
      </div>

      <div ref={formRef} className="relative z-10 w-full max-w-md px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-4">
            Members Access
          </h2>
          <h1 className="text-4xl font-black tracking-tighter uppercase">
            Inicia <span className="text-gray-300">Sesión</span>
          </h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <p className="error-msg text-red-500 text-[10px] uppercase font-bold tracking-widest text-center">
              {error}
            </p>
          )}

          {/* Email Input */}
          <div className="group border-b border-gray-200 focus-within:border-black transition-colors py-2">
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Email</label>
            <input 
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@autriche.com"
              className="w-full bg-transparent outline-none text-sm font-medium placeholder:text-gray-200" 
            />
          </div>
          
          {/* Password Input */}
          <div className="group border-b border-gray-200 focus-within:border-black transition-colors py-2">
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Password</label>
            <input 
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-transparent outline-none text-sm font-medium placeholder:text-gray-200" 
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="login-btn w-full py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-900 transition-all shadow-2xl active:scale-95 mt-4 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {loading ? "Verificando..." : "Entrar al Portal"}
          </button>
        </form>

        {/* Support Links */}
        <div className="mt-8 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-gray-400">
          <button className="hover:text-black transition-colors">Olvidé mi clave</button>
          <a href="/register/model" className="hover:text-black transition-colors">Solicitar Acceso</a>
        </div>
      </div>

      {/* Aesthetic Border Frame */}
      <div className="fixed inset-4 border border-gray-100 pointer-events-none" />
    </main>
  );
}