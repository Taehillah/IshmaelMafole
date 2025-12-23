"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
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

  if (isHome) {
    return null;
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container">
        <Link className={`navbar-brand ${styles.brand}`} href="/">
          <Image
            src="/gallery/logo.png"
            alt="Ishmael L. Mafole logo"
            width={100}
            height={100}
            className={styles.logo}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#primaryNav"
          aria-controls="primaryNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${styles.toggler}`} />
        </button>
        <div className="collapse navbar-collapse" id="primaryNav">
            <ul className={`navbar-nav ms-auto ${styles.navList}`}>
              {navItems.map((item) => (
                <li className="nav-item" key={item.href}>
                  <Link
                    className={`nav-link ${styles.navLink} ${
                      pathname === item.href ? styles.navLinkActive : ""
                    }`}
                    href={item.href}
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
