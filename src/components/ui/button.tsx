import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-heading font-semibold min-h-[48px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-0.5 active:shadow-none w-full md:w-auto",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-background border-2 border-border shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5",
        outline:
          "border-2 border-border bg-transparent text-foreground shadow-brutal-sm hover:bg-foreground hover:text-background hover:shadow-brutal",
        ghost: "border-2 border-transparent hover:border-border hover:bg-foreground/5",
      },
      size: {
        default: "px-6 py-3 text-base",
        sm: "px-4 py-2 text-sm min-h-[44px]",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
