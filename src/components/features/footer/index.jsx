import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";

const footerSections = [
  {
    title: "Nosotras",
    links: [
      {
        title: "Sobre",
        href: "/sobre",
      },
      {
        title: "Metodologia",
        href: "/metodologia",
      },
      {
        title: "Cursos",
        href: "/cursos",
      },
      {
        title: "Preços",
        href: "/precos",
      },
      {
        title: "Contato",
        href: "/contato",
      },
    ],
  },
  {
    title: "Contato",
    links: [
      {
        title: "WhatsApp",
        href: "https://wa.me/5511999556612",
      },
      {
        title: "E-mail",
        href: "mailto:Nosotras.empresarial@gmail.com",
      },
      {
        title: "Instagram",
        href: "https://www.instagram.com/nosotras_espanhol",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="grid gap-10 px-6 py-12 md:grid-cols-2 xl:px-0">
          <div className="max-w-md">
            <Logo />
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Aprenda inglês e espanhol com aulas online, turmas reduzidas e uma metodologia que valoriza sua evolução com atenção real.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-semibold text-foreground">{title}</h6>
                <ul className="mt-4 space-y-3">
                  {links.map(({ title: linkTitle, href }) => (
                    <li key={linkTitle}>
                      <Link
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {linkTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col items-center justify-between gap-x-2 gap-y-4 px-6 py-8 sm:flex-row xl:px-0">
          <span className="text-center text-sm text-muted-foreground sm:text-left">
            &copy; {new Date().getFullYear()} <Link href="/">Nosotras</Link>. Todos os direitos reservados.
          </span>
          <span className="text-center text-sm text-muted-foreground sm:text-left">
            Desenvolvido por Vitruvian Dev
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
