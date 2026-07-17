import { ArrowUpRight, Clock3, Video, MessageCircle, Users } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: MessageCircle,
    title: "Foco em Conversação",
    description:
      "70% do tempo de aula é dedicado à fala ativa.",
  },
  {
    icon: Users,
    title: "Material Atualizado",
    description:
      "Conteúdo baseado em situações reais do dia a dia.",
  },
  {
    icon: Video,
    title: "Aulas 100% ao Vivo",
    description: "Nada de vídeos gravados: você aprende com um professor de verdade, em tempo real.",
  },
  {
    icon: Clock3,
    title: "Horários de Inglês",
    description:
      "Agenda flexível pela manhã, adaptada à disponibilidade do aluno e do professor.",
  },
];

export default function English() {
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
            Inglês que você

            <br /> realmente fala
          </h1>
          <p
            className="mt-4 max-w-[60ch] text-foreground/60 text-lg sm:mt-6 sm:text-xl/normal">
            Nosso curso de Inglês é desenhado para brasileiros que querem ir além da gramática. Com método comunicativo, você pratica conversação real desde a primeira aula, desenvolvendo fluência para viagens, trabalho e vida pessoal.
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
              "O Inglês abre portas para o mundo inteiro. Nosso compromisso é que cada aluno saia da aula mais confiante do que entrou."
            </p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="font-semibold text-primary">Prof. Júnior</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-(--breakpoint-xl)">
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="group flex flex-col rounded-2xl border border-border/60 bg-background/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
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
