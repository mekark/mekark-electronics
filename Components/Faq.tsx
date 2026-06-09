"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "Q01",
    question:
      "What's different about building for electronics manufacturing vs general industrial construction?",
    answer:
      "Electronics facilities need ESD-safe environments, clean zones, precise HVAC, and highly reliable utility infrastructure—all directly tied to production quality. Mekark designs and integrates all of these as part of our standard turnkey electronics factory construction scope.",
  },
  {
    id: "Q02",
    question: "Do you build clean rooms for electronics assembly?",
    answer:
      "Yes. We construct clean rooms and controlled production zones for electronics assembly, component manufacturing, and precision processes, built to your required cleanliness classification and fully integrated with the wider facility.",
  },
  {
    id: "Q03",
    question: "How fast can you deliver an electronics manufacturing plant?",
    answer:
      "Most electronics factory projects are completed in 12–20 weeks from design approval. Our pre-engineered building approach and 3,000 MT/month in-house steel production keep timelines tight, typically 30–40% faster than conventional construction.",
  },
  {
    id: "Q04",
    question:
      "Is the full scope civil, structural, MEP, HVAC handled by Mekark?",
    answer:
      "Yes. Mekark delivers complete turnkey electronics facility construction including structural steel, civil works, MEP, HVAC, ESD flooring, utilities, and commissioning—all under one contract with one team.",
  },
  {
    id: "Q05",
    question: "What project sizes do you work with?",
    answer:
      "From 10,000 sq.ft precision assembly units to 50,000+ sq.ft high-volume electronics production facilities, we scale to your project requirement.",
  },
  {
    id: "Q06",
    question: "Do you serve clients outside Tamil Nadu?",
    answer:
      "Yes. We deliver electronics manufacturing facility construction projects across India.",
  },
  {
    id: "Q07",
    question: "How do I get started?",
    answer:
      "Fill in our consultation form or call +91 97909 24754 or email admin@mekark.com. Our team responds within 24 hours.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F9FAFC] py-[70px]">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
        <div className="grid lg:grid-cols-[430px_1fr] gap-12 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-[#ED202433] bg-[#ED20241A] px-3 py-1 mb-6">
              <span className="text-[#E60F1A] text-xs font-bold tracking-wide uppercase">
                FAQ
              </span>
            </div>

            {/* Heading */}
            <h2 className="leading-none mb-8">
              <span className="block text-[#101116] font-extrabold text-4xl md:text-5xl">
                Frequently Asked
              </span>

              <span className="block text-[#E60F1A] font-extrabold text-4xl md:text-5xl">
                Questions
              </span>
            </h2>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-[140%] max-w-none -ml-12 lg:-ml-20"
            >
              <Image
                src="/Images/faq.png"
                alt="Electronics Manufacturing Facility"
                width={1000}
                height={740}
                priority
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.id}
                  layout
                  className="overflow-hidden rounded-[20px] border border-[#E3E4E7] bg-white"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-[#E60F1A] text-xs font-bold mt-1 min-w-[35px]">
                        {faq.id}
                      </span>

                      <span className="text-[#101116] font-bold text-base md:text-lg leading-7">
                        {faq.question}
                      </span>
                    </div>

                    {isOpen ? (
                      <ChevronDown className="w-5 h-5 shrink-0 text-zinc-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 shrink-0 text-zinc-500" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <div className="px-6 pb-6 pl-[75px] text-zinc-600 leading-7">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
