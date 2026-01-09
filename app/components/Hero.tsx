"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Animation: Staggered reveal
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(navRef.current, { y: -100, opacity: 0, duration: 1.2 })
        .from(".hero-badge", { opacity: 0, scale: 0.8, duration: 0.6 }, "-=0.8")
        .from(".char", { y: 100, opacity: 0, stagger: 0.05, duration: 1 }, "-=0.5")
        .from(profileRef.current, { opacity: 0, scale: 1.5, duration: 1.2 }, "-=0.8")
        .from(".hero-cta", { y: 30, opacity: 0, stagger: 0.2 }, "-=0.5");

      // 2. Spatial Mouse Move Effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        // Moves the profile image in 3D space
        gsap.to(profileRef.current, {
          x: xPos,
          y: yPos,
          rotationY: xPos / 2,
          rotationX: -yPos / 2,
          duration: 0.8,
          ease: "power2.out",
        });

        // Moves the title slightly for parallax
        gsap.to(titleRef.current, {
          x: xPos * -0.5,
          y: yPos * -0.5,
          duration: 1,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper to split text for animations
  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white overflow-hidden font-sans text-black">
      
      {/* --- SPATIAL NAV --- */}
      <nav 
        ref={navRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-8 py-4 bg-white/50 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-2xl"
      >
        <div className="font-black tracking-tighter text-xl">A.M</div>
        <div className="hidden md:flex gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500">
          <a href="/artists" className="hover:text-black transition-colors">Artistas</a>
          <a href="#" className="hover:text-black transition-colors">Agencias</a>
          <a href="#" className="hover:text-black transition-colors">Sobre Nosotros</a>
        <a href="/login" className="hover:text-black transition-colors">Iniciar Sesiôn</a>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full text-[10px] uppercase font-bold">Contacto</button>
      </nav>

      {/* --- HERO CONTENT --- */}
      <main className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-6">
        
        <span className="hero-badge px-4 py-1 text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-8 border border-gray-100 rounded-full">
          El futuro del talento
        </span>

        {/* 3D Profile Container */}
        <div 
          ref={profileRef}
          className="relative w-40 h-40 md:w-56 md:h-56 mb-12 perspective-1000"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 bg-black/5 rounded-full blur-2xl" />
          <div className="relative w-full h-full rounded-full border-[10px] border-white shadow-2xl overflow-hidden">
            <Image
              src="/profile.jpeg"
              alt="Elite Talent"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>

        {/* Animated Title */}
        <h1 
          ref={titleRef}
          className="text-7xl md:text-[140px] font-black uppercase leading-none tracking-tighter text-center select-none"
        >
          {splitText("AUTRICHE")}
          <br />
          <span className="text-gray-200">{splitText("MODELS")}</span>
        </h1>

        <p className="hero-cta mt-8 text-gray-500 text-lg max-w-lg text-center font-light">
          Redefining the digital runway through <span className="text-black font-semibold italic">spatial technology</span> and global connectivity.
        </p>

        {/* CTA Group */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 mt-12">
          <button className="px-12 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform active:scale-95 shadow-2xl">
            Join the Roster
          </button>
          <button className="px-12 py-5 border border-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
            Book Talent
          </button>
        </div>

        {/* Floating Background Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none rotate-90 whitespace-nowrap text-[200px] font-black">
          HIGH FASHION HIGH FASHION
        </div>
      </main>

      {/* Visual Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default Hero;