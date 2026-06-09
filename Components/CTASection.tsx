    "use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0B0D10]">
      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/plan.jpg')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Grid Overlay */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(255,255,255,0.12) 1.79%,
              rgba(255,255,255,0) 1.79%
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.12) 1.79%,
              rgba(255,255,255,0) 1.79%
            )
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Animated Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          left-32
          top-32
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#ED2024]
          blur-[140px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1440px]
          px-5
          md:px-10
          lg:px-[80px]
          py-20
          lg:py-[90px]
        "
      >
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[672px_1fr]
            items-center
          "
        >
          {/* LEFT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <h2
              className="
                text-white
                font-extrabold
                text-[42px]
                md:text-[60px]
                leading-[1.05]
                tracking-[-3px]
              "
            >
              Planning an
              <br />
              Electronics Factory?
            </h2>

            {/* Let's Talk */}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="relative inline-block mt-5"
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-[#ED2024]
                  blur-xl
                  opacity-50
                "
              />

              <span
                className="
                  relative
                  bg-[#ED2024]
                  px-4
                  py-1
                  text-white
                  text-[52px]
                  md:text-[60px]
                  font-extrabold
                  leading-none
                "
              >
                Let's Talk.
              </span>
            </motion.div>

            <p
              className="
                mt-8
                max-w-[531px]
                text-[15px]
                leading-[21px]
                text-white/75
              "
            >
              Whether it's a 10,000 sq.ft precision assembly
              unit or a 50,000+ sq.ft high-volume electronics
              production plant, our team will help you plan,
              engineer, and deliver it. Share your requirement,
              and we'll respond within 24 hours.
            </p>
          </motion.div>

          {/* RIGHT FORM */}

          {/* <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <div
              className="
                rounded-[24px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                md:p-8
              "
            >
              <h3 className="text-white text-xl font-semibold mb-6">
                Get a Free Consultation
              </h3>

              <div className="space-y-4">
                <input
                  placeholder="Your Name"
                  className="
                    w-full
                    h-12
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    px-4
                    text-white
                    outline-none
                  "
                />

                <input
                  placeholder="Email Address"
                  className="
                    w-full
                    h-12
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    px-4
                    text-white
                    outline-none
                  "
                />

                <input
                  placeholder="Phone Number"
                  className="
                    w-full
                    h-12
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    px-4
                    text-white
                    outline-none
                  "
                />

                <textarea
                  rows={4}
                  placeholder="Project Requirement"
                  className="
                    w-full
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    p-4
                    text-white
                    outline-none
                  "
                />

                <button
                  className="
                    h-12
                    w-full
                    rounded-xl
                    bg-[#ED2024]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  Request Consultation
                </button>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}