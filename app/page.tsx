import fs from "fs";
import path from "path";
import Hero from "../components/Hero";
import { getGalleryItems } from "../lib/gallery";
import type { GalleryItem } from "../lib/gallery";

export default function HomePage() {
  const galleryItems = getGalleryItems();
  const heroFileName = "gallery/optimized/selfie1a.avif";
  const lightHeroFileName = "gallery/optimized/selfie1b.avif";
  const heroFilePath = path.join(process.cwd(), "public", heroFileName);
  const lightHeroFilePath = path.join(process.cwd(), "public", lightHeroFileName);
  const heroFileExists = fs.existsSync(heroFilePath);
  const lightHeroFileExists = fs.existsSync(lightHeroFilePath);
  const preferredHeroFiles = [
    "self closeup.jpg",
    "full portrait.jpg",
    "self portrait it student.jpg",
    "self portrait it_student2.jpg"
  ];
  const preferredHeroItems = preferredHeroFiles
    .map((fileName) =>
      galleryItems.find(
        (item) => item.src.toLowerCase().endsWith(`/gallery/${fileName}`)
      )
    )
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const heroItem: GalleryItem | undefined = heroFileExists
    ? {
        src: `/${heroFileName}`,
        title: "Selfie Portrait",
        caption: "",
        type: "Photo"
      }
    : preferredHeroItems[0] ?? galleryItems[0];
  const lightHeroItem: GalleryItem | undefined = lightHeroFileExists
    ? {
        src: `/${lightHeroFileName}`,
        title: "Selfie Portrait",
        caption: "",
        type: "Photo"
      }
    : heroItem;
  const heroImages = heroItem
    ? [
        {
          ...heroItem
        }
      ]
    : [];

  return (
    <Hero featuredImages={heroImages} lightImage={lightHeroItem} />
  );
}
