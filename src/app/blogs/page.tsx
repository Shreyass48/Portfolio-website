"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/section-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInput } from "@/components/form-input";
import { BrutalistButton } from "@/components/brutalist-button";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

export default function BlogsPage() {
  const [subscribed, setSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(data: SubscribeFormData) {
    await new Promise((r) => setTimeout(r, 600));
    setSubscribed(true);
    reset();
  }

  return (
    <SectionWrapper>
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          Blogs Coming Soon.
        </h1>
        <p className="mt-6 text-muted font-body">
          I&apos;m working on articles about frontend development, React, and
          building for the web. Stay tuned.
        </p>

        {!subscribed ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 mx-auto max-w-sm space-y-4"
            noValidate
            aria-label="Email subscribe"
          >
            <FormInput
              label="Email"
              type="email"
              {...register("email")}
              error={errors.email?.message}
              placeholder="you@example.com"
            />
            <BrutalistButton
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              className="w-full"
            >
              Notify me
            </BrutalistButton>
          </form>
        ) : (
          <p className="mt-10 font-mono text-accent">
            Thanks! We&apos;ll email you when the first post is live.
          </p>
        )}
      </div>
    </SectionWrapper>
  );
}
