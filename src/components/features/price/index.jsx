import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    name: "Modalidade Em Grupo",
    price: "R$ 240/mês",
    subtitle: "1 hora por semana",
    description: "Ideal para quem quer aprender com rotina, interação e acompanhamento contínuo.",
    features: [
      "Mínimo 3, máximo 5 alunos",
      "Aulas ao vivo com interação",
      "Material didático incluso",
      "Grupo de WhatsApp exclusivo",
    ],
    buttonText: "Quero este plano",
    href: "https://readdy.ai/preview/67117193-defd-469d-b34b-33d3e4e42663/11897865/#aula-experimental",
  },
  {
    name: "Modalidade Particular",
    price: "R$ 90/hora",
    subtitle: "Aulas avulsas · Flexibilidade total",
    description: "Perfeita para quem precisa de atenção personalizada e horários que se encaixem na rotina.",
    features: [
      "Atenção 100% individualizada",
      "Ritmo personalizado",
      "Horários flexíveis",
      "Foco em objetivos específicos",
    ],
    buttonText: "Quero este plano",
    href: "https://readdy.ai/preview/67117193-defd-469d-b34b-33d3e4e42663/11897865/#aula-experimental",
    isPopular: true,
  },
];

const Pricing = () => {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl lg:w-[45%] lg:self-center">
          <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-[2.75rem]">
            Planos que cabem <span className="text-primary">no seu bolso</span>
          </h2>
          <p className="mt-4 text-xl leading-8 text-muted-foreground -tracking-[0.01em] md:text-lg">
            Escolha a modalidade que melhor se adapta à sua rotina e ao seu estilo de aprendizado. Seja em grupo ou individual, a qualidade é a mesma.
          </p>

          <div className="mt-8 rounded-2xl border border-border/70 bg-background/70 p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
            <h3 className="font-semibold text-foreground">Horários</h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-bold text-foreground">Inglês</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Agenda flexível · Turmas em grupo às terças e quintas, 19h
                </p>
              </div>
              <div>
                <p className="font-bold text-foreground">Espanhol</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Período da manhã · Dias e horários flexíveis
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 lg:w-[55%] lg:max-w-[560px]">
          {plans.map((plan) => (
            <div
              className={`rounded-2xl border p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)] ${
                plan.isPopular
                  ? "border-border/70 bg-background/70"
                  : "border-border/70 bg-[#111827] text-white"
              }`}
              key={plan.name}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col">
                  <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${plan.isPopular ? "text-primary" : "text-slate-400"}`}>
                    Modalidade
                  </span>
                  <h3 className={`mt-1 text-lg font-semibold ${plan.isPopular ? "text-foreground" : "text-white"}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-1 text-sm ${plan.isPopular ? "text-muted-foreground" : "text-slate-300"}`}>
                    {plan.subtitle}
                  </p>
                </div>
                {plan.isPopular ? (
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Mais flexível
                  </span>
                ) : null}
              </div>

              <p className={`mt-5 text-4xl font-semibold tracking-[-0.03em] ${plan.isPopular ? "text-foreground" : "text-white"}`}>
                {plan.price}
              </p>
              <p className={`mt-3 text-sm leading-7 ${plan.isPopular ? "text-muted-foreground" : "text-slate-300"}`}>
                {plan.description}
              </p>

              <Separator className="my-5" />

              <ul className="space-y-2.5">
                {plan.features.map((feature) => (
                  <li className={`flex items-start gap-2 text-sm ${plan.isPopular ? "text-foreground" : "text-white"}`} key={feature}>
                    <CircleCheck className={`mt-0.5 h-4 w-4 shrink-0 ${plan.isPopular ? "text-primary" : "text-slate-300"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-6 w-full ${plan.isPopular ? "" : "border-white/20 bg-white/10 text-white hover:bg-white/20"}`}
                size="lg"
                variant={plan.isPopular ? "default" : "outline"}
                asChild
              >
                <a href={plan.href} target="_blank" rel="noreferrer">
                  {plan.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
