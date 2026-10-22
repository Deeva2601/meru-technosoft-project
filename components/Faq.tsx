import { faqs } from "@/data/site";

export default function Faq({ items = faqs }: { items?: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-2xl border border-line bg-surface px-4 py-3 open:shadow-sm"
        >
          <summary className="cursor-pointer list-none font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              {item.q}
              <span className="text-indigo group-open:rotate-45" aria-hidden>
                +
              </span>
            </span>
          </summary>
          <p className="mt-2 text-sm leading-6 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
