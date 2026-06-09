"use client";

import { motion } from "framer-motion";

const trustItems = [
  "Turnkey Electronics Factory Construction",
  "Clean Room & Controlled Environment Specialists",
  "ISO-Certified Quality & Safety Standards",
  "30–40% Faster Delivery than Conventional Construction",
  "Trusted Industrial Builder Across South India",
];

export default function TrustCarousel() {
  const items = [...trustItems, ...trustItems];

  return (
    <section
      className="
      relative
      h-[60px]
      overflow-hidden
      border-y border-white/5
      "
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #241A24 0%, #131723 100%)",
      }}
    >
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute flex h-full items-center whitespace-nowrap"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 px-8"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-[#E60C19]" />

            <span
              className="
              text-[14px]
              font-medium
              leading-[20px]
              text-[#E9E9E9]
              "
            >
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}