"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function BackHomeButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 240);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (pathname === "/") {
    return null;
  }

  return (
    <Link
      href="/"
      className={`back-home ${visible ? "is-visible" : ""}`}
      aria-label="Back to home"
    >
      <span className="arrow" aria-hidden="true" />
    </Link>
  );
}
