"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ARTISTS = [
  { id: 1, name: "Ana Torres", category: "Artista", img: "/images/profile.png" },
  { id: 2, name: "Luis Pérez", category: "Influencer", img: "/images/profile.png" },
  { id: 3, name: "Carla Gómez", category: "Presentador", img: "/images/profile.png" },
  { id: 4, name: "David Morales", category: "Modelo", img: "/images/profile.png" },
  { id: 5, name: "Sofía Ruiz", category: "Actor/actriz", img: "/images/profile.png" },
  { id: 6, name: "Miguel Fernández", category: "Artista", img: "/images/profile.png" },
  { id: 7, name: "Lucía Hernández", category: "Influencer", img: "/images/profile.png" },
];

const CATEGORIES = ["All", "Artista", "Influencer", "Presentador", "Modelo", "Actor/actriz"];

export default function Artists() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArtists =
    activeCategory === "All"
      ? ARTISTS
      : ARTISTS.filter((artist) => artist.category === activeCategory);

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Editorial Style */}
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-bold block mb-4"
          >
            Nuestra Cartera
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            The <span className="text-gray-200 italic">Roster</span>
          </h2>
        </div>

        {/* Categories - Minimalist Pill Design */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all border rounded-full ${
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-gray-400 border-gray-100 hover:border-black hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Artists Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredArtists.map((artist) => (
              <motion.div
                layout
                key={artist.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="group cursor-pointer"
              >
                {/* Image Container with Custom Hover */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 border border-gray-100">
                  <img
                    src={artist.img}
                    alt={artist.name}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  
                  {/* Category Tag on Image */}
                  <span className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-widest text-white bg-black/20 backdrop-blur-md px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {artist.category}
                  </span>
                </div>

                {/* Info Section */}
                <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">
                      {artist.name}
                    </h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
                      {artist.category}
                    </p>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Portfolio +
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredArtists.length === 0 && (
          <div className="py-20 text-center text-gray-400 uppercase tracking-widest text-xs">
            No talent found in this category.
          </div>
        )}
      </div>
    </section>
  );
}