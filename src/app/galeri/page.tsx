import type { Metadata } from "next";
import PictureRailGalleryDemo from "@/components/picture-rail-gallery-demo";

export const metadata: Metadata = {
  title: "Galeri önizleme",
  robots: { index: false },
};

export default function GaleriPage() {
  return <PictureRailGalleryDemo />;
}
