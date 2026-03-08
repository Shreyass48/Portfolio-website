"use client";

import { useState, useEffect } from "react";

const LINE1_PREFIX = "Hi, I'm ";
const LINE1_ACCENT = "Shreyas";
const LINE1_FULL = LINE1_PREFIX + LINE1_ACCENT;
const LINE2_FULL = "Frontend Developer";
const CHAR_DELAY_MS = 50;
const PAUSE_BETWEEN_LINES_MS = 400;

export function TypingHero() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");

  useEffect(() => {
    setLine1("");
    setLine2("");

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    // Type line 1 character by character
    LINE1_FULL.split("").forEach((_, i) => {
      const t = setTimeout(() => {
        setLine1(LINE1_FULL.slice(0, i + 1));
      }, i * CHAR_DELAY_MS);
      timeouts.push(t);
    });

    const line1End = LINE1_FULL.length * CHAR_DELAY_MS;
    const pauseEnd = line1End + PAUSE_BETWEEN_LINES_MS;

    // Type line 2 after pause
    LINE2_FULL.split("").forEach((_, i) => {
      const t = setTimeout(
        () => {
          setLine2(LINE2_FULL.slice(0, i + 1));
        },
        pauseEnd + i * CHAR_DELAY_MS,
      );
      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* Screen reader: full text so AT reads complete content */}
      <p className="sr-only" aria-hidden="false">
        Hi, I&apos;m Shreyas. Frontend Developer.
      </p>

      <div
        className="min-h-[1.2em] text-3xl leading-tight text-center md:text-left md:text-4xl lg:text-6xl font-heading font-bold tracking-tight text-foreground"
        aria-hidden="true"
      >
        <p className="min-h-[1.2em]">
          {line1.length <= LINE1_PREFIX.length ? (
            line1
          ) : (
            <>
              {LINE1_PREFIX}
              <span className="text-accent">
                {line1.slice(LINE1_PREFIX.length)}
              </span>
            </>
          )}
          {line2.length === 0 && (
            <span
              className="text-accent animate-cursor-blink ml-0.5"
              aria-hidden="true"
            >
              |
            </span>
          )}
        </p>
        <p className="min-h-[1.2em] mt-1 md:mt-2">
          {line2.length > 0 && (
            <>
              <span className="text-accent">{line2}</span>
              <span
                className="text-accent animate-cursor-blink ml-0.5"
                aria-hidden="true"
              >
                |
              </span>
            </>
          )}
        </p>
      </div>
    </>
  );
}
