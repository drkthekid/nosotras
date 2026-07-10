import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const courses = [
  {
    label: "Inglês",
    title: "Domine o idioma mais falado no mundo dos negócios, tecnologia e entretenimento.",
    description:
      "Aulas dinâmicas com foco em conversação desde o primeiro dia, com uma abordagem prática e envolvente.",
    details: [
      "Iniciantes ao avançado · Todas as idades",
      "Terças e quintas · 19h",
      "Prof. Ricardo",
    ],
    image: "/mascote/lola.png",
    alt: "Mascote Lola representando o curso de inglês",
    accent: "text-primary",
    buttonClass: "bg-primary text-primary-foreground hover:bg-primary/90",
    imagePosition: "left",
  },
  {
    label: "Espanhol",
    title: "Aprenda o segundo idioma mais falado do mundo com professores que viveram na Argentina.",
    description:
      "Cultura, música e conversação em cada aula, com uma metodologia viva e conectada ao seu dia a dia.",
    details: [
      "Iniciantes ao avançado · Todas as idades",
      "Período da manhã · Dias flexíveis",
      "Profª. Marina e Profª. Carla",
    ],
    image: "/mascote/john.png",
    alt: "Mascote John representando o curso de espanhol",
    accent: "text-secondary",
    buttonClass: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    imagePosition: "right",
  },
];

const Courses = ({
  title = "Escolha o idioma que vai transformar seu futuro",
  description = "Aulas ao vivo, método prático e professores apaixonados para você aprender com confiança.",
  className,
}) => {
  return (
    <section className={cn("px-6 py-24 lg:px-8 lg:py-32", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-3xl text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            Escolha o idioma que vai <span className="text-primary">transformar seu futuro</span>
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {courses.map((course) => (
            <article
              className="group overflow-hidden rounded-[2rem] border border-border/60 bg-muted/40 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              key={course.label}
            >
              <div className={cn("flex h-full flex-col lg:flex-row", course.imagePosition === "left" && "lg:flex-row-reverse") }>
                  <div className="flex-1 p-8 sm:p-10 lg:p-12">
                    <p className={cn("text-sm font-semibold uppercase tracking-[0.25em]", course.accent)}>
                      {course.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] sm:text-[1.7rem]">
                      {course.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-foreground/80">
                      {course.description}
                    </p>

                    <ul className="mt-8 space-y-3 text-sm text-foreground/80">
                      {course.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <span className={cn("mt-1 h-2.5 w-2.5 rounded-full", course.accent)} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      className={cn(
                        "mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors",
                        course.buttonClass
                      )}
                      href="#"
                    >
                      Saber mais
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="flex items-center justify-center bg-background/70 p-6 sm:p-8 lg:w-[42%] lg:p-10">
                    <img
                      alt={course.alt}
                      className="h-[220px] w-auto max-w-full object-contain drop-shadow-xl sm:h-[260px]"
                      src={course.image}
                    />
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export { Courses };
