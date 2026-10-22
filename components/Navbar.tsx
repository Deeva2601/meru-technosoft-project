"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/#mentors", label: "Mentors" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo />

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-indigo">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/courses">Browse courses</Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-surface px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-base font-medium" aria-label="Mobile">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="py-1 hover:text-indigo" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Button href="/courses" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Browse courses
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
