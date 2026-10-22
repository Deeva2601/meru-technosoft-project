import Image from "next/image";
import Link from "next/link";
import { BookOpen, Laptop, Palette, Briefcase, GraduationCap, Star } from "lucide-react";
import CourseSearch from "@/components/CourseSearch";
import CourseCard from "@/components/CourseCard";
import Faq from "@/components/Faq";
import Button from "@/components/Button";
import { courses, mentors, testimonials } from "@/data/site";

const categoryCards = [
  { name: "Development", href: "/courses", icon: Laptop, note: "Web and product builds" },
  { name: "Data", href: "/courses", icon: BookOpen, note: "Python and spreadsheets" },
  { name: "Design", href: "/courses", icon: Palette, note: "Figma and case studies" },
  { name: "Career", href: "/courses", icon: Briefcase, note: "English and marketing" },
  { name: "Entrance", href: "/courses", icon: GraduationCap, note: "CAT Quant practice" },
];

export const metadata = {
  title: {
    absolute: "Raivatedu — find a course, meet a mentor",
  },
  description:
    "Raivatedu is a live learning platform for students who want a mentor, not another 40-hour playlist.",
  openGraph: {
    title: "Raivatedu — find a course, meet a mentor",
    description:
      "Search live courses in web, data, design, careers and entrance exams. Small batches across India.",
  },
};

export default function HomePage() {
  return (
    <main id="main">
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
        <div>
          <p className="inline-flex rounded-full bg-yellow/70 px-3 py-1 text-xs font-semibold">
            Live batches · weekday evenings IST
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
            Find a course. Meet a mentor. Finish something.
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-muted">
            Raivatedu runs small live classes for web, data, design and entrance prep.
            Mentors still work in the field. You leave with a project, not a pile of tabs.
          </p>
          <CourseSearch />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
            alt="Students sitting together on campus steps after class"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold">Popular categories</h2>
        <p className="mt-2 text-sm text-muted">Pick a lane, then filter the full list.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categoryCards.map((c) => (
            <Link
              key={c.name}
              href={`/courses`}
              className="rounded-2xl border border-line bg-surface p-4 hover:border-indigo"
            >
              <c.icon className="text-indigo" size={22} />
              <p className="mt-3 font-semibold">{c.name}</p>
              <p className="mt-1 text-xs text-muted">{c.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Featured courses</h2>
            <p className="mt-2 text-sm text-muted">Prices in INR. Next weekday batches open this month.</p>
          </div>
          <Button href="/courses" variant="ghost" className="hidden sm:inline-flex">
            See all
          </Button>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <section id="mentors" className="scroll-mt-24 bg-indigo-dark py-12 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Mentors</h2>
          <p className="mt-2 max-w-xl text-sm text-stone-300">
            People who still ship work during the day and teach in the evening. They read your homework.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.map((m) => (
              <article key={m.name} className="rounded-2xl bg-white/10 p-4">
                <div className="relative mb-3 aspect-square overflow-hidden rounded-2xl">
                  <Image src={m.image} alt="" fill className="object-cover" sizes="200px" />
                </div>
                <h3 className="font-bold">{m.name}</h3>
                <p className="text-xs text-yellow">{m.role}</p>
                <p className="mt-2 text-sm leading-6 text-stone-300">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">How the batches feel</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { n: "12,400+", l: "students who finished a course" },
            { n: "4.8", l: "average mentor rating this year" },
            { n: "32", l: "cities represented in live rooms" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-line bg-surface p-6 text-center">
              <p className="text-3xl font-extrabold text-indigo">{s.n}</p>
              <p className="mt-2 text-sm text-muted">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold">What students say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-line bg-surface p-5">
              <Star className="text-yellow-dark" size={18} fill="currentColor" />
              <p className="mt-3 text-sm leading-6">{t.text}</p>
              <footer className="mt-4 text-sm font-semibold">
                {t.name}
                <span className="block font-normal text-muted">{t.course}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-10">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <p className="mt-2 text-sm text-muted">Short answers. Email us if yours is not here.</p>
        <div className="mt-6">
          <Faq />
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-indigo px-6 py-10 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold">Ready to pick a batch?</h2>
            <p className="mt-2 max-w-lg text-sm text-indigo-100">
              Browse the six live courses, read a syllabus, and leave your details. No account needed on this demo.
            </p>
          </div>
          <Button href="/courses" variant="secondary">
            Browse courses
          </Button>
        </div>
      </section>
    </main>
  );
}
