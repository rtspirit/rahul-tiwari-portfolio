"use client";

import { FormEvent, useEffect, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "");

    if (!EMAIL.test(email)) {
      setEmailError("Enter a valid email address so I can reply.");
      return;
    }
    setEmailError("");
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
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
    if (status !== "success") return;
    const timer = setTimeout(() => setStatus("idle"), 6000);
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <form onSubmit={handleSubmit} noValidate className="flex w-full max-w-xl flex-col gap-5">
      <input type="hidden" name="access_key" value="1c4f7efa-d875-4785-8e23-2603c82c54a5" />
      <input type="hidden" name="subject" value="New message from rahultiwari portfolio" />
      {/* Honeypot for spam protection */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="mono text-xs font-semibold uppercase tracking-wider text-mint">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className="field" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="mono text-xs font-semibold uppercase tracking-wider text-mint">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={emailError ? "true" : undefined}
            aria-describedby={emailError ? "email-error" : undefined}
            onChange={() => setEmailError("")}
            className="field"
          />
          {emailError && (
            <p id="email-error" className="text-sm font-semibold text-white">
              {emailError}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="mono text-xs font-semibold uppercase tracking-wider text-mint">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="The role, the team, or the problem you're hiring for."
          className="field resize-y"
        />
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="lit inline-flex h-12 items-center justify-center rounded-full bg-paper px-7 font-semibold text-green-deep hover:bg-white disabled:cursor-progress disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" && <span className="text-white">Sent. I&apos;ll reply from my personal email.</span>}
          {status === "error" && (
            <span className="font-semibold text-white">
              That didn&apos;t send. Try again, or reach me on LinkedIn.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
