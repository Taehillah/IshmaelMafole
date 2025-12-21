import fs from "fs";
import path from "path";

export type GalleryItem = {
  src: string;
  title: string;
  caption: string;
  type: "Photo" | "Video";
};

const fallbackGalleryItems: GalleryItem[] = [
  {
    src: "/gallery/frame-01.svg",
    title: "Cathedral Light",
    caption: "Monochrome portrait study with soft rim lighting.",
    type: "Photo"
  },
  {
    src: "/gallery/frame-02.svg",
    title: "Concrete Hymn",
    caption: "Urban lines translated into quiet geometry.",
    type: "Photo"
  },
  {
    src: "/gallery/frame-03.svg",
    title: "Nocturne Transit",
    caption: "Cinematic still from a night travel sequence.",
    type: "Video"
  },
  {
    src: "/gallery/frame-04.svg",
    title: "Eulogia Session",
    caption: "Studio frame balancing shadow and intent.",
    type: "Photo"
  },
  {
    src: "/gallery/frame-05.svg",
    title: "Signal Drift",
    caption: "Abstract light trails captured on location.",
    type: "Video"
  },
  {
    src: "/gallery/frame-06.svg",
    title: "Quiet Resolve",
    caption: "Documentary still emphasizing human focus.",
    type: "Photo"
  },
  {
    src: "/gallery/frame-07.svg",
    title: "Nightfall Architecture",
    caption: "Wide frame built around silhouette and haze.",
    type: "Photo"
  },
  {
    src: "/gallery/frame-08.svg",
    title: "Motion in Prayer",
    caption: "Slow shutter motion study with devotional tone.",
    type: "Video"
  }
];

const galleryExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const galleryDirectory = path.join(process.cwd(), "public", "gallery");

const toTitleCase = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const toSentenceCase = (value: string) =>
  value ? value.charAt(0).toUpperCase() + value.slice(1) : value;

const toGalleryItem = (fileName: string): GalleryItem => {
  const baseName = path.parse(fileName).name;
  const cleanedName = baseName.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  const title = toTitleCase(cleanedName);
  const caption = toSentenceCase(cleanedName);

  return {
    src: `/gallery/${fileName}`,
    title,
    caption,
    type: "Photo"
  };
};

export const getGalleryItems = (): GalleryItem[] => {
  try {
    const entries = fs.readdirSync(galleryDirectory, { withFileTypes: true });
    const imageFiles = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((fileName) => galleryExtensions.has(path.extname(fileName).toLowerCase()));

    if (imageFiles.length === 0) {
      return fallbackGalleryItems;
    }

    return imageFiles
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
      .map(toGalleryItem);
  } catch (error) {
    return fallbackGalleryItems;
  }
};
