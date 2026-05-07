"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, FileText, Siren } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=2400&q=85"
        alt="Plombier professionnel au travail"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="container-x relative z-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-action/95 text-white text-xs md:text-sm font-bold uppercase tracking-wider mb-6 shadow-lg shadow-action/30"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white/80 animate-ping" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          Intervention rapide • 7j/7 • Devis gratuit
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] text-balance max-w-4xl"
        >
          {SITE.slogan}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
        >
          {SITE.shortDescription} Devis gratuit, intervention rapide,
          tarifs transparents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center justify-center gap-3 h-14 md:h-16 px-7 md:px-9 rounded-full bg-action hover:bg-action-dark text-white font-bold text-base md:text-lg shadow-xl shadow-action/40 hover:shadow-2xl hover:shadow-action/50 active:scale-95 transition-all"
          >
            <Phone size={20} strokeWidth={2.4} />
            <span className="hidden sm:inline">Appeler maintenant —</span>
            <span className="font-bebas text-2xl md:text-3xl tracking-wider">
              {SITE.phoneDisplay}
            </span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 h-14 md:h-16 px-7 md:px-9 rounded-full border-2 border-white/70 text-white font-bold backdrop-blur-sm hover:bg-white hover:text-marine transition-all"
          >
            <FileText size={18} strokeWidth={2.4} />
            Demander un devis gratuit
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/85"
        >
          <span className="flex items-center gap-2">
            <Siren size={16} className="text-action" />
            Urgence 7j/7
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-eau" />
            10+ ans d&apos;expérience
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-eau" />
            Toute la Guadeloupe
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-eau" />
            Devis gratuit
          </span>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}
