"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
  style,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div
      ref={ref}
      className={cn("inline-flex flex-wrap", className)}
      style={style}
    >
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease }}
            className="relative inline-block"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span
                aria-hidden="true"
                className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]"
              >
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: CSSProperties;
}

export const WordsPullUpMultiStyle = ({
  segments,
  className = "",
  style,
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div
      ref={ref}
      className={cn("inline-flex flex-wrap justify-center", className)}
      style={style}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease }}
          className={cn("inline-block", w.className)}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- Hero ---------------- */
export interface PrismaHeroProps {
  title?: string;
  description?: string;
  cta?: { label: string; href: string };
  /** Optional in-hero navbar. Omit it when the page already has its own header. */
  navItems?: { label: string; href: string }[];
  videoSrc?: string;
  showAsterisk?: boolean;
  /** Keep the title for screen readers and SEO but don't show it. */
  hideTitle?: boolean;
  className?: string;
  titleClassName?: string;
}

const DEFAULT_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

const PrismaHero = ({
  title = "Prisma",
  description = "Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.",
  cta = { label: "Join the lab", href: "#" },
  navItems,
  videoSrc = DEFAULT_VIDEO,
  showAsterisk = true,
  hideTitle = false,
  className,
  titleClassName,
}: PrismaHeroProps) => {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Respect reduced motion: keep the first frame instead of looping the video.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduceMotion) video.pause();
    else void video.play().catch(() => {});
  }, [reduceMotion]);

  return (
    <section className={cn("h-screen w-full", className)}>
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          ref={videoRef}
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
        />

        <div
          aria-hidden="true"
          className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"
        />

        {navItems?.length ? (
          <nav
            aria-label="Hero menüsü"
            className="absolute top-0 left-1/2 z-20 -translate-x-1/2"
          >
            <div className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[10px] text-foreground/80 transition-colors hover:text-foreground sm:text-xs md:text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        ) : null}

        <div className="absolute right-0 bottom-0 left-0 px-4 pb-2 sm:px-6 md:px-10">
          <div className="grid grid-cols-12 items-end gap-4">
            {hideTitle ? (
              <h1 className="sr-only">{title}</h1>
            ) : (
              <div className="col-span-12 lg:col-span-8">
                <h1
                  className={cn(
                    "text-[26vw] leading-[0.85] font-medium tracking-[-0.07em] text-foreground sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]",
                    titleClassName,
                  )}
                >
                  <WordsPullUp text={title} showAsterisk={showAsterisk} />
                </h1>
              </div>
            )}

            <div className="col-span-12 flex flex-col gap-5 pb-6 lg:col-span-4 lg:col-start-9 lg:pb-10">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease }}
                className="text-sm leading-snug text-foreground/75 md:text-base"
              >
                {description}
              </motion.p>

              <motion.a
                href={cta.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease }}
                className="group inline-flex items-center gap-2 self-start rounded-full bg-primary py-1 pr-1 pl-5 text-sm font-medium text-primary-foreground transition-all hover:gap-3 sm:text-base"
              >
                {cta.label}
                <span className="flex size-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:size-10">
                  <ArrowRight
                    className="size-4 text-foreground"
                    aria-hidden="true"
                  />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
