import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-3xl font-extrabold">Page not found</h1>
      <p className="mt-3 text-muted">That link does not exist on this demo site. Try the course list.</p>
      <div className="mt-6">
        <Button href="/courses">Browse courses</Button>
      </div>
    </main>
  );
}
