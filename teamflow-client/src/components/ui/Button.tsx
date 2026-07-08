import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline";
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-violet-600 hover:bg-violet-700 text-white",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",

    outline:
      "border border-slate-300 bg-white hover:bg-slate-100 text-slate-800",
  };

  return (
    <button
      className={cn(
        "rounded-xl px-5 py-3 font-medium transition-all duration-300 shadow-sm hover:shadow-lg active:scale-95",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}