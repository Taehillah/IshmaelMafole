import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
import type { GalleryItem } from "../lib/gallery";

type HeroImage = GalleryItem & {
  tag?: string;
};

type HeroProps = {
  featuredImages?: HeroImage[];
};

export default function Hero({ featuredImages = [] }: HeroProps) {
  const heroImage = featuredImages[0];

  return (
    <section className={`parallax-block ${styles.hero}`}>
      <div className="parallax-layer" aria-hidden="true" />
      <div className="container position-relative">
        <div className={styles.split}>
          <div className={styles.imagePanel} aria-hidden={!heroImage}>
            {heroImage ? (
              <>
                <Image
                  src={heroImage.src}
                  alt={heroImage.title}
                  fill
                  sizes="(max-width: 991px) 100vw, 55vw"
                  className={styles.heroImage}
                  priority
                />
                <div className={styles.imageOverlay} />
                {heroImage.tag ? (
                  <span className={styles.imageTag}>{heroImage.tag}</span>
                ) : null}
              </>
            ) : (
              <div className={styles.imageFallback} />
            )}
          </div>
          <div className={styles.contentPanel}>
            <span className={styles.kicker}>Systems + Creative</span>
            <h1 className={`${styles.title} matrix-text`}>
              Ishmael L. Mafole
              <span className="cursor" />
            </h1>
            <div className={styles.roles}>
              <p>A servant of God</p>
              <p>IT student</p>
              <p>(Full Stack + Mobile Developer)</p>
              <p>Photographer/Videographer @ Eulogia Graphix</p>
              <p>(Creative, Portrait, Event &amp; Documentary)</p>
            </div>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/projects">
                Enter Here
              </Link>
              <Link className={styles.secondaryButton} href="/contact">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
