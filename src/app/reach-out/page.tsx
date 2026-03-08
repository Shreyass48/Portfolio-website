"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SectionWrapper } from "@/components/section-wrapper";
import { FormInput } from "@/components/form-input";
import { BrutalistButton } from "@/components/brutalist-button";
import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/shreyaskulkarni48",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "https://github.com/Shreyass48", label: "GitHub", icon: Github },
  { href: "mailto:sgkulkarni48@gmail.com", label: "Email", icon: Mail },
];

export default function ReachOutPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          message?: string;
        } | null;
        throw new Error(
          payload?.message || "Failed to send your message. Please try again.",
        );
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to send your message. Please try again.";
      setSubmitError(message);
    }
  }

  if (submitted) {
    return (
      <SectionWrapper>
        <div className="mx-auto max-w-lg text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Message sent
          </h1>
          <p className="mt-4 text-muted font-body">
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>
          <BrutalistButton
            className="mt-8"
            onClick={() => setSubmitted(false)}
            variant="outline"
          >
            Send another message
          </BrutalistButton>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <>
      <SectionWrapper className="pb-12">
        <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Reach Out
        </h1>
        <p className="mt-2 text-muted font-body">
          Have a project in mind? Drop a message and I&apos;ll reply as soon as
          I can.
        </p>

        <form
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 max-w-xl space-y-6"
          noValidate
          aria-label="Contact form"
        >
          <FormInput
            label="Name"
            {...register("name")}
            error={errors.name?.message}
            required
            placeholder="Your name"
          />
          <FormInput
            label="Email"
            type="email"
            {...register("email")}
            error={errors.email?.message}
            required
            placeholder="you@example.com"
          />
          <FormInput
            label="Message"
            type="textarea"
            {...register("message")}
            error={errors.message?.message}
            required
            placeholder="Your message..."
          />

          <div className="pt-4 md:pt-2">
            <BrutalistButton
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              Send Message
            </BrutalistButton>
          </div>

          {submitError ? (
            <p
              className="font-mono text-sm text-red-400"
              role="alert"
              aria-live="polite"
            >
              {submitError}
            </p>
          ) : null}
        </form>

        <div className="mt-16 border-t-2 border-border pt-10">
          <p className="font-mono text-sm text-muted">Find me elsewhere</p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2" role="list">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 border-2 border-border text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-colors font-mono text-sm leading-none"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
