import { cn } from "@/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
};

export function Select({ label, options, error, className, id, ...props }: SelectProps) {
  const inputId = id ?? props.name;

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-foreground">
        {label}
        {props.required && (
          <span className="text-accent-red ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <select
        id={inputId}
        className={cn(
          "mt-2 block w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent-cyan min-h-[44px] cursor-pointer",
          error && "border-accent-red",
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-xs text-accent-red" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
