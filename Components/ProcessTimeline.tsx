"use client";

import { motion, type Variants } from "framer-motion";

const processSteps = [
  {
    step: "STEP 1 · Day 1 to 7",
    title: "Understanding Your Production Requirements",
    description:
      "We study your assembly line layout, cleanroom needs, utility requirements, and expansion plans before design begins.",
  },
  {
    step: "STEP 2 · Day 8 to 21",
    title: "Factory Design & Engineering",
    description:
      "Structural layout, electrical zones, HVAC, and MEP coordination are planned into a build-ready engineering package using STAAD Pro, TEKLA, and Autodesk.",
  },
  {
    step: "STEP 3 · Day 22 to 60",
    title: "Civil & Structural Execution",
    description:
      "Foundations, ESD flooring, steel framing, and primary infrastructure are executed with precision sequencing for a compliant production base.",
  },
  {
    step: "STEP 4 · Day 61 to 90",
    title: "MEP & Utility Integration",
    description:
      "Electrical systems, air handling, and plant utilities integrated so your electronics manufacturing facility operates as one seamless environment.",
  },
  {
    step: "STEP 5 · Day 91 to 120",
    title: "Commissioning & Handover",
    description:
      "Testing, safety checks, and final commissioning completed; your electronics factory handed over production-ready.",
  },
];

const easePremium = [0.22, 1, 0.36, 1] as const;

const headerStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: easePremium },
  },
};

const headingLine: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easePremium },
  },
};

const stepTitle: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easePremium },
  },
};

const stepDescription: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easePremium },
  },
};

const slideFromSide = (isLeft: boolean): Variants => ({
  hidden: {
    opacity: 0,
    x: isLeft ? -64 : 64,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: easePremium,
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
});

const stepLabelVariant = (isLeft: boolean): Variants => ({
  hidden: { opacity: 0, x: isLeft ? -12 : 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easePremium },
  },
});

const dotEnter: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 320, damping: 22, delay: 0.1 },
  },
};

const connectorLine = (isLeft: boolean): Variants => ({
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: easePremium, delay: 0.25 },
  },
});

export default function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-black py-[70px] lg:py-[100px]">
      {/* Animated grid background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: easePremium }}
        className="
          absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Ambient glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: easePremium }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#E12424]/[0.04] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 lg:px-[80px]">
        <motion.div
          variants={headerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Badge */}
          <motion.div
            variants={fadeUpBlur}
            className="inline-flex items-center gap-2 rounded-full border border-[#492B2C] bg-[#180303] px-3 py-1.5"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.65, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="h-[7px] w-[7px] rounded-full bg-[#E40015] shadow-[0_0_12px_rgba(228,0,21,0.9)]"
            />
            <span className="text-xs text-white">Our Process</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={headingLine}
            className="
              mt-6
              max-w-[672px]
              text-white
              font-bold
              leading-[1.02]
              tracking-[-1.2px]
              text-[38px]
              lg:text-[50px]
            "
          >
            From day one to production-ready,
            <br />
            in 120 days
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Animated center line */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: easePremium, delay: 0.2 }}
            style={{ originY: 0 }}
            className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block"
          />

          {/* Traveling pulse along the line */}
          <motion.div
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1,
            }}
            className="pointer-events-none absolute top-0 left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-[#E12424] shadow-[0_0_20px_rgba(225,36,36,0.9)] lg:block"
          />

          <div className="space-y-24">
            {processSteps.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className="
                    relative
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    items-center
                    gap-10
                  "
                >
                  {/* Timeline dot */}
                  <motion.div
                    variants={dotEnter}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="
                      hidden lg:flex
                      absolute left-1/2 top-10
                      h-4 w-4
                      -translate-x-1/2
                      items-center justify-center
                    "
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: index * 0.3,
                      }}
                      className="absolute inset-0 rounded-full bg-[#E12424]/40"
                    />
                    <span
                      className="
                        relative z-10 h-4 w-4 rounded-full
                        bg-gradient-to-br from-[#E12424] to-[#FF4E43]
                        shadow-[0_0_30px_rgba(225,36,36,0.8)]
                      "
                    />
                  </motion.div>

                  {/* Horizontal connector */}
                  <motion.div
                    variants={connectorLine(isLeft)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    style={{ originX: isLeft ? 1 : 0 }}
                    className={`
                      pointer-events-none absolute top-[42px] hidden h-px w-16 bg-gradient-to-r lg:block
                      ${isLeft ? "right-1/2 mr-2 from-[#E12424]/60 to-transparent" : "left-1/2 ml-2 from-transparent to-[#E12424]/60"}
                    `}
                  />

                  {/* Content */}
                  <motion.div
                    variants={slideFromSide(isLeft)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35, margin: "-60px" }}
                    className={`
                      ${isLeft ? "lg:text-right lg:pr-16" : "lg:order-2 lg:pl-16"}
                    `}
                  >
                    <motion.p
                      variants={stepLabelVariant(isLeft)}
                      className="text-xs font-bold tracking-[1.2px] text-[#E12424] uppercase"
                    >
                      {item.step}
                    </motion.p>

                    <motion.h3
                      variants={stepTitle}
                      className="
                        mt-3
                        text-white
                        font-bold
                        leading-tight
                        text-[28px]
                        lg:text-[42px]
                      "
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      variants={stepDescription}
                      className="
                        mt-4
                        text-white/70
                        leading-[26px]
                        text-[15px]
                        lg:text-[16px]
                      "
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>

                  <div className="hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
