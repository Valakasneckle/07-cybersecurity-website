import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({ label, error, className, id, ...props }: TextareaProps) {
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
      <textarea
        id={inputId}
        className={cn(
          "mt-2 block w-full resize-y rounded-lg border border-card-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted focus:border-accent-cyan",
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
