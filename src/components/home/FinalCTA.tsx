"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, FileText } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-marine via-marine-dark to-marine p-10 md:p-16 text-center"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 0% 0%, rgba(43,161,217,0.6) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(245,158,11,0.4) 0%, transparent 50%)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-balance leading-tight max-w-2xl mx-auto">
              Besoin d&apos;un plombier maintenant ?
            </h2>
            <p className="mt-5 text-lg text-white/85 max-w-xl mx-auto">
              Appelez-nous ou demandez un devis en ligne. Réponse dans la
              journée, intervention rapide.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-3 h-14 px-7 rounded-full bg-action hover:bg-action-dark text-white font-bold shadow-xl shadow-action/40 active:scale-95 transition-all"
              >
                <Phone size={20} strokeWidth={2.4} />
                <span className="font-bebas text-2xl tracking-wider">
                  {SITE.phoneDisplay}
                </span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white hover:text-marine transition-colors"
              >
                <FileText size={18} strokeWidth={2.4} />
                Demander un devis
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
