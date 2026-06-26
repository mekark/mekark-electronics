"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, MessageCircle, Phone } from "lucide-react";
import { PHONE_NUMBER, whatsappHref } from "@/lib/constants";

const PROJECT_TYPES = [
  "Electronics Manufacturing Unit",
  "PCB / Component Assembly Facility",
  "Consumer Electronics Production Facility",
  "Testing / R&D / Lab Facility",
  "Electronics Warehouse / Storage Facility",
] as const;

const PROJECT_AREAS = [
  { label: "Select Project Area", value: "" },
  { label: "10,000–20,000 Sq. Ft.", value: "10,000–20,000 Sq. Ft." },
  { label: "20,000–30,000 Sq. Ft.", value: "20,000–30,000 Sq. Ft." },
  { label: "30,000–50,000 Sq. Ft.", value: "30,000–50,000 Sq. Ft." },
  { label: "50,000+ Sq. Ft.", value: "50,000+ Sq. Ft." },
] as const;

const START_TIMELINES = [
  "Immediately",
  "Within 1 Month",
  "Within 3 Months",
  "Planning for Future",
] as const;

const BUDGETS = [
  "Below ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹5 Crores",
  "Above ₹5 Crores",
] as const;

type FormData = {
  name: string;
  phone: string;
  email: string;
  projectLocation: string;
  projectType: string;
  projectArea: string;
  startTimeline: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  projectLocation: "",
  projectType: "",
  projectArea: "",
  startTimeline: "",
  budget: "",
  message: "",
};

const inputClassName =
  "w-full h-12 rounded-xl bg-white/5 border px-4 text-[14px] text-white outline-none transition-colors placeholder:text-white/40 focus:border-[#ED2024]/60";

const selectClassName =
  "w-full h-12 rounded-xl bg-white/5 border px-4 text-[14px] text-white outline-none transition-colors focus:border-[#ED2024]/60 appearance-none cursor-pointer";

function fieldBorder(hasError: boolean) {
  return hasError ? "border-red-400/80" : "border-white/10";
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\d{10}$/.test(data.phone)) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.projectLocation.trim()) {
    errors.projectLocation = "Project location is required.";
  }
  if (!data.projectType) errors.projectType = "Please select a project type.";
  if (!data.projectArea) errors.projectArea = "Please select project area.";
  if (!data.startTimeline) {
    errors.startTimeline = "Please select a start timeline.";
  }
  if (!data.budget) errors.budget = "Please select a budget range.";

  return errors;
}

export default function Footer() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField<K extends keyof FormData>(key: K, value: FormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function handlePhoneChange(value: string) {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
    updateField("phone", digitsOnly);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        setSubmitError(
          result.error ??
            result.message ??
            "Submission failed. Please try again.",
        );
        return;
      }

      router.push("/thank-you");
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        min-h-[500px]
        md:min-h-[591px]
      "
    >
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <Image
          src="/Images/footer.png"
          alt="Electronics Manufacturing Facility"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(180deg,rgba(4,11,17,0.09)_0%,rgba(4,9,15,0.38)_100%),linear-gradient(90deg,#ED2024_0%,rgba(237,32,36,0.98)_17.77%,rgba(237,32,36,0.68)_46.69%,rgba(8,8,8,0)_78%)]
        "
      />

      <motion.div
        animate={{ x: ["-120%", "220%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
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

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] py-12 md:py-16 lg:py-20">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,500px)] xl:grid-cols-[minmax(0,1fr)_520px] items-start">
          <div className="max-w-[620px]">
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
              <span className="text-[#131313]">with Mekark</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="
                mt-6
                max-w-[529px]
                text-[17px]
                leading-[28px]
                font-medium
                text-white/80
              "
            >
              Talk to our industrial construction team about your factory layout,
              clean room requirements, MEP scope, and timeline. We deliver turnkey
              electronics facility projects across India on time, to spec.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  gap-2
                  rounded-[8px]
                  bg-[#F3F3F3]
                  px-6
                  shadow-[0px_14px_36px_0px_rgba(231,178,70,0.2)]
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                "
              >
                <Phone size={18} className="text-[#ED2024]" />
                <span className="font-manrope font-bold text-[14.6px] text-[#ED2024]">
                  Call Us
                </span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  gap-2
                  rounded-[8px]
                  bg-[#25D366]
                  px-6
                  shadow-[0px_14px_36px_0px_rgba(37,211,102,0.25)]
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-[#20BD5A]
                "
              >
                <MessageCircle size={18} className="text-white" />
                <span className="font-manrope font-bold text-[14.6px] text-white">
                  WhatsApp Us
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            id="footer-contact-form"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              w-full
              max-w-[520px]
              lg:ml-auto
              lg:justify-self-end
              rounded-[24px]
              border
              border-white/10
              bg-black/35
              backdrop-blur-xl
              p-5
              sm:p-6
            "
          >
            <h3 className="text-white text-xl font-semibold mb-6">
              Electronics Project Enquiry
            </h3>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className={`${inputClassName} ${fieldBorder(!!errors.name)}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-[12px] text-red-300">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    maxLength={10}
                    className={`${inputClassName} ${fieldBorder(!!errors.phone)}`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-[12px] text-red-300">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={`${inputClassName} ${fieldBorder(!!errors.email)}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-[12px] text-red-300">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="projectLocation" className="sr-only">
                    Project Location
                  </label>
                  <input
                    id="projectLocation"
                    type="text"
                    placeholder="Project Location *"
                    value={formData.projectLocation}
                    onChange={(e) =>
                      updateField("projectLocation", e.target.value)
                    }
                    className={`${inputClassName} ${fieldBorder(!!errors.projectLocation)}`}
                    aria-invalid={!!errors.projectLocation}
                    aria-describedby={
                      errors.projectLocation ? "location-error" : undefined
                    }
                  />
                  {errors.projectLocation && (
                    <p
                      id="location-error"
                      className="mt-1 text-[12px] text-red-300"
                    >
                      {errors.projectLocation}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="projectType" className="sr-only">
                    What electronics project are you planning?
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => updateField("projectType", e.target.value)}
                    className={`${selectClassName} ${fieldBorder(!!errors.projectType)} ${!formData.projectType ? "text-white/40" : ""}`}
                    aria-invalid={!!errors.projectType}
                    aria-describedby={
                      errors.projectType ? "project-type-error" : undefined
                    }
                  >
                    <option value="" disabled>
                      What electronics project are you planning? *
                    </option>
                    {PROJECT_TYPES.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#1a1a1a] text-white"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p
                      id="project-type-error"
                      className="mt-1 text-[12px] text-red-300"
                    >
                      {errors.projectType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="projectArea" className="sr-only">
                    Project Sq. Ft.
                  </label>
                  <select
                    id="projectArea"
                    value={formData.projectArea}
                    onChange={(e) => updateField("projectArea", e.target.value)}
                    className={`${selectClassName} ${fieldBorder(!!errors.projectArea)} ${!formData.projectArea ? "text-white/40" : ""}`}
                    aria-invalid={!!errors.projectArea}
                    aria-describedby={
                      errors.projectArea ? "project-area-error" : undefined
                    }
                  >
                    {PROJECT_AREAS.map((option) => (
                      <option
                        key={option.label}
                        value={option.value}
                        disabled={option.value === ""}
                        className="bg-[#1a1a1a] text-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.projectArea && (
                    <p
                      id="project-area-error"
                      className="mt-1 text-[12px] text-red-300"
                    >
                      {errors.projectArea}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="startTimeline" className="sr-only">
                    When do you plan to start the project?
                  </label>
                  <select
                    id="startTimeline"
                    value={formData.startTimeline}
                    onChange={(e) =>
                      updateField("startTimeline", e.target.value)
                    }
                    className={`${selectClassName} ${fieldBorder(!!errors.startTimeline)} ${!formData.startTimeline ? "text-white/40" : ""}`}
                    aria-invalid={!!errors.startTimeline}
                    aria-describedby={
                      errors.startTimeline ? "start-timeline-error" : undefined
                    }
                  >
                    <option value="" disabled>
                      When do you plan to start the project? *
                    </option>
                    {START_TIMELINES.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#1a1a1a] text-white"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.startTimeline && (
                    <p
                      id="start-timeline-error"
                      className="mt-1 text-[12px] text-red-300"
                    >
                      {errors.startTimeline}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className="sr-only">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => updateField("budget", e.target.value)}
                    className={`${selectClassName} ${fieldBorder(!!errors.budget)} ${!formData.budget ? "text-white/40" : ""}`}
                    aria-invalid={!!errors.budget}
                    aria-describedby={errors.budget ? "budget-error" : undefined}
                  >
                    <option value="" disabled>
                      Project Budget *
                    </option>
                    {BUDGETS.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#1a1a1a] text-white"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p id="budget-error" className="mt-1 text-[12px] text-red-300">
                      {errors.budget}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Share your electronics project requirements, facility type, timeline, or specific needs."
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="
                    w-full
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    p-4
                    text-[14px]
                    text-white
                    outline-none
                    transition-colors
                    placeholder:text-white/40
                    focus:border-[#ED2024]/60
                  "
                />
              </div>

              {submitError && (
                <p className="text-[13px] text-red-300" role="alert">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  h-[52px]
                  w-full
                  rounded-[8px]
                  bg-[#F3F3F3]
                  shadow-[0px_14px_36px_0px_rgba(231,178,70,0.2)]
                  flex
                  items-center
                  justify-center
                  gap-[15px]
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  disabled:opacity-70
                  disabled:cursor-not-allowed
                  disabled:hover:scale-100
                "
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin text-[#ED2024]" />
                    <span className="font-manrope font-bold text-[14.6px] text-[#ED2024]">
                      Submitting...
                    </span>
                  </>
                ) : (
                  <>
                    <span className="font-manrope font-bold text-[14.6px] text-[#ED2024]">
                      Get a Free Consultation
                    </span>
                    <ArrowRight size={18} className="text-[#ED2024]" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
