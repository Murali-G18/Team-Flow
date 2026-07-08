import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        "w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200",
        props.className
      )}
    />
  );
});

Input.displayName = "Input";

export default Input;