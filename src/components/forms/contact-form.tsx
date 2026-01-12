// src/components/forms/contact-form.tsx
"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiLoader } from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading" || status === "success") return;
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      // We now check if the status code is in the 2xx range
      if (!response.ok) {
        // Try to get a specific error message from the server response
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with ${response.status}`);
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTurnstileToken(null);
    } catch (error) {
      setStatus("error");
      const message = error instanceof Error ? error.message : "An unknown error occurred.";
      setErrorMessage(message);
      console.error("Error submitting form:", error);

      // Reset error status after 8 seconds so the user can try again
      setTimeout(() => {
        if (status === "error") setStatus("idle");
      }, 8000);
    }
  };

  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    formData.name.trim() !== "" && isEmailValid(formData.email) && formData.message.trim() !== "" && turnstileToken !== null;

  return (
    <div className="relative">
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-green-50 dark:bg-green-950 flex flex-col items-center justify-center rounded-lg z-10 p-8 text-center"
          >
            <FiCheckCircle className="text-green-500 dark:text-green-400 text-5xl mb-4" />
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">Message Sent!</h3>
            <p className="text-green-700 dark:text-green-300 mb-6">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition"
            >
              Send Another Message
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        animate={{ filter: status === "success" ? "blur(8px)" : "blur(0px)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-orange ${
                formData.email && !isEmailValid(formData.email) ? "border-red-500" : "border-input"
              }`}
            />
            {formData.email && !isEmailValid(formData.email) && (
              <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1 text-foreground">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>

        <div className="space-y-4">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onSuccess={setTurnstileToken}
            onError={() => setTurnstileToken(null)}
            onExpire={() => setTurnstileToken(null)}
          />

          <button
            type="submit"
            disabled={status === "loading" || !isFormValid}
            className="w-full md:w-auto bg-orange hover:bg-orange/90 text-white font-bold py-3 px-8 rounded-md transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === "loading" && <FiLoader className="animate-spin" />}
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "error" && (
            <div className="mt-4 text-red-600 dark:text-red-400 flex items-center gap-2">
              <FiAlertCircle />
              <span>{errorMessage || "An error occurred. Please try again."}</span>
            </div>
          )}
        </div>
      </motion.form>
    </div>
  );
}
