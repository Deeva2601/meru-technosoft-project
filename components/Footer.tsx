import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-indigo-dark text-stone-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="[&_a]:text-white">
            <Logo />
          </div>
          <p className="mt-4 text-sm leading-6 text-stone-300">
            Live classes, small batches, and mentors who still take student work seriously.
            Based in India, online everywhere.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/courses" className="hover:text-yellow">
                All courses
              </Link>
            </li>
            <li>
              <Link href="/#mentors" className="hover:text-yellow">
                Mentors
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-yellow">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="mailto:hello@raivatedu.in" className="hover:text-yellow">
                hello@raivatedu.in
              </a>
            </li>
            <li>
              <a href="tel:+919800001234" className="hover:text-yellow">
                +91 98000 01234
              </a>
            </li>
            <li>
              <span>Mon–Sat, 10am–7pm IST</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Social</h2>
          <div className="mt-3 flex gap-3 text-sm">
            <a href="https://instagram.com" className="hover:text-yellow">
              Instagram
            </a>
            <a href="https://youtube.com" className="hover:text-yellow">
              YouTube
            </a>
            <a href="https://linkedin.com" className="hover:text-yellow">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} Raivatedu. A fictional brand for a frontend assignment.
      </p>
    </footer>
  );
}
