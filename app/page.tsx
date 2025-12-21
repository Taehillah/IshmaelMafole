import Hero from "../components/Hero";
import { getGalleryItems } from "../lib/gallery";

export default function HomePage() {
  const galleryItems = getGalleryItems();
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
  const heroItem = preferredHeroItems[0] ?? galleryItems[0];
  const heroImages = heroItem
    ? [
        {
          ...heroItem,
          tag: "Hero Portrait"
        }
      ]
    : [];

  return (
    <Hero featuredImages={heroImages} />
  );
}
