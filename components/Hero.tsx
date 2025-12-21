import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
import type { GalleryItem } from "../lib/gallery";

type HeroImage = GalleryItem & {
  tag: string;
};

type HeroProps = {
  featuredImages?: HeroImage[];
};

export default function Hero({ featuredImages = [] }: HeroProps) {
  return (
    <section className={`parallax-block ${styles.hero}`}>
      <div className="parallax-layer" aria-hidden="true" />
      <div className="container position-relative">
        <div className={styles.layout}>
          <div className={styles.content}>
            <span className="badge-outline">Systems + Creative</span>
            <h1 className={`${styles.title} matrix-text`}>
              ISHMAEL L. MAFOLE
              <span className="cursor" />
            </h1>
            <p className={styles.subtitle}>
              Full-Stack &amp; Systems-Aware Software Developer
              <br />
              Photographer | Videographer | UX/UI Designer
            </p>
            <p className={styles.statement}>
              "I design structured systems, secure platforms, and visual stories --
              where engineering meets creativity."
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/projects">
                View Case Studies
              </Link>
              <Link className={styles.secondaryButton} href="/contact">
                Start a Conversation
              </Link>
            </div>
          </div>
          {featuredImages.length > 0 ? (
            <div className={styles.gallery} aria-label="Featured photography">
              <p className={styles.galleryLabel}>Featured Frames</p>
              <div className={styles.galleryGrid}>
                {featuredImages.map((item, index) => (
                  <figure
                    className={`${styles.photoCard} ${
                      index === 0 ? styles.photoCardLarge : ""
                    }`}
                    key={item.src}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 991px) 90vw, 40vw"
                      className={styles.photoImage}
                      priority={index === 0}
                    />
                    <figcaption className={styles.photoCaption}>
                      <span className={styles.photoTag}>{item.tag}</span>
                      <span className={styles.photoTitle}>{item.title}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
