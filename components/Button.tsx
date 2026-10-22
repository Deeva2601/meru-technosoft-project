import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const styles = {
  primary:
    "bg-indigo text-white hover:bg-indigo-dark active:bg-indigo-dark disabled:bg-stone-300 disabled:text-stone-500",
  secondary:
    "bg-yellow text-ink hover:bg-yellow-dark active:bg-yellow-dark disabled:bg-stone-200 disabled:text-stone-400",
  ghost:
    "border border-line bg-surface text-ink hover:border-indigo hover:text-indigo disabled:text-stone-400",
};

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  disabled,
  onClick,
}: Props) {
  const cls = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
