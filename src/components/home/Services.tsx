"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Icon from "@/components/Icon";

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-gris-clair">
      <div className="container-x">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-eau/10 text-eau text-xs font-bold uppercase tracking-wider mb-4">
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-marine text-balance max-w-3xl mx-auto">
            Des solutions plomberie pour tous vos besoins
          </h2>
          <p className="mt-4 text-gris-text max-w-2xl mx-auto">
            Du dépannage urgent à la rénovation complète, nous prenons en
            charge l&apos;ensemble de votre installation.
          </p>
        </div>

        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href="/services"
                className="group relative block h-full bg-white rounded-2xl p-7 border border-transparent hover:border-eau/30 shadow-sm hover:shadow-2xl hover:shadow-eau/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="grid place-items-center w-14 h-14 rounded-xl bg-marine text-white shrink-0 group-hover:bg-eau group-hover:rotate-3 transition-all">
                    <Icon name={service.icon} size={24} strokeWidth={2.2} />
                  </div>
                  <span className="text-3xl select-none" aria-hidden>
                    {service.emoji}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-marine mb-2 group-hover:text-eau transition-colors">
                  {service.title}
                </h3>
                <p className="text-gris-text text-sm leading-relaxed mb-5">
                  {service.short}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-eau group-hover:gap-2.5 transition-all">
                  En savoir plus
                  <ArrowRight size={16} strokeWidth={2.4} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
