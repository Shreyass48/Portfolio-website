import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      className="w-full border-t-2 border-border bg-background mt-auto"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-sm text-muted">
            © {currentYear} Shreyas Kulkarni. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Shreyass48"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shreyaskulkarni48"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sgkulkarni48@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
