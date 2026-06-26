"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const services = [
  {
    title: "Turnkey Electronics Factory Construction",
    description:
      "Full-scope design, civil works, fabrication, and erection for electronics production facilities.",
    image: "/Images/1.png",
  },
  {
    title: "Clean Room Construction",
    description:
      "Controlled environment build-outs for precision electronics assembly and semiconductor production.",
    image: "/Images/2.png",
  },
  {
    title: "Pre-Engineered Steel Buildings",
    description:
      "Fast, accurate PEB structures tailored for electronics factory layouts and workflow requirements.",
    image: "/Images/3.png",
  },
  {
    title: "Industrial Civil Works",
    description:
      "Foundations, structural frames, and flooring systems built for electronics production environments.",
    image: "/Images/4.png",
  },
  {
    title: "MEP & Utility Systems",
    description:
      "Electrical, mechanical, and plumbing infrastructure integrated for continuous plant operations.",
    image: "/Images/5.png",
  },
  {
    title: "ESD-Safe Flooring & Interiors",
    description:
      "Anti-static flooring, partition systems, and controlled interiors for precision electronics assembly.",
    image: "/Images/6.png",
  },
  {
    title: "HVAC & Air Handling",
    description:
      "Temperature and humidity control systems engineered specifically for electronics manufacturing.",
    image: "/Images/7.png",
  },
  {
    title: "EOT Crane & Material Handling",
    description:
      "Overhead crane systems and internal logistics infrastructure for high-volume production lines.",
    image: "/Images/8.jpg",
  },
];

const easePremium = [0.22, 1, 0.36, 1] as const;

const leftStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.05 },
  },
};

const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easePremium },
  },
};

const headingLine: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easePremium },
  },
};

const gridStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.25 },
  },
};

const cardEnter: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.92,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easePremium },
  },
};

const cardInteraction: Variants = {
  rest: {},
  hover: {},
};

const cardMotion: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 0 0 rgba(237, 32, 36, 0)",
  },
  hover: {
    y: -5,
    scale: 1.015,
    boxShadow: "0 20px 40px -12px rgba(237, 32, 36, 0.22)",
    transition: { type: "spring", stiffness: 420, damping: 28 },
  },
};

const imageMotion: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { duration: 0.65, ease: easePremium },
  },
};

const descriptionMotion: Variants = {
  rest: {
    opacity: 0,
    maxHeight: 0,
    marginTop: 0,
    filter: "blur(4px)",
  },
  hover: {
    opacity: 1,
    maxHeight: 80,
    marginTop: 6,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: easePremium, delay: 0.06 },
  },
};

const headingLines = [
  <>Everything Your</>,
  <>Electronics Facility</>,
  <>Needs,</>,
  <>
    <span className="text-[#ED2024]"> Under</span>
    <br />
    <span className="text-[#ED2024]">One Roof</span>
  </>,
];

export default function ServicesSection() {
  return (
    <section id="our-services" className="relative overflow-hidden bg-[#131313] py-[70px]">
      {/* Ambient glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: easePremium }}
        className="pointer-events-none absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(237,32,36,0.08)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[80px]">
        <div className="grid gap-12 lg:grid-cols-[421px_1fr] lg:gap-x-[80px] lg:gap-y-0 lg:items-start">
          {/* Left content */}
          <motion.div
            variants={leftStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <motion.div
              variants={fadeUpBlur}
              className="inline-flex items-center gap-2 rounded-full border border-[#FFD8D3] bg-[#FFECE9] px-3 py-1.5"
            >
              <motion.span
                animate={{ scale: [1, 1.35, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="h-[7px] w-[7px] rounded-full bg-[#E40015]"
              />
              <span className="text-[11px] font-medium uppercase tracking-[0.5px] text-[#E60C19]">
                Our Services
              </span>
            </motion.div>

            <h2 className="mt-5 overflow-hidden text-[36px] font-extrabold leading-[38px] tracking-[-1.92px] text-white md:text-[48px] md:leading-[48px]">
              {headingLines.map((line, i) => (
                <motion.span
                  key={i}
                  variants={headingLine}
                  className="block"
                >
                  {line}
                  {i < headingLines.length - 1 && <br />}
                </motion.span>
              ))}
            </h2>

            <motion.p
              variants={fadeUpBlur}
              className="mt-6 max-w-[421px] text-[16px] leading-[24px] text-[#9D9D9D]"
            >
              Whether you&apos;re setting up a new assembly plant or scaling an
              existing electronics production facility, Mekark manages the entire
              build from design to handover.
            </motion.p>

            <motion.div
              variants={fadeUpBlur}
              className="mt-8 h-[3px] w-16 origin-left rounded-full bg-gradient-to-r from-[#ED2024] to-[#ED2024]/0"
            />
          </motion.div>

          {/* Cards grid */}
          <motion.div
            variants={gridStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid w-full max-w-[752px] grid-cols-1 gap-[9px] sm:grid-cols-2 lg:justify-self-start"
          >
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                variants={cardEnter}
                className="relative isolate h-[180px] cursor-pointer overflow-hidden rounded-[22px] sm:h-[136px]"
              >
                <motion.div
                  variants={cardInteraction}
                  initial="rest"
                  whileHover="hover"
                  className="absolute inset-0 rounded-[22px]"
                >
                  <motion.div
                    variants={cardMotion}
                    className="absolute inset-0 rounded-[22px]"
                  >
                  {/* Image */}
                  <motion.div
                    variants={imageMotion}
                    className="absolute inset-0 z-0 overflow-hidden"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 372px"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Shine sweep on hover */}
                  <motion.div
                    variants={{
                      rest: { x: "-130%", opacity: 0 },
                      hover: { x: "130%", opacity: 1 },
                    }}
                    transition={{ duration: 0.75, ease: easePremium }}
                    className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
                    aria-hidden
                  >
                    <div className="absolute top-0 left-0 h-full w-[45%] -skew-x-12 bg-gradient-to-r from-transparent via-white/18 to-transparent" />
                  </motion.div>

                  <motion.div
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.35 }}
                    className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(237,32,36,0.12),transparent_70%)]"
                    aria-hidden
                  />

                  <motion.div
                    variants={{
                      rest: { opacity: 1 },
                      hover: { opacity: 0 },
                    }}
                    transition={{ duration: 0.35, ease: easePremium }}
                    className="service-card-overlay pointer-events-none absolute inset-0 z-[2]"
                    aria-hidden
                  />
                  <motion.div
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.35, ease: easePremium }}
                    className="service-card-overlay-hover pointer-events-none absolute inset-0 z-[2]"
                    aria-hidden
                  />

                  {/* Content */}
                  <div className="absolute inset-0 z-[3] flex flex-col justify-end p-4 pb-3">
                    <motion.div
                      variants={{
                        rest: { opacity: 0, height: "42%" },
                        hover: { opacity: 1, height: "78%" },
                      }}
                      transition={{ duration: 0.4, ease: easePremium }}
                      className="service-card-text-scrim pointer-events-none absolute inset-x-0 bottom-0 rounded-b-[22px]"
                      aria-hidden
                    />

                    <div className="relative z-[1]">
                      <motion.h3
                        variants={{
                          rest: { y: 0 },
                          hover: { y: -2 },
                        }}
                        transition={{ duration: 0.35, ease: easePremium }}
                        className="text-[14px] font-semibold leading-[21px] text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.85)]"
                      >
                        {service.title}
                      </motion.h3>

                      <motion.p
                        variants={descriptionMotion}
                        className="overflow-hidden text-[12px] leading-5 text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.95)]"
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </div>

                  <motion.div
                    variants={{
                      rest: {
                        borderColor: "rgba(255,255,255,0.1)",
                        opacity: 1,
                      },
                      hover: {
                        borderColor: "rgba(237,32,36,0.55)",
                        opacity: 1,
                      },
                    }}
                    transition={{ duration: 0.35 }}
                    className="pointer-events-none absolute inset-0 z-[4] rounded-[22px] border"
                  />
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
