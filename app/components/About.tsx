"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal lines on scroll
      gsap.from(".reveal-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });

      // Subtle parallax for the side image
      gsap.to(".side-image", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -100,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-10 py-24 gap-16 overflow-hidden"
    >
      {/* Background Decorative Text */}
      <div className="absolute top-10 right-[-5%] text-[15vw] font-black text-white/[0.03] select-none pointer-events-none uppercase">
        Philosophy
      </div>

      {/* Left Side: Editorial Image/Graphic */}
      <div className="relative w-full md:w-1/2 h-[600px] flex items-center justify-center">
        <div className="side-image relative w-full h-full border border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1492691523567-6170c360b377?q=80&w=2070&auto=format&fit=crop" 
            alt="Cinema Industry" 
            className="object-cover w-full h-full grayscale opacity-60 scale-110"
          />
        </div>
        {/* Floating Stat/Note */}
        <div className="absolute bottom-10 -right-5 z-20 bg-white text-black p-6 md:p-10 shadow-2xl max-w-[200px]">
          <p className="text-4xl font-black italic">+20</p>
          <p className="text-[10px] uppercase tracking-widest font-bold leading-tight mt-2">
            Años de experiencia en la industria
          </p>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="reveal-text text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-6 font-bold">
          Sobre Nosotros
        </h2>
        
        <h3 className="reveal-text text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
          Representación de <span className="italic font-light text-gray-500">Actores y Actrices</span>
        </h3>

        <div className="space-y-6 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
          <p className="reveal-text">
            Autriche Models es una agencia cuyos profesionales cuentan con más de 
            <span className="text-white font-medium"> veinte años de experiencia </span> 
            en el oficio de la comunicación y la gestión dentro de la industria cinematográfica.
          </p>

          <p className="reveal-text">
            El equipo formado por <span className="text-white">Luis Abella Montecino</span> y 
            <span className="text-white"> Hernando Abella Grisales</span> nace con una filosofía 
            basada en la dedicación, el esfuerzo y la ilusión por posicionar carreras desde el 
            compromiso profesional y humano.
          </p>

          <p className="reveal-text italic text-gray-500 border-l-2 border-gray-800 pl-6">
            "Ofrecemos un servicio integral que aúna representación, comunicación e imagen, 
            impulsando el crecimiento a través de la búsqueda de proyectos en equipo."
          </p>
        </div>

        <div className="reveal-text mt-12">
          <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] hover:text-gray-400 transition-colors">
            Conoce nuestra cartera 
            <span className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;