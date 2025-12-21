import Image from "next/image";
import styles from "../styles/Gallery.module.css";
import type { GalleryItem } from "../lib/gallery";

type GalleryMasonryProps = {
  items: GalleryItem[];
};

export default function GalleryMasonry({ items }: GalleryMasonryProps) {
  return (
    <div className={styles.masonry}>
      {items.map((item) => (
        <figure className={styles.card} key={item.title}>
          <div className={styles.imageWrapper}>
            <Image
              src={item.src}
              alt={`${item.title} - ${item.type}`}
              width={640}
              height={820}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <span className={styles.type}>{item.type}</span>
              <h3>{item.title}</h3>
              {item.caption && item.caption.toLowerCase() !== item.title.toLowerCase() ? (
                <p>{item.caption}</p>
              ) : null}
            </div>
          </div>
        </figure>
      ))}
    </div>
  );
}
