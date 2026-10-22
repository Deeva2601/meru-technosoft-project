"use client";

import { useMemo, useState } from "react";
import { categories, courses } from "@/data/site";
import CourseCard from "./CourseCard";

type SortKey = "popular" | "price-low" | "price-high" | "duration";

export default function CoursesBrowser({ initialQuery = "" }: { initialQuery?: string }) {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<SortKey>("popular");
  const [query, setQuery] = useState(initialQuery);

  const list = useMemo(() => {
    let next = courses.filter((c) => {
      const matchCat = category === "All" || c.category === category;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.short.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });

    next = [...next].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "duration") return a.weeks - b.weeks;
      return b.students - a.students;
    });

    return next;
  }, [category, sort, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-4 md:flex-row md:items-end md:justify-between">
        <div className="flex-1">
          <label htmlFor="filter-search" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Search
          </label>
          <input
            id="filter-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-1 w-full rounded-xl border border-line px-3 py-2 text-sm"
            placeholder="Course name or topic"
          />
        </div>
        <div>
          <label htmlFor="sort" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="mt-1 block w-full rounded-xl border border-line bg-white px-3 py-2 text-sm md:w-48"
          >
            <option value="popular">Most popular</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="duration">Shortest first</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Course categories">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${
              category === c ? "bg-indigo text-white" : "border border-line bg-surface hover:border-indigo"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-line bg-surface px-6 py-16 text-center">
          <p className="font-semibold">No courses match that.</p>
          <p className="mt-2 text-sm text-muted">Try another category, or clear the search box.</p>
          <button
            type="button"
            className="mt-4 text-sm font-semibold text-indigo hover:underline"
            onClick={() => {
              setCategory("All");
              setQuery("");
            }}
          >
            Show all courses
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
