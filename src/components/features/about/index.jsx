import { ArrowUpRight, BadgeCheck, Laptop, MessageCircle, Users } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: MessageCircle,
    title: "Atendimento Próximo",
    description:
      "Cada aluno é único. Oferecemos acompanhamento individualizado e suporte constante durante toda a jornada de aprendizado.",
  },
  {
    icon: Users,
    title: "Turmas Reduzidas",
    description:
      "Máximo de 5 alunos por turma para garantir que todos participem ativamente e recebam atenção personalizada.",
  },
  {
    icon: Laptop,
    title: "100% Digital",
    description:
      "Aulas ao vivo por videoconferência, com material didático digital incluso. Estude de onde estiver, sem perder qualidade.",
  },
  {
    icon: BadgeCheck,
    title: "Professores Certificados",
    description:
      "Equipe com certificações internacionais e vivência no exterior, trazendo o idioma real para a sala de aula.",
  },
];

export default function Sobre() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div
        className="mx-auto grid w-full max-w-(--breakpoint-xl) gap-16 lg:grid-cols-2">
        <div>
          <Badge
            className="rounded-full border-border py-1"
            variant="secondary"
            render={<Link href="#" />}>Sobre a Nosotras <ArrowUpRight className="ml-1 size-4" /></Badge>
          <h1
            className="mt-6 max-w-[17ch] font-bold text-4xl leading-[1.2]! tracking-[-0.04em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
            Uma escola que fala
            <br /> a sua língua
          </h1>
          <p
            className="mt-4 max-w-[60ch] text-foreground/60 text-lg sm:mt-6 sm:text-xl/normal">
            A Nosotras nasceu da vontade de ensinar idiomas de um jeito diferente: próximo, humano e acolhedor. Acreditamos que aprender uma nova língua vai muito além da gramática — é sobre se conectar com culturas, abrir portas e ganhar confiança.

            Nossa metodologia combina conversação ativa, imersão cultural e material didático atualizado, sempre respeitando o ritmo de cada aluno. Com turmas reduzidas e professores que realmente conhecem cada estudante, criamos um ambiente onde todo mundo se sente em casa.
          </p>
          <div className="mt-8 flex items-center gap-4 sm:mt-12">
            <Button className="rounded-full" size="lg">
              Conheça nossos cursos
              <ArrowUpRight className="h-5! w-5!" />
            </Button>
          </div>
        </div>
        <div className="mt-auto flex aspect-video w-full items-center justify-center rounded-2xl border border-white/10 bg-[#111827] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.25)] sm:p-10">
          <div className="max-w-xl text-center">
            <div className="mb-4 flex items-center justify-between text-4xl text-primary sm:text-5xl">
              <span>“</span>
              <span>”</span>
            </div>
            <p className="text-lg leading-8 text-muted sm:text-xl">
              Nosso propósito é fazer cada aluno se sentir acolhido, motivado e capaz de alcançar a fluência. Aqui, ninguém é só mais um número na turma.
            </p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="font-semibold text-primary">Equipe Nosotras</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-(--breakpoint-xl)">
        <div className=" mt-10 grid flex justify-between gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="group flex flex-col rounded-xl border border-border/60 bg-muted/70 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                key={item.title}
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:text-primary">
                  <Icon aria-hidden="true" className="size-5 transition-colors duration-200" />
                </div>
                <span className="font-bold text-lg">{item.title}</span>
                <p className="mt-2 text-[15px] leading-7 text-foreground/80">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
