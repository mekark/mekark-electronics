"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    name: "TATA",
    logo: "/Images/tata.png",
  },
  {
    name: "Bosch",
    logo: "/Images/bos.png",
  },
  {
    name: "Johnson",
    logo: "/Images/je.png",
  },
];

export default function AboutMekark() {
  return (
    <section className="bg-white py-[70px] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[80px]">
        <div className="grid items-center gap-16 lg:grid-cols-[584px_1fr]">
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-[24px]"
            >
              <Image
                src="/Images/about.jpg"
                alt="Mekark Electronics Facility"
                width={470}
                height={560}
                className="
                h-[520px]
                w-full
                object-cover
                rounded-[24px]
              "
              />

              {/* subtle shine */}

              <motion.div
                animate={{
                  x: ["-150%", "250%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                absolute
                top-0
                left-0
                h-full
                w-[120px]
                rotate-[20deg]
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
              "
              />
            </motion.div>

            {/* Floating Stats Card */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                -bottom-6
                right-[-20px]
                rounded-2xl
                bg-black
                px-6
                py-5
                shadow-[0px_20px_60px_-20px_rgba(225,36,36,0.35)]
              "
            >
              <div
                className="
                  text-[36px]
                  font-bold
                  leading-none
                  bg-gradient-to-r
                  from-[#E12424]
                  to-[#FF4E43]
                  bg-clip-text
                  text-transparent
                "
              >
                25+
              </div>

              <p className="mt-2 max-w-[170px] text-sm leading-5 text-white/70">
                years engineering controlled production environments
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <div>
            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#FFD8D3]
                bg-[#FFECE9]
                px-3
                py-1.5
              "
            >
              <span className="h-[7px] w-[7px] rounded-full bg-[#E40015]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.5px] text-[#E60C19]">
                About Mekark
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="
                mt-4
                max-w-[620px]
                text-[36px]
                md:text-[50px]
                font-bold
                leading-[1.02]
                tracking-[-1.2px]
                text-[#151011]
              "
            >
              Engineering Environments
              <br />
              Where <span className="text-[#E60F1A]">Precision</span> Is Non-
              <br />
              Negotiable
            </motion.h2>

            {/* Intro */}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="
                mt-8
                max-w-[628px]
                text-[16px]
                leading-[26px]
                text-[#555555]
              "
            >
              Electronics manufacturing demands more than a building; it needs a
              controlled, reliable production environment where every
              structural, mechanical, and electrical system is designed around
              your process.
            </motion.p>

            {/* Body */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="
                mt-8
                max-w-[650px]
                space-y-6
                text-[16px]
                leading-[32px]
                text-[#555555]
              "
            >
              <p>
                Mekark Structures India Pvt. Ltd. brings 25+ years of industrial
                construction expertise to electronics facility projects across
                India. We have delivered clean rooms, ESD-safe assembly plants,
                and high-volume electronics production facilities for clients
                including
                <strong> Tata Electronics</strong>,<strong> Bosch</strong>, and
                <strong> Johnson Electric</strong>.
              </p>

              <p>
                Our four manufacturing facilities across Tamil Nadu produce over
                3,000 MT of fabricated steel per month. Every project is
                engineered using
                <strong> STAAD Pro</strong>,<strong> TEKLA</strong>, and
                <strong> Autodesk</strong>, and delivered to ISO-certified
                quality standards on time.
              </p>
            </motion.div>

            {/* Logos */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-8
              "
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  whileHover={{
                    y: -5,
                  }}
                  className="
relative
h-[70px]
w-[100px]
"
                >
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
