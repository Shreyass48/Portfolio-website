"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/reach-out", label: "Reach Out" },
  { href: "/blogs", label: "Blogs" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b-2 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading font-bold text-lg text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          {/* {"> shreyas_"} */}
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-10"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-sm text-foreground hover:text-accent border-b-2 border-transparent hover:border-accent transition-colors py-1"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden ml-auto w-auto min-h-[48px] min-w-[48px] p-0"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile nav panel */}
      <div
        id="mobile-nav"
        className={cn(
          "md:hidden border-t-2 border-border bg-background",
          open ? "block" : "hidden",
        )}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-mono text-base py-3 px-2 -mx-2 rounded-brutal-sm border-2 border-transparent hover:border-border hover:bg-foreground/5 text-foreground min-h-[48px] flex items-center"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
