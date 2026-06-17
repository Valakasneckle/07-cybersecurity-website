import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, className, id, ...props }: InputProps) {
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
      <input
        id={inputId}
        className={cn(
          "mt-2 block w-full rounded-lg border border-card-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted focus:border-accent-cyan min-h-[44px]",
          error && "border-accent-red",
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-accent-red" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
