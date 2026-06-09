"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const advantages = [
  {
    number: "01",
    title: "We Understand Electronics Manufacturing",
    description:
      "Building for electronics isn't like general industrial construction. ESD protection, air quality control, temperature stability, and utility reliability all feed directly into product quality. We design and build with your production process in mind, not just the structure around it.",
  },
  {
    number: "02",
    title: "True Turnkey — One Team from Design to Handover",
    description:
      "Structural steel, civil construction, MEP, HVAC, clean rooms, and utilities all coordinated by Mekark. No fragmented contracts, no handover gaps, no blame-shifting between trades.",
  },
  {
    number: "03",
    title: "40,000 T/Year In-House Fabrication",
    description:
      "Our four Tamil Nadu plants fabricate over 3,000 MT of precision steel per month, eliminating supply delays on any electronics factory project of any size and keeping your timeline intact.",
  },
  {
    number: "04",
    title: "Engineering-Led Execution",
    description:
      "Every facility is designed using STAAD Pro, TEKLA, and Autodesk. Full structural analysis, 3D modelling, and documented engineering before a single beam is cut.",
  },
  {
    number: "05",
    title: "30–40% Faster than Conventional Construction",
    description:
      "Our pre-engineered building method and integrated delivery model bring electronics manufacturing plants online significantly faster than traditional construction.",
  },
];

export default function TheMekarkAdvantage() {
  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[80px]">

        {/* ── OUTER WRAPPER: flex row on desktop, stacked on mobile ── */}
        <div className="flex flex-col lg:flex-row lg:gap-[50px] lg:items-start">

          {/* ══════════════════════════════════════════
              LEFT PANEL — sticky
              Must have:
                • position: sticky
                • top: value that clears your navbar
                • alignSelf: flex-start   ← critical, prevents it from
                                            stretching to full flex height
                • flex-shrink: 0          ← keeps it at fixed width
          ══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: "sticky",
              top: "90px",
              alignSelf: "flex-start",
              flexShrink: 0,
              width: "411px",
            }}
            className="w-full lg:w-[411px] mb-10 lg:mb-0"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD8D3] bg-[#FFECE9] px-3 py-1.5">
              <span className="h-[7px] w-[7px] rounded-full bg-[#E40015]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.53px] text-[#E60C19]">
                Why Mekark?
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-[42px] font-bold leading-[1.02] tracking-[-1.2px] text-[#111] lg:text-[50px]">
              The <span className="text-[#E12424]">Mekark</span>
              <br />
              Advantage
            </h2>

            {/* IMAGE */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative mt-8 overflow-hidden rounded-[20px]"
            >
              <Image
                src="/Images/adv.png"
                alt="Mekark Engineering"
                width={411}
                height={308}
                priority
                className="w-full object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(225,36,36,0.8)_0%,rgba(225,36,36,0)_100%)] mix-blend-multiply" />

              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[12px] uppercase tracking-[1.2px] text-white">
                  Engineering Stack
                </p>
                <p className="mt-1 text-[16px] font-bold leading-6 text-white">
                  STAAD Pro · TEKLA · Autodesk
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ══════════════════════════════════════════
              RIGHT PANEL — scrolls with the page
              flex: 1 fills remaining width
          ══════════════════════════════════════════ */}
          <div className="flex-1 space-y-6">
            {advantages.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="
                  group
                  rounded-[16px]
                  border
                  border-[#E4E4E4]
                  bg-white
                  p-[28px]
                  min-h-[172px]
                  transition-all
                  duration-300
                  hover:border-[#E12424]/30
                  hover:shadow-[0_20px_60px_rgba(225,36,36,0.08)]
                "
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  {/* Number */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="
                      min-w-[70px]
                      text-[42px]
                      font-bold
                      leading-none
                      lg:text-[48px]
                      bg-gradient-to-r
                      from-[#E12424]
                      to-[#FF4E43]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {item.number}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold leading-[1.4] text-[#0B0B0B] lg:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[26px] text-[#555555] lg:text-[16px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Animated bottom line on hover */}
                <div
                  className="
                    mt-5
                    h-[2px]
                    w-0
                    bg-[#E12424]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}