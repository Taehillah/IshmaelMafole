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
    <div className="home-logo-mark app-logo-orbit" aria-hidden="true">
      <span className="app-logo-spark app-logo-spark--blue" />
      <span className="app-logo-spark app-logo-spark--white" />
      <span className="app-logo-spark app-logo-spark--yellow" />
    </div>
  ) : null;
}
