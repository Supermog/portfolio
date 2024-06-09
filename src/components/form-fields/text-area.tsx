import { get } from "lodash-es";
import { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  helperText?: string;
}

function Textarea({ label, name, helperText, ...inputProps }: TextareaProps) {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();
  const error = get(errors, name);
  const hasError = Boolean(error);

  return (
    <div>
      {label ? (
        <label htmlFor={name} className="label">
          {label}
        </label>
      ) : null}
      <div className="relative mt-2">
        <textarea
          id={name}
          className={twMerge(
            "input",
            hasError ? "ring-red-500 focus:ring-red-300" : null
          )}
          aria-invalid={hasError ? "true" : "false"}
          disabled={isSubmitting}
          {...inputProps}
          {...register(name)}
        />
      </div>
      {helperText ? <p className="mt-1.5 text-sm">{helperText}</p> : null}

      {hasError ? (
        <p className="mt-1.5 text-sm text-red-600">
          {error?.message?.toString()}
        </p>
      ) : null}
    </div>
  );
}

export { Textarea };
