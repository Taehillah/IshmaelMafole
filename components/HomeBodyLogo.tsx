"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HomeBodyLogo() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    const isHome = pathname === "/";

    body.classList.toggle("home-logo", isHome);

    return () => {
      body.classList.remove("home-logo");
    };
  }, [pathname]);

  return null;
}
