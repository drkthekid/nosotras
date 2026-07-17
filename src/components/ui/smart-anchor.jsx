"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SmartAnchor({ id, children, className, ...props }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  function handleClick(e) {
    if (isHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    // Se não estiver na home, deixa o Link navegar normalmente para "/#id",
    // e o efeito abaixo (ScrollToHash) cuida de rolar até a seção após o carregamento.
  }

  return (
    <Link className={className} href={isHome ? `#${id}` : `/#${id}`} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}