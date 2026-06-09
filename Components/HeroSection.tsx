"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  {
    value: "18+",
    label: "Years Experience",
  },
  {
    value: "40,000T",
    label: "Steel Production Per Year",
  },
  {
    value: "500+",
    label: "Projects Delivered",
  },
  {
    value: "Pan-India",
    label: "Execution",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#060606] overflow-hidden">
      <div className="relative w-full h-auto lg:h-[752px]">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0"
        >
          <Image
            src="/Images/herobg.png"
            alt="Electronics Manufacturing"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />
        {/* Left Gradient */}
        <div className="absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-[#060606] via-[#060606]/95 to-transparent" />
        {/* Red Overlay */}
        <div className="absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l from-[#E40015]/35 to-transparent" />
        {/* Glow */}
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
          className="absolute left-32 top-20 h-[300px] w-[300px] rounded-full bg-[#E40015]/10 blur-[120px]"
        />
        <div className="relative z-20 flex h-full items-center pt-12">
          <div className="w-full px-6 md:px-12 lg:px-[58px]">
            <div className="max-w-[700px]">
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 backdrop-blur-md"
              >
                <span className="h-2 w-2 rounded-full bg-[#E40015]" />

                <span className="text-[12px] font-medium text-white/80">
                  India's trusted electronics construction partner
                </span>
              </motion.div>
              {/* Heading */}

              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                }}
                className="mt-6 text-[42px] font-extrabold leading-[1.05] tracking-[-1px] text-white md:text-[60px]"
              >
                Precision-Built Facilities
                <br />
                for{" "}
                <span className="text-[#E40015]">
                  Electronics
                  <br />
                  Manufacturing
                </span>
              </motion.h1>
              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.4,
                }}
                className="mt-6 max-w-[600px] text-[16px] leading-[25px] text-white/75"
              >
                From clean rooms and ESD-safe assembly floors to high-volume
                production plants. Mekark delivers complete, turnkey electronics
                factory construction across India. Engineered for precision.
                Delivered on time.
              </motion.p>
              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                }}
                className="mt-12 lg:mt-10 flex flex-wrap gap-4"
              >
                <button className="group flex h-14 items-center gap-2 rounded-xl bg-[#E40015] px-7 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#c40012]">
                  Get a Free Consultation
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <button className="h-14 rounded-xl border border-white/15 bg-white/[0.04] px-7 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10">
                  View Our Services
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                }}
                className="
    mt-14
    grid
    grid-cols-2
    md:grid-cols-4
    border-t
    border-white/10
    pt-8
  "
              >
                {stats.map((item, index) => (
                  <div
                    key={item.label}
                    className="
        px-4
        py-3
        border-white/10
        md:border-r
        last:border-r-0
      "
                  >
                    <div className="text-[24px] md:text-[28px] font-extrabold tracking-tight text-white">
                      {item.value === "18+" && (
                        <>
                          18<span className="text-[#ED2024]">+</span>
                        </>
                      )}

                      {item.value === "40,000T" && (
                        <>
                          40,000<span className="text-[#ED2024]">T</span>
                        </>
                      )}

                      {item.value === "500+" && (
                        <>
                          500<span className="text-[#ED2024]">+</span>
                        </>
                      )}

                      {item.value === "Pan-India" && (
                        <>
                          Pan-<span className="text-[#ED2024]">India</span>
                        </>
                      )}
                    </div>

                    <div
                      className="
          mt-2
          text-[9px]
          md:text-[11px]
          uppercase
          tracking-[1.5px]
          md:tracking-[2px]
          text-white/45
        "
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
