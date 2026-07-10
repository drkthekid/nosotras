import { Globe, Laptop, MessageCircle, Users } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Máximo 5 Alunos",
    description:
      "Garantimos que cada aluno tenha voz ativa e tempo de fala suficiente em todas as aulas.",
    color: "primary",
  },
  {
    icon: MessageCircle,
    title: "Atendimento Próximo",
    description:
      "Acompanhamento individualizado com feedback constante sobre seu progresso e áreas de melhoria.",
    color: "secondary",
  },
  {
    icon: Globe,
    title: "Imersão Cultural",
    description:
      "Músicas, filmes, gastronomia e costumes dos países. O idioma vai muito além do livro didático.",
    color: "accent",
  },
  {
    icon: Laptop,
    title: "100% Digital",
    description:
      "Aulas ao vivo por videoconferência com material digital incluso. Flexibilidade total sem abrir mão da qualidade.",
    color: "primary",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/30 text-accent-foreground",
};

const iconHoverClasses = {
  primary: "group-hover:text-primary",
  secondary: "group-hover:text-secondary/80",
  accent: "group-hover:text-accent-foreground/80",
};

const Features = () => {
  return (
    <div className="px-6 py-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="max-w-3xl font-extrabold text-4xl tracking-[-0.045em] ">
          O que nos torna
        </h2>
        <h2 className="text-secondary text-4xl font-extrabold">diferentes de verdade</h2>
      </div>

      <p className="mt-3 text-center text-lg text-muted-foreground tracking-[-0.01em] sm:text-lg">
        Nossa metodologia foi desenhada para que o aprendizado seja natural,
        <br></br>
         prazeroso e realmente efetivo. Não é só sobre passar de nível, é sobre se apaixonar pelo idioma.
      </p>
      <div className="mx-auto mt-10 grid max-w-screen-lg gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            className="group flex flex-col rounded-xl border border-border/60 bg-muted/70 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            key={feature.title}
          >
            <div
              className={`mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors duration-200 ${iconHoverClasses[feature.color]}`}
            >
              <feature.icon aria-hidden="true" className="size-5 transition-colors duration-200" />
            </div>
            <span className="font-bold text-lg">{feature.title}</span>
            <p className="mt-1 text-[15px] text-foreground/80">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;