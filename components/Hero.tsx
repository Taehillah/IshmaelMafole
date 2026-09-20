import Link from "next/link";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={`parallax-block ${styles.hero}`}>
      <div className={styles.abstractBackdrop} aria-hidden="true" />
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
                Software Developer at Aura Code Pty Ltd
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
        </div>
      </div>
    </section>
  );
}
