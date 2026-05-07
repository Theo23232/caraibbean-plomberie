"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-40 flex flex-col gap-3">
      <motion.a
        href={SITE.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        initial={{ opacity: 0, scale: 0.8, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 240, damping: 20 }}
        className="grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-transform"
      >
        <MessageCircle size={22} strokeWidth={2.2} fill="currentColor" />
      </motion.a>

      <motion.a
        href={`tel:${SITE.phone}`}
        aria-label="Appeler maintenant"
        initial={{ opacity: 0, scale: 0.8, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 240, damping: 20 }}
        className="relative grid place-items-center w-16 h-16 rounded-full bg-action text-white shadow-2xl shadow-action/50 hover:scale-110 active:scale-95 transition-transform"
        style={{ animation: "pulse-soft 2.4s ease-in-out infinite" }}
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-action"
          style={{ animation: "pulse-ring 2.2s ease-out infinite" }}
        />
        <Phone size={26} strokeWidth={2.4} className="relative" />
      </motion.a>
    </div>
  );
}
