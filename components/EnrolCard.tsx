"use client";

import { FormEvent, useState } from "react";
import { Course, formatPrice } from "@/data/site";

export default function EnrolCard({ course }: { course: Course }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (name.length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a 10-digit phone number.");
      return;
    }

    setError("");
    setSent(true);
  }

  return (
    <aside className="rounded-2xl border border-line bg-surface p-5 shadow-sm lg:sticky lg:top-24">
      <p className="text-sm text-muted">{course.duration} · {course.level}</p>
      <p className="mt-1 text-3xl font-extrabold">{formatPrice(course.price)}</p>
      <p className="mt-1 text-xs text-muted">Includes live classes and recordings. EMI on request.</p>

      {sent ? (
        <div className="mt-5 rounded-xl bg-yellow/40 p-4 text-sm">
          <p className="font-semibold">You’re on the list.</p>
          <p className="mt-1 text-muted">
            This is a demo form, so nothing was charged. In a real site we’d email you the batch dates.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 space-y-3" noValidate>
          <div>
            <label htmlFor="name" className="text-xs font-semibold">
              Full name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-line px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-line px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-xs font-semibold">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="mt-1 w-full rounded-xl border border-line px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="batch" className="text-xs font-semibold">
              Preferred batch
            </label>
            <select id="batch" name="batch" className="mt-1 w-full rounded-xl border border-line px-3 py-2 text-sm">
              <option>Weekday evenings</option>
              <option>Weekend mornings</option>
            </select>
          </div>
          {error && <p className="text-sm text-red-700">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-full bg-indigo py-2.5 text-sm font-semibold text-white hover:bg-indigo-dark"
          >
            Enrol for this batch
          </button>
        </form>
      )}
    </aside>
  );
}
