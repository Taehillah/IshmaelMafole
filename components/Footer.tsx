"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topRow}>
          <div>
            <p className={styles.brand}>
              <span className="matrix-text">Ishmael L. Mafole</span>
            </p>
            <p className="text-muted">
              Systems-aware engineering and visual storytelling under Eulogia
              Graphix.
            </p>
          </div>
          <div>
            <p className={styles.label}>Explore</p>
            <div className={styles.links}>
              <Link href="/projects">Projects</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <span className="text-muted">
            (c) {new Date().getFullYear()} Ishmael L. Mafole. Built for recruiters,
            technical leads, and creative collaborators.
          </span>
          <span className={styles.status}>
            <span className={styles.statusDot} /> Terminal-ready
          </span>
        </div>
      </div>
    </footer>
  );
}
