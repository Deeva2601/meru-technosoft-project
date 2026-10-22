import CoursesBrowser from "@/components/CoursesBrowser";

export const metadata = {
  title: "Courses",
  description:
    "Browse Raivatedu live courses by category. Filter by development, data, design, career and entrance prep.",
  openGraph: {
    title: "All courses · Raivatedu",
    description: "Filter live courses by topic, price and duration. Small evening batches.",
  },
};

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <main id="main" className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">Courses</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Six live programmes this term. Use the filters if you already know the topic. Prices are in Indian rupees.
      </p>
      <div className="mt-8">
        <CoursesBrowser initialQuery={q ?? ""} />
      </div>
    </main>
  );
}
