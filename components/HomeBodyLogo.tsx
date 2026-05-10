"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HomeBodyLogo() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const body = document.body;

    body.classList.toggle("home-logo", isHome);

    return () => {
      body.classList.remove("home-logo");
    };
  }, [isHome]);

  return isHome ? (
    <div className="home-logo-mark app-logo-orbit app-logo-orbit--home" aria-hidden="true">
      <span className="home-logo-image" />
    </div>
  ) : null;
}
