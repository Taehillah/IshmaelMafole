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
        <div className={styles.heroShell}>
          <div className={styles.sideRail} aria-hidden="true">
            <span className={styles.sideLine} />
            <span className={styles.sideLabel}>Portfolio</span>
            <span className={styles.sideLine} />
            <span className={styles.sideLabel}>Systems</span>
            <span className={styles.sideLine} />
            <span className={styles.sideLabel}>Visual</span>
          </div>
          <div className={styles.copy}>
            <span className={styles.kicker}>Systems + Creative</span>
            <h1 className={`${styles.title} matrix-text`}>
              Ishmael L. Mafole
              <span className="cursor" />
            </h1>
            <div className={styles.roles}>
              <p>A servant of God</p>
              <p>Software Developer</p>
              <p>Photographer/Videographer</p>
              <p>Designer/Creative</p>
            </div>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/projects">
                Enter Dev
              </Link>
              <Link className={styles.secondaryButton} href="/contact">
                Start a Conversation
              </Link>
            </div>
          </div>
          <div className={styles.portraitPanel} aria-hidden={!heroImage}>
            {heroImage ? (
              <>
                <div className={styles.portraitCrop}>
                  <Image
                    src={heroImage.src}
                    alt={heroImage.title}
                    fill
                    sizes="(max-width: 991px) 100vw, 45vw"
                    className={styles.heroImage}
                    priority
                  />
                  <div className={styles.heroImageOverlay} />
                  {heroImage.tag ? (
                    <span className={styles.imageTag}>{heroImage.tag}</span>
                  ) : null}
                </div>
              </>
            ) : (
              <div className={styles.imageFallback} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
