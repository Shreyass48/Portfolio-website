"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BrutalistButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  form?: string;
}

export function BrutalistButton({
  children,
  href,
  variant = "default",
  size = "default",
  className,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  form,
}: BrutalistButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size }), "min-h-[48px]", className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <Button
      type={type}
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
      disabled={disabled || loading}
      form={form}
    >
      {loading ? "Sending…" : children}
    </Button>
  );
}
