import { ArrowRight, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const courses = [
  {
    label: "Inglês",
    tagline: "Seja como John, curioso e estudioso",
    href: "/cursos/ingles",
    title: "Domine o idioma mais falado no mundo dos negócios, tecnologia e entretenimento.",
    description:
      "Aulas dinâmicas com foco em conversação desde o primeiro dia, com uma abordagem prática e envolvente.",
    details: [
      "Iniciantes ao avançado · Todas as idades",
      "Terças e quintas · 19h",
      "Prof. Ricardo",
    ],
    image: "/mascote/john.png",
    alt: "Mascote John, curioso e estudioso, representando o curso de inglês",
    accent: "text-primary",
    blobClass: "bg-primary",
    buttonClass: "bg-primary text-primary-foreground hover:bg-primary/90",
    imagePosition: "right",
  },
  {
    label: "Espanhol",
    tagline:
      "Seja como Lola, exploradora, curiosa e cheia de energia para viajar ao mundo do espanhol",
    href: "/cursos/espanhol",
    title: "Aprenda o segundo idioma mais falado do mundo com professores que viveram na Argentina.",
    description:
      "Cultura, música e conversação em cada aula, com uma metodologia viva e conectada ao seu dia a dia.",
    details: [
      "Iniciantes ao avançado · Todas as idades",
      "Período da manhã · Dias flexíveis",
      "Profª. Marina e Profª. Carla",
    ],
    image: "/mascote/lola.png",
    alt: "Mascote Lola, exploradora e curiosa, representando o curso de espanhol",
    accent: "text-secondary",
    blobClass: "bg-secondary",
    buttonClass: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    imagePosition: "left",
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
              className="group relative overflow-hidden rounded-[2rem] bg-transparent shadow-none transition-all duration-300"
              key={course.label}
            >
              <div
                className={cn(
                  "flex flex-col lg:flex-row lg:items-stretch",
                  course.imagePosition === "left" && "lg:flex-row-reverse"
                )}
              >
                <div className="flex flex-1 flex-col justify-center p-8 sm:p-10 lg:p-14">
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
                      <li className="flex items-start gap-2" key={detail}>
                        <span
                          className={cn(
                            "mt-1 h-2.5 w-2.5 shrink-0 rounded-full",
                            course.accent.replace("text-", "bg-")
                          )}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className={cn(
                      "mt-8 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors",
                      course.buttonClass
                    )}
                    href={course.href}
                  >
                    Explorar curso e testar nível
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="relative flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden py-10 lg:py-10">
                  <div
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute h-72 w-72 rounded-full opacity-20 blur-3xl",
                      course.blobClass
                    )}
                  />
                  <img
                    alt={course.alt}
                    className={cn(
                      "relative h-[260px] w-auto max-w-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105 sm:h-[320px] lg:h-[400px]",
                      course.imagePosition === "left" ? "lg:-mr-8" : "lg:-ml-8"
                    )}
                    src={course.image}
                  />
                  <p className="relative max-w-[26ch] text-center text-sm font-medium italic text-foreground/70">
                    <Sparkles className={cn("mr-1 inline h-3.5 w-3.5 align-text-bottom", course.accent)} />
                    {course.tagline}
                  </p>
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