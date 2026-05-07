"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { REALISATIONS } from "@/lib/constants";

export default function Realisations() {
  const featured = REALISATIONS.filter((r) => r.highlight).slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-eau/10 text-eau text-xs font-bold uppercase tracking-wider mb-4">
            Réalisations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-marine text-balance max-w-3xl mx-auto">
            Découvrez nos chantiers récents
          </h2>
          <p className="mt-4 text-gris-text max-w-2xl mx-auto">
            Quelques exemples de réalisations dans toute la Guadeloupe.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((r, i) => (
            <motion.article
              key={r.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white border border-marine/8 hover:shadow-2xl hover:shadow-marine/10 hover:-translate-y-1 transition-all duration-300"
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
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-eau font-bold mb-2">
                  {r.city}
                </p>
                <h3 className="font-display font-bold text-marine text-lg mb-2 leading-tight">
                  {r.title}
                </h3>
                <p className="text-sm text-gris-text leading-relaxed line-clamp-2">
                  {r.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-marine hover:bg-marine-dark text-white font-semibold transition-all hover:gap-3"
          >
            Voir toutes nos réalisations
            <ArrowRight size={16} strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  );
}
