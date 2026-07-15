import Link from "next/link";

const VARIANTS = {
  primary: "bg-accent text-primary-dark hover:opacity-90",
  outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "bg-transparent text-primary hover:bg-primary/5",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) {
  const styles = `inline-flex items-center justify-center gap-2 font-body font-medium text-sm px-6 py-3 rounded-md transition-all ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}