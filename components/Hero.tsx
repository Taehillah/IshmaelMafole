import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
import type { GalleryItem } from "../lib/gallery";

type HeroImage = GalleryItem & {
  tag?: string;
};

type HeroProps = {
  featuredImages?: HeroImage[];
  lightImage?: HeroImage;
};

export default function Hero({ featuredImages = [], lightImage }: HeroProps) {
  const heroImage = featuredImages[0];
  const lightHeroImage = lightImage ?? heroImage;
  const heroTag = heroImage?.tag ?? lightHeroImage?.tag;

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
              <Link className={styles.roleLink} href="/about">
                A servant of God
              </Link>
              <Link className={styles.roleLink} href="/projects">
                Software Developer
              </Link>
              <Link className={styles.roleLink} href="/gallery">
                Photographer/Videographer
              </Link>
              <Link className={styles.roleLink} href="/about">
                Designer/Creative
              </Link>
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
                    className={`${styles.heroImage} ${styles.heroImageDark}`}
                    priority
                  />
                  {lightHeroImage ? (
                    <Image
                      src={lightHeroImage.src}
                      alt={lightHeroImage.title}
                      fill
                      sizes="(max-width: 991px) 100vw, 45vw"
                      className={`${styles.heroImage} ${styles.heroImageLight}`}
                      loading="lazy"
                    />
                  ) : null}
                  <div className={styles.heroImageOverlay} />
                  {heroTag ? (
                    <span className={styles.imageTag}>{heroTag}</span>
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
