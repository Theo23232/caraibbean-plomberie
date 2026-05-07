"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";
import { REALISATIONS, type Realisation } from "@/lib/constants";

const FILTERS = ["Toutes", "Dépannage", "Installation", "Rénovation", "Urgence"] as const;
type Filter = (typeof FILTERS)[number];

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("Toutes");
  const [selected, setSelected] = useState<Realisation | null>(null);

  const items = useMemo(() => {
    if (filter === "Toutes") return REALISATIONS;
    return REALISATIONS.filter((r) => r.category === filter);
  }, [filter]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-x">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-5 h-11 rounded-full text-sm font-semibold transition-all ${
                filter === f
                  ? "bg-marine text-white shadow-lg shadow-marine/20"
                  : "bg-gris-clair text-marine hover:bg-marine/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((r, i) => (
              <motion.button
                key={r.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                onClick={() => setSelected(r)}
                className="group text-left rounded-2xl overflow-hidden bg-white border border-marine/8 hover:shadow-2xl hover:shadow-marine/15 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-marine text-xs font-bold uppercase tracking-wider">
                    {r.category}
                  </span>
                  {r.imageAfter && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-action text-white text-xs font-bold uppercase tracking-wider">
                      Avant / Après
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wider text-eau font-bold mb-1.5 flex items-center gap-1">
                    <MapPin size={12} />
                    {r.city}
                  </p>
                  <h3 className="font-display font-bold text-marine leading-tight">
                    {r.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-marine/80 backdrop-blur-sm grid place-items-center p-4 overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl my-8"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Fermer"
                className="absolute top-4 right-4 z-10 grid place-items-center w-11 h-11 rounded-full bg-white/95 text-marine hover:bg-action hover:text-white shadow-lg transition-colors"
              >
                <X size={20} />
              </button>

              <div className={selected.imageAfter ? "grid sm:grid-cols-2" : ""}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={selected.image}
                    alt={`${selected.title} — avant`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  {selected.imageAfter && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-marine text-white text-xs font-bold uppercase">
                      Avant
                    </span>
                  )}
                </div>
                {selected.imageAfter && (
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={selected.imageAfter}
                      alt={`${selected.title} — après`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-action text-white text-xs font-bold uppercase">
                      Après
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-eau/10 text-eau text-xs font-bold uppercase tracking-wider mb-3">
                  {selected.category} • {selected.city}
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-marine mb-3">
                  {selected.title}
                </h3>
                <p className="text-gris-text leading-relaxed">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
