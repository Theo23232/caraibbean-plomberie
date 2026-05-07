"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Zone() {
  return (
    <section className="py-20 md:py-28 bg-marine text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(43,161,217,0.6) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(43,161,217,0.4) 0%, transparent 50%)",
        }}
      />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-eau/20 text-eau text-xs font-bold uppercase tracking-wider mb-4">
              Zone d&apos;intervention
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
              Nous intervenons dans toute la Guadeloupe
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Basés à Morne-à-l&apos;Eau, nous nous déplaçons sur l&apos;ensemble
              de l&apos;île pour vos urgences, dépannages et installations.
              Aucun frais de déplacement caché : tout est annoncé dans le devis.
            </p>

            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SITE.zones.map((zone, i) => (
                <motion.li
                  key={zone}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="flex items-center gap-2 text-sm text-white/90"
                >
                  <MapPin size={14} className="text-eau shrink-0" />
                  {zone}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square max-w-md mx-auto lg:max-w-full"
          >
            <GuadeloupeMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GuadeloupeMap() {
  // Stylized representation of Guadeloupe with key cities as dots
  const cities: { name: string; x: number; y: number }[] = [
    { name: "Sainte-Rose", x: 28, y: 26 },
    { name: "Baie-Mahault", x: 38, y: 42 },
    { name: "Pointe-à-Pitre", x: 45, y: 50 },
    { name: "Les Abymes", x: 50, y: 44 },
    { name: "Le Gosier", x: 55, y: 56 },
    { name: "Morne-à-l'Eau", x: 56, y: 38 },
    { name: "Petit-Bourg", x: 38, y: 56 },
    { name: "Goyave", x: 36, y: 64 },
    { name: "Capesterre", x: 38, y: 74 },
    { name: "Sainte-Anne", x: 65, y: 56 },
    { name: "Saint-François", x: 78, y: 50 },
    { name: "Le Moule", x: 70, y: 38 },
  ];

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2BA1D9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2BA1D9" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Basse-Terre (left wing) */}
        <path
          d="M 22 32 Q 18 38 20 50 Q 22 62 28 72 Q 32 80 38 80 Q 42 78 42 70 Q 42 58 40 48 Q 36 38 32 32 Q 28 28 22 32 Z"
          fill="url(#mapGradient)"
          stroke="#2BA1D9"
          strokeWidth="0.5"
          strokeOpacity="0.5"
        />
        {/* Grande-Terre (right wing) */}
        <path
          d="M 46 38 Q 44 46 46 54 Q 50 62 60 60 Q 72 56 80 50 Q 84 44 80 36 Q 72 30 60 32 Q 50 34 46 38 Z"
          fill="url(#mapGradient)"
          stroke="#2BA1D9"
          strokeWidth="0.5"
          strokeOpacity="0.5"
        />

        {cities.map((c, i) => (
          <g key={c.name}>
            <circle
              cx={c.x}
              cy={c.y}
              r="2"
              fill="#F59E0B"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
            <circle cx={c.x} cy={c.y} r="0.8" fill="#FFFFFF" />
          </g>
        ))}

        {/* Highlight Morne-à-l'Eau (HQ) */}
        <circle
          cx="56"
          cy="38"
          r="3.5"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="0.6"
          opacity="0.8"
        />
      </svg>
      <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-action text-white text-xs font-bold flex items-center gap-1.5">
        <MapPin size={12} />
        HQ : Morne-à-l&apos;Eau
      </div>
    </div>
  );
}
