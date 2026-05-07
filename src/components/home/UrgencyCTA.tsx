"use client";

import { motion } from "framer-motion";
import { Phone, Siren } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function UrgencyCTA() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-action via-action to-action-dark">
      <div
        aria-hidden
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.4) 0%, transparent 40%)",
        }}
      />
      <div className="container-x relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-action font-bold uppercase text-xs tracking-wider mb-6 shadow-lg"
          >
            <Siren size={14} className="animate-pulse" />
            Urgence plomberie
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight"
          >
            Une fuite ? Un WC bouché ?
            <br />
            <span className="text-white/90">Pas de panique.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-white/95 max-w-2xl mx-auto"
          >
            Caraibbean Plomberie est joignable 7j/7. Appelez-nous, nous arrivons
            rapidement avec le matériel nécessaire.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href={`tel:${SITE.phone}`}
            className="mt-10 inline-flex items-center gap-3 h-16 md:h-18 px-8 md:px-10 rounded-full bg-white text-action font-bold text-lg shadow-2xl hover:scale-105 active:scale-95 transition-transform"
          >
            <Phone size={24} strokeWidth={2.4} />
            <span className="font-bebas text-3xl md:text-4xl tracking-wider">
              {SITE.phoneDisplay}
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
