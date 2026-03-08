"use client";

import { forwardRef, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormInputProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  className?: string;
  id?: string;
  "aria-describedby"?: string;
}

function setRef<T>(
  ref: React.Ref<T> | undefined,
  value: T | null
): void {
  if (typeof ref === "function") ref(value);
  else if (ref) (ref as React.MutableRefObject<T | null>).current = value;
}

type FormInputPropsWithRef = FormInputProps & {
  ref?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
};

export const FormInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormInputProps
>(
  (props, refFromForwardRef) => {
    const {
      label,
      name,
      error,
      required,
      type = "text",
      placeholder,
      className,
      id,
      "aria-describedby": ariaDescribedBy,
      ref: refFromProps,
      ...rest
    } = props as FormInputPropsWithRef;
    const inputId = id ?? name;
    const describedBy = [error && `${name}-error`, ariaDescribedBy]
      .filter(Boolean)
      .join(" ");

    const mergedRef = useCallback(
      (el: HTMLInputElement | HTMLTextAreaElement | null) => {
        setRef(refFromForwardRef, el);
        setRef(refFromProps, el);
      },
      [refFromForwardRef, refFromProps]
    );

    return (
      <div className={cn("space-y-2", className)}>
        <Label htmlFor={inputId} className="font-mono text-foreground">
          {label}
          {required && <span className="text-accent ml-1" aria-hidden>*</span>}
        </Label>
        {type === "textarea" ? (
          <Textarea
            id={inputId}
            name={name}
            placeholder={placeholder}
            ref={mergedRef as React.Ref<HTMLTextAreaElement>}
            aria-invalid={!!error}
            aria-describedby={describedBy || undefined}
            {...(rest as React.ComponentProps<typeof Textarea>)}
          />
        ) : (
          <Input
            id={inputId}
            name={name}
            type={type}
            placeholder={placeholder}
            ref={mergedRef as React.Ref<HTMLInputElement>}
            aria-invalid={!!error}
            aria-describedby={describedBy || undefined}
            required={required}
            {...(rest as React.ComponentProps<typeof Input>)}
          />
        )}
        {error && (
          <p
            id={`${name}-error`}
            className="text-sm font-mono text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
FormInput.displayName = "FormInput";
