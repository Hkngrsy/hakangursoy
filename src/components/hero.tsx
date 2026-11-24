"use client";

import { site } from "@/content/site";
import { PrismaHero } from "@/components/ui/prisma-hero";

export function Hero() {
  return (
    <PrismaHero
      title={site.name}
      description={site.description}
      cta={{ label: "Proje başlatalım", href: "#iletisim" }}
      showAsterisk={false}
      hideTitle
      className="h-dvh px-2 pt-18 pb-2 sm:px-3 sm:pb-3"
    />
  );
}
