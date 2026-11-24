"use client";

import PictureRailGallery, { type PictureRailItem } from "@/components/ui/picture-rail-gallery";
import { projects } from "@/content/site";

// Plain <img> tags don't get the basePath automatically.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const drops = [0.04, 0.12, -0.02, 0.08];

const items: PictureRailItem[] = projects.map((project, i) => ({
  id: project.image,
  title: project.title,
  artist: project.category,
  image: `${basePath}${project.image}`,
  aspect: 1.6,
  frame: "black",
  drop: drops[i % drops.length],
  details: [project.summary, ...project.stack],
}));

export function ProjectGallery() {
  return (
    <PictureRailGallery
      items={items}
      autoplay
      caption="Bir projenin üzerine gel, sürükle ya da tıklayıp yakından bak."
      labels={{ front: "Ön", back: "Arka", close: "Kapat", open: "Büyütmek için tıkla" }}
      className="mb-16 rounded-2xl border border-border bg-card/40"
    />
  );
}
