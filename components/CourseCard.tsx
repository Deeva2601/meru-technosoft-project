import Image from "next/image";
import Link from "next/link";
import { Clock, Signal } from "lucide-react";
import { Course, formatPrice } from "@/data/site";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/courses/${course.slug}`} className="relative block aspect-[16/10]">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo">{course.category}</p>
        <h3 className="mt-1 text-lg font-bold">
          <Link href={`/courses/${course.slug}`} className="hover:text-indigo">
            {course.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{course.short}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <Clock size={14} /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <Signal size={14} /> {course.level}
          </span>
          <span className="ml-auto font-bold text-ink">{formatPrice(course.price)}</span>
        </div>
      </div>
    </article>
  );
}
