"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Reviews() {
  return (
    <section className="py-20 md:py-28 bg-gris-clair">
      <div className="container-x">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-action/10 text-action font-bold uppercase text-xs tracking-wider mb-4">
            Avis clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-marine text-balance max-w-3xl mx-auto">
            Ils nous ont fait confiance
          </h2>
          <div className="mt-5 inline-flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="text-action fill-action"
              />
            ))}
            <span className="ml-2 text-sm font-semibold text-marine">
              4.9/5 — clients satisfaits
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-7 md:p-8 shadow-md hover:shadow-2xl hover:shadow-marine/10 transition-shadow"
            >
              <Quote
                size={42}
                className="absolute top-5 right-5 text-eau/15"
              />
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-action fill-action"
                  />
                ))}
              </div>
              <blockquote className="text-noir/85 leading-relaxed mb-6">
                « {t.text} »
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-marine/10">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-gradient-to-br from-marine to-eau text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-marine">{t.name}</p>
                  <p className="text-xs text-gris-text">{t.city}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
