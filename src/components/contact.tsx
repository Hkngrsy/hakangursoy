import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="iletisim" className="scroll-mt-20 pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="relative isolate overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/25 via-card to-background px-6 py-16 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -z-10 size-80 -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]"
          />
          <p className="font-mono text-sm text-brand">{"04 // iletişim"}</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-heading text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Projenizi konuşalım
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Aklınızdaki siteyi anlatın; size en uygun çözümü ve fiyatı birlikte belirleyelim.
          </p>
          <a
            href={`mailto:${site.email}`}
            className={cn(buttonVariants(), "mt-8 h-12 gap-2 px-6 text-base")}
          >
            <Mail className="size-4" aria-hidden="true" />
            {site.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
