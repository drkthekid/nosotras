import Link from "next/link";

export const Logo = () => (
  <Link href="/" aria-label="Ir para a página inicial">
    <img
      alt="Logo"
      className="h-30 w-auto"
      height={400}
      src="/logo/logo-sem-fundo.png"
      width={500}
    />
  </Link>
);
