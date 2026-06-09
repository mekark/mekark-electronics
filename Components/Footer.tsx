"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ElectronicsCTASection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        min-h-[500px]
        md:min-h-[591px]
      "
    >
      {/* Background Image */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/Images/footer.png" // update image name if needed
          alt="Electronics Manufacturing Facility"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(180deg,rgba(4,11,17,0.09)_0%,rgba(4,9,15,0.38)_100%),linear-gradient(90deg,#ED2024_0%,rgba(237,32,36,0.98)_17.77%,rgba(237,32,36,0.68)_46.69%,rgba(8,8,8,0)_78%)]
        "
      />

      {/* Moving Light Sweep */}
      <motion.div
        animate={{
          x: ["-120%", "220%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-y-0
          w-[350px]
          bg-white/10
          blur-[70px]
          rotate-[12deg]
          pointer-events-none
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] h-full min-h-[500px] md:min-h-[591px] flex items-center">
        <div className="max-w-[700px]">
          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="
              font-manrope
              font-extrabold
              text-[36px]
              sm:text-[42px]
              lg:text-[50px]
              leading-[1]
              tracking-[-1.5px]
            "
          >
            <span className="text-white">
              Build Your Electronics
              <br />
              Manufacturing Facility
            </span>

            <br />

            <span className="text-[#131313]">
              with Mekark
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              duration: 0.8,
            }}
            className="
              mt-6
              max-w-[529px]
              text-[17px]
              leading-[28px]
              font-medium
              text-white/80
            "
          >
            Talk to our industrial construction team about your factory
            layout, clean room requirements, MEP scope, and timeline.
            We deliver turnkey electronics facility projects across India
            on time, to spec.
          </motion.p>

          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              mt-10
              h-[56px]
              px-6
              rounded-[8px]
              bg-[#F3F3F3]
              shadow-[0px_14px_36px_0px_rgba(231,178,70,0.2)]
              flex
              items-center
              gap-[15px]
            "
          >
            <span
              className="
                font-manrope
                font-bold
                text-[14.6px]
                text-[#ED2024]
              "
            >
              Get a Free Consultation
            </span>

            <motion.div
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
              }}
            >
              <ArrowRight
                size={18}
                className="text-[#ED2024]"
              />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}