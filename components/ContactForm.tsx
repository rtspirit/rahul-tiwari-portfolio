"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { useState, FormEvent, useEffect } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    
    // Explicit email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-lg mx-auto mt-10 mb-16 relative z-20"
    >
      {/* Success Popup */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="absolute -top-16 left-0 right-0 mx-auto w-max bg-teal-500/20 border border-teal-500/50 backdrop-blur-md text-teal-300 px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(45,212,191,0.2)] z-30"
          >
            <FaCheckCircle />
            <span className="text-sm font-semibold">Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(45,212,191,0.1)] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[60px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />

        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex flex-col gap-6"
        >
          {/* Web3Forms Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="1c4f7efa-d875-4785-8e23-2603c82c54a5"
          />

          {/* Honeypot for spam protection */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />

          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Doe"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              title="Please enter a valid email address."
              placeholder="john@example.com"
              onChange={() => setEmailError("")}
              className={`w-full bg-slate-900/50 border ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:border-teal-500 focus:ring-teal-500'} rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all`}
            />
            {emailError && <span className="text-xs text-red-400">{emailError}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="How can we work together?"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="group mt-2 relative inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-[#030712] transition-all bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-300 hover:to-blue-400 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
            {status !== "submitting" && (
              <FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            )}
          </button>
          
          {status === "error" && (
            <p className="text-red-400 text-sm text-center mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
}
