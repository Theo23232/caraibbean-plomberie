"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-marine via-marine-dark to-marine pt-16 pb-20 md:pt-24 md:pb-28">
      <div
        aria-hidden
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(43,161,217,0.7) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(245,158,11,0.4) 0%, transparent 45%)",
        }}
      />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-block px-3 py-1 rounded-full bg-eau/20 text-eau text-xs font-bold uppercase tracking-wider mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-white/85 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
