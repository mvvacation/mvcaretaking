"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EmailCaptureForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      sessionStorage.setItem("mv_lead_email", email);
    }
    router.push("/get-a-quote");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        aria-label="Email address for caretaker matching"
        className="flex-1 px-5 py-3.5 rounded-xl text-navy-900 bg-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 border border-white/20 text-sm"
      />
      <button type="submit" className="btn-primary whitespace-nowrap px-6">
        Get Matched
      </button>
    </form>
  );
}
