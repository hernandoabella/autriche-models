"use client";

import React, { useState } from "react";

// Mock data de artistas
const ARTISTS = [
  { id: 1, name: "Ana Torres", category: "Artista" },
  { id: 2, name: "Luis Pérez", category: "Influencer" },
  { id: 3, name: "Carla Gómez", category: "Presentador" },
  { id: 4, name: "David Morales", category: "Modelo" },
  { id: 5, name: "Sofía Ruiz", category: "Actor/actriz" },
  { id: 6, name: "Miguel Fernández", category: "Artista" },
  { id: 7, name: "Lucía Hernández", category: "Influencer" },
];

const CATEGORIES = ["All", "Artista", "Influencer", "Presentador", "Modelo", "Actor/actriz"];

export default function Artists() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArtists =
    activeCategory === "All"
      ? ARTISTS
      : ARTISTS.filter((artist) => artist.category === activeCategory);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-8 text-center">Descubre Nuestros Talentos</h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeCategory === cat
                ? "bg-black text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Artists Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredArtists.map((artist) => (
          <div
            key={artist.id}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            {/* Imagen de ejemplo */}
            <div className="w-32 h-32 mb-4 relative">
              <img
                src="/images/profile.png"
                alt={artist.name}
                className="rounded-full object-cover w-full h-full"
              />
            </div>

            <h3 className="text-xl font-semibold mb-1">{artist.name}</h3>
            <p className="text-gray-500">{artist.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
