"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Search } from "lucide-react";

export default function CourseSearch() {
  const router = useRouter();
  const [q, setQ] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/courses?q=${encodeURIComponent(query)}` : "/courses");
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="course-search">
        Search courses
      </label>
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
        <input
          id="course-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Try python, CAT, Figma…"
          className="w-full rounded-full border border-line bg-surface py-3 pr-4 pl-10 text-sm shadow-sm placeholder:text-stone-400"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-indigo px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-dark"
      >
        Search courses
      </button>
    </form>
  );
}
