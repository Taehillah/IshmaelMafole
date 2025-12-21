import fs from "fs";
import path from "path";

export type GalleryItem = {
  src: string;
  title: string;
  caption: string;
  type: "Photo" | "Video";
};

export type GalleryGroup = {
  title: string;
  story: string;
  items: GalleryItem[];
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

const getGalleryItemFromFile = (
  fileName: string,
  overrides: Partial<Pick<GalleryItem, "title" | "caption" | "type">> = {}
): GalleryItem | null => {
  const filePath = path.join(galleryDirectory, fileName);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const baseItem = toGalleryItem(fileName);

  return {
    ...baseItem,
    ...overrides
  };
};

const isGalleryItem = (item: GalleryItem | null): item is GalleryItem => Boolean(item);

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

export const getGalleryGroups = (): GalleryGroup[] => {
  const touchLetsGoItems = [
    {
      fileName: "silhoette1.jpg",
      title: "Silhoette 01",
      caption: ""
    },
    {
      fileName: "silhoette2.jpg",
      title: "Silhoette 02",
      caption: ""
    },
    {
      fileName: "silhoette3.jpg",
      title: "Silhoette 03",
      caption: ""
    }
  ]
    .map(({ fileName, ...overrides }) => getGalleryItemFromFile(fileName, overrides))
    .filter(isGalleryItem);

  const touchLetsGoKickItems = [
    {
      fileName: "kick1.jpg",
      title: "Kick 01",
      caption: ""
    },
    {
      fileName: "kick2.jpg",
      title: "Kick 02",
      caption: ""
    }
  ]
    .map(({ fileName, ...overrides }) => getGalleryItemFromFile(fileName, overrides))
    .filter(isGalleryItem);

const groups: GalleryGroup[] = [
    {
      title: "Kasie",
      story:
        "Black, the new white. A leap that ceaced the moment. I just had to stop and join these young men having the only fun they know best. #silhouette #blacknwhite #monochrome #fun #games #telepathy #eclipse",
      items: touchLetsGoItems
    },
    {
      title: "Touch lets Go!",
      story:
        "My place of Origin, Kroonstad. This small town is known mainly for a number of celebrated people that emerge from it. I took an initiative to celebrate its incubates through my lens.",
      items: touchLetsGoKickItems
    },
    {
      title: "Motherhood",
      story:
        "Gentle strength and quiet joy -- a tribute to the everyday grace of motherhood.",
      items: [
        {
          fileName: "mother1.jpg",
          title: "Mother 01",
          caption: ""
        },
        {
          fileName: "mother2.jpg",
          title: "Mother 02",
          caption: ""
        },
        {
          fileName: "mother3.jpg",
          title: "Mother 03",
          caption: ""
        }
      ]
        .map(({ fileName, ...overrides }) => getGalleryItemFromFile(fileName, overrides))
        .filter(isGalleryItem)
    }
  ].filter((group) => group.items.length > 0);

  if (groups.length === 0) {
    return [
      {
        title: "Gallery",
        story: "Selected frames from my visual archives.",
        items: getGalleryItems()
      }
    ];
  }

  return groups;
};
