"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    initials: "SB",
    name: "Suresh Balakrishnan",
    role: "Plant Head, Chennai",
    content:
      "Mekark built our electronics assembly plant with exactly the clean, controlled environment we needed. ESD flooring, HVAC integration, structural steel all delivered as one seamless turnkey project. No gaps between contractors, no delays.",
  },
  {
    initials: "NR",
    name: "Nithya Ramachandran",
    role: "Director of Infrastructure, Coimbatore",
    content:
      "We had a tight 14-week window to get our production facility operational. Mekark delivered on time without cutting corners. Their in-house fabrication capacity meant materials were never a bottleneck.",
  },
  {
    initials: "AV",
    name: "Arun Venkatesh",
    role: "GM Projects, Bengaluru",
    content:
      "What stood out was how well Mekark understood electronics manufacturing. Controlled temperature zones, ESD protection, utility redundancy. This was a purpose-built precision facility.",
  },
  {
    initials: "DK",
    name: "Deepa Krishnan",
    role: "Facilities Head, Hosur",
    content:
      "Clean room construction, MEP integration, HVAC. Mekark handled it all under one contract. STAAD Pro-designed structure, clean execution, zero rework.",
  },
];

const StarRating = () => (
  <div className="flex gap-1 text-[#E60C19] text-sm">
    {[...Array(5)].map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

export default function Testimonials() {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="bg-[#FFF2F6] py-[70px] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[80px]">
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-[#FFD8D3] bg-[#FFECE9] px-3 py-1.5"
        >
          <span className="h-[7px] w-[7px] rounded-full bg-[#E40015]" />

          <span className="text-[11px] font-medium uppercase tracking-[0.5px] text-[#E60C19]">
            Client Testimonials
          </span>
        </motion.div>

        {/* Header */}

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              max-w-[811px]
              text-[36px]
              md:text-[50px]
              font-extrabold
              leading-[1.1]
              tracking-[-2.5px]
              text-[#151011]
            "
          >
            What Electronics Manufacturers
            <br />
            Say About Mekark
          </motion.h2>

          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            <StarRating />
          </motion.div>
        </div>
      </div>

      {/* Carousel */}

      <div className="mt-12 overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-6"
        >
          {marqueeItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                w-[302px]
                h-[405px]
                rounded-[24px]
                border
                border-[#E8E3E4]
                bg-white
                p-[30px]
                flex
                flex-col
                shrink-0
              "
            >
              {/* Top */}

              <div className="flex items-start justify-between">
                <StarRating />

                <motion.div
                  animate={{
                    rotate: [0, 5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Quote />
                </motion.div>
              </div>

              {/* Content */}

              <p
                className="
                  mt-8
                  text-[15px]
                  leading-[24px]
                  text-[#151011D9]
                  flex-1
                "
              >
                {item.content}
              </p>

              {/* Footer */}

              <div className="border-t border-[#E8E3E4] pt-5">
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E40015]
                      text-white
                      text-sm
                      font-bold
                    "
                  >
                    {item.initials}
                  </div>

                  <div>
                    <h4 className="text-[16px] font-semibold text-[#151011]">
                      {item.name}
                    </h4>

                    <p className="text-[12px] text-[#5A5355]">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
