import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight text-ink">
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-indigo text-sm text-yellow">
        R
      </span>
      Raivatedu
    </Link>
  );
}
