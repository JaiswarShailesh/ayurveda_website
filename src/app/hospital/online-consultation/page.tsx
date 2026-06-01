"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ConsultationSchema = z.object({
  fullName: z.string().min(3, "Full name is too short"),
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().email("Invalid email address"),
  description: z.string().optional(),
});

type ConsultationForm = z.infer<typeof ConsultationSchema>;

type StatusType = {
  type: "success" | "error";
  text: string;
} | null;

export default function OnlineConsultation() {
  const [status, setStatus] = useState<StatusType>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationForm>({
    resolver: zodResolver(ConsultationSchema),
  });

  const onSubmit = async (data: ConsultationForm) => {
    setStatus(null);

    const res = await fetch("https://formspree.io/f/mrbjyqnb", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.ok) {
      setStatus({
        type: "success",
        text: "Thank you! Our team will reach out to you shortly.",
      });
      reset();
    } else {
      setStatus({
        type: "error",
        text: "Submission failed. Please try again.",
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-6 md:px-10">
      <div
        className="
          max-w-3xl mx-auto bg-white
          shadow-xl border border-green-500 rounded-3xl
          p-10 md:p-14
          animate-[fadeIn_0.5s_ease-out]
      "
      >
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-green-800 mb-4">
          Online Consultation
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          Need medical advice? Fill in the form below and our doctors will get
          back to you as soon as possible.
        </p>

        {/* Status Message */}
        {status && (
          <div
            className={`
              mb-8 p-4 rounded-xl border text-sm font-medium
              ${
                status.type === "success"
                  ? "bg-green-100 border-green-200 text-green-800"
                  : "bg-red-100 border-red-200 text-red-800"
              }
            `}
          >
            {status.text}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* FULL NAME */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-800">Full Name</label>
            <input
              {...register("fullName")}
              className="
                w-full border rounded-xl px-4 py-3
                focus:ring-2 focus:ring-green-400 outline-none
                transition
              "
              placeholder="Enter full name"
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/* MOBILE */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-800">
              Mobile Number
            </label>
            <input
              {...register("mobile")}
              className="
                w-full border rounded-xl px-4 py-3
                focus:ring-2 focus:ring-green-400 outline-none
                transition
              "
              placeholder="10-digit mobile number"
            />
            {errors.mobile && (
              <p className="text-red-600 text-sm">{errors.mobile.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-800">
              Email Address
            </label>
            <input
              {...register("email")}
              className="
                w-full border rounded-xl px-4 py-3
                focus:ring-2 focus:ring-green-400 outline-none
                transition
              "
              placeholder="example@gmail.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-800">
              Short Description (Optional)
            </label>
            <textarea
              {...register("description")}
              rows={4}
              className="
                w-full border rounded-xl px-4 py-3
                focus:ring-2 focus:ring-green-400 outline-none
                transition
              "
              placeholder="Symptoms or request (optional)"
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            disabled={isSubmitting}
            className="
              w-full bg-green-700 hover:bg-green-800
              text-white font-semibold py-3 rounded-xl
              transition disabled:opacity-50
              text-lg
            "
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </section>
  );
}
