"use client";

import { motion } from "framer-motion";
import { REASONS } from "@/lib/constants";
import Icon from "@/components/Icon";

export default function Reasons() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-eau/10 text-eau text-xs font-bold uppercase tracking-wider mb-4">
            Pourquoi nous
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-marine text-balance max-w-3xl mx-auto">
            Pourquoi choisir Caraibbean Plomberie
          </h2>
          <p className="mt-4 text-gris-text max-w-2xl mx-auto">
            Un artisan local, joignable rapidement, qui ne vous laisse jamais
            sans solution.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-7 border border-marine/8 hover:border-eau/40 hover:shadow-2xl hover:shadow-eau/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-eau/15 to-eau/5 text-eau mb-5 group-hover:scale-110 transition-transform">
                <Icon name={reason.icon} size={26} strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-bold text-lg text-marine mb-2">
                {reason.title}
              </h3>
              <p className="text-gris-text text-sm leading-relaxed">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
