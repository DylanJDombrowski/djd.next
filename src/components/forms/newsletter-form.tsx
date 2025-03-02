// src/components/forms/newsletter-form.tsx
"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setStatus("success");
      setEmail("");

      // Reset success status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to subscribe"
      );
      console.error("Error subscribing to newsletter:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="sm:flex-shrink-0 bg-orange hover:bg-orange/90 text-white font-bold py-2 px-6 rounded-md transition disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>

      {status === "success" && (
        <p className="text-green-600 text-sm">
          Thank you for subscribing to my newsletter!
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 text-sm">
          {errorMessage || "There was an error subscribing. Please try again."}
        </p>
      )}
    </form>
  );
}
