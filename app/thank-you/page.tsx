import Link from "next/link";
import { Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { PHONE_NUMBER, whatsappHref } from "@/lib/constants";

export const metadata = {
  title: "Thank You — Mekark Electronics",
  description:
    "Thank you for your electronics project enquiry. Our team will get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#060606] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-[560px] text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#ED2024]/15 border border-[#ED2024]/30">
          <span className="text-4xl text-[#ED2024]">✓</span>
        </div>

        <h1 className="font-extrabold text-[32px] sm:text-[40px] leading-tight tracking-[-1px] text-white">
          Thank You!
        </h1>

        <p className="mt-4 text-[16px] leading-[26px] text-white/70">
          Your electronics project enquiry has been submitted successfully. Our
          team will review your requirements and get back to you within 24
          hours.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex h-[52px] w-full sm:w-auto min-w-[180px] items-center justify-center gap-2 rounded-[8px] bg-[#ED2024] px-6 font-bold text-[14px] text-white transition-all duration-300 hover:scale-[1.02] btn-shadow-red"
          >
            <Phone size={18} />
            Call Us
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[52px] w-full sm:w-auto min-w-[180px] items-center justify-center gap-2 rounded-[8px] bg-[#25D366] px-6 font-bold text-[14px] text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#20BD5A]"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-[14px] font-semibold text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
