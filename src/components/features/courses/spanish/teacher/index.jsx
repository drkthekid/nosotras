const teamMembers = [
  {
    name: "Julia",
    image: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    role: "Professora de espanhol · Buenos Aires · Conversação",
    bio: "Formada em Letras e com vivência na Argentina, Julia cria aulas envolventes e naturais, com foco em comunicação real e confiança para falar desde o começo.",
  },
  {
    name: "Roberta",
    image: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    role: "Professora de espanhol · Córdoba · Cultura e gramática",
    bio: "Roberta une teoria e prática com uma abordagem acolhedora, trazendo cultura, música e expressões do cotidiano para tornar o aprendizado mais vivo e memorável.",
  },
  {
    name: "Marina",
    image: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    role: "Professora de espanhol · Madrid · Preparação para exames",
    bio: "Marina trabalha com foco em fluência, pronúncia e preparação para certificações, ajudando os alunos a evoluírem com segurança e objetivos claros.",
  },
];

const TeamSpanish = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-balance text-center font-bold text-xl tracking-[-0.04em] sm:text-4xl md:text-[2.75rem]">
        Quem vai te ensinar
      </h2>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            className="flex h-full flex-col rounded-3xl border border-border/70 bg-background/90 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.12)] sm:p-10"
            key={index}
          >
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="w-full max-w-[220px] shrink-0 overflow-hidden rounded-2xl">
                <img
                  alt={member.name}
                  className="aspect-square w-full object-cover object-top"
                  src={member.image}
                />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  Professora
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                  {member.name}
                </h3>
                <p className="mt-2 text-base font-medium text-muted-foreground">
                  {member.role}
                </p>
                <p className="mt-5 text-base leading-8 text-foreground/80">
                  {member.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSpanish;
