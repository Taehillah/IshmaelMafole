"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Socials", href: "/socials" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  if (isHome) {
    return null;
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container">
        <Link className={`navbar-brand ${styles.brand}`} href="/">
          <span className="app-logo-orbit app-logo-orbit--nav">
            <Image
              src="/gallery/optimized/logo.avif"
              alt="Ishmael L. Mafole logo"
              width={100}
              height={100}
              className={styles.logo}
            />
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-controls="primaryNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${styles.toggler}`} />
        </button>
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="primaryNav"
        >
          <ul className={`navbar-nav ms-auto ${styles.navList}`}>
            {navItems.map((item) => (
              <li className="nav-item" key={item.href}>
                <Link
                  className={`nav-link ${styles.navLink} ${
                    pathname === item.href ? styles.navLinkActive : ""
                  }`}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
