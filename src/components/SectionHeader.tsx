"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className={cn(
            "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4",
            light
              ? "bg-white/15 text-white"
              : "bg-eau/10 text-eau"
          )}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold text-balance",
          light ? "text-white" : "text-marine"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            light ? "text-white/80" : "text-gris-text"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
