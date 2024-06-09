import * as React from "react";
import {
  FaRegEye,
  FaRegEyeSlash,
  FaCircleExclamation,
  FaCalendarDays,
} from "react-icons/fa6";
import { get } from "lodash-es";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons/lib";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  leadingIcon?: IconType;
  helperText?: string;
}

function TextInput({
  label,
  name,
  type,
  leadingIcon: LeadingIcon,
  className,
  helperText,
  ...inputProps
}: TextInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();
  const error = get(errors, name);
  const hasError = Boolean(error);

  const isPasswordField = type === "password";
  const isDateField = type === "date";
  const hasLeadingIcon = !!LeadingIcon;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickCalendar = () => {
    const input = document.getElementById(name) as HTMLInputElement;
    input?.showPicker();
  };

  return (
    <div className={className}>
      {label ? (
        <label htmlFor={name} className="label">
          {label}
        </label>
      ) : null}
      <div className="relative mt-2">
        {hasLeadingIcon ? (
          <div
            className={twMerge(
              "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
              hasError ? "text-red-500" : "text-gray-100"
            )}
          >
            <LeadingIcon aria-hidden="true" className="w-4 h-4" />
          </div>
        ) : null}
        <input
          id={name}
          type={showPassword ? "text" : type}
          className={twMerge(
            "input",
            isPasswordField || hasError ? "pr-10" : null,
            hasError ? "ring-red-500 focus:ring-red-300" : null,
            hasLeadingIcon ? "pl-10" : null,
            isPasswordField && !showPassword ? "tracking-widest" : null
          )}
          aria-invalid={hasError ? "true" : "false"}
          disabled={isSubmitting}
          {...inputProps}
          {...register(name)}
        />
        {isPasswordField ? (
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={handleShowPassword}
            tabIndex={-1}
            type="button"
          >
            {showPassword ? (
              <FaRegEyeSlash
                className={twMerge(hasError ? "text-red-500" : "text-gray-300")}
                aria-hidden="true"
              />
            ) : (
              <FaRegEye
                className={twMerge(hasError ? "text-red-500" : "text-gray-300")}
                aria-hidden="true"
              />
            )}
          </button>
        ) : null}
        {isDateField ? (
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={handleClickCalendar}
            tabIndex={-1}
            type="button"
          >
            <FaCalendarDays aria-hidden="true" />
          </button>
        ) : null}

        {!isPasswordField && hasError ? (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <FaCircleExclamation className="text-red-500" aria-hidden="true" />
          </div>
        ) : null}
      </div>

      {helperText ? (
        <p className="mt-1.5 text-sm text-white">{helperText}</p>
      ) : null}

      {hasError ? (
        <p className="mt-1.5 text-sm text-red-600 font-ceragr-bold">
          {error?.message?.toString()}
        </p>
      ) : null}
    </div>
  );
}

export { TextInput };
