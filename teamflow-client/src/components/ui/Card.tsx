import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white shadow-sm border border-slate-200 p-6 transition hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}