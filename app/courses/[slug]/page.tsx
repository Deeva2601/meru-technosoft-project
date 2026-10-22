import Image from "next/image";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import EnrolCard from "@/components/EnrolCard";
import { courses, getCourse, mentors } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Course" };
  return {
    title: course.title,
    description: course.short,
    openGraph: {
      title: `${course.title} · Raivatedu`,
      description: course.short,
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const mentor = mentors.find((m) => m.name === course.instructor);

  return (
    <main id="main" className="mx-auto w-full max-w-6xl px-4 py-10">
      <p className="text-sm font-semibold text-indigo">{course.category}</p>
      <h1 className="mt-2 max-w-3xl text-3xl font-extrabold md:text-4xl">{course.title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{course.short}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-line">
            <Image
              src={course.image}
              alt={course.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
          </div>

          <section className="mt-10">
            <h2 className="text-xl font-bold">Syllabus</h2>
            <div className="mt-4 space-y-3">
              {course.syllabus.map((block) => (
                <details key={block.title} className="rounded-2xl border border-line bg-surface px-4 py-3">
                  <summary className="cursor-pointer font-semibold">{block.title}</summary>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </section>

          {mentor && (
            <section className="mt-10 rounded-2xl border border-line bg-surface p-5">
              <h2 className="text-xl font-bold">Instructor</h2>
              <div className="mt-4 flex gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                  <Image src={mentor.image} alt="" fill className="object-cover" sizes="80px" />
                </div>
                <div>
                  <p className="font-semibold">{mentor.name}</p>
                  <p className="text-sm text-indigo">{mentor.role}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{mentor.bio}</p>
                </div>
              </div>
            </section>
          )}

          <section className="mt-10">
            <h2 className="text-xl font-bold">Reviews</h2>
            <div className="mt-4 space-y-4">
              {course.reviews.map((r) => (
                <article key={r.name} className="rounded-2xl border border-line bg-surface p-4">
                  <div className="flex items-center gap-1 text-yellow-dark">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm leading-6">{r.text}</p>
                  <p className="mt-2 text-sm font-semibold">
                    {r.name} <span className="font-normal text-muted">· {r.city}</span>
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <EnrolCard course={course} />
      </div>
    </main>
  );
}
