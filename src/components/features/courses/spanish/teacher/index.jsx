const teamMembers = [
  {
    name: "Roberval Junior",
    image: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    role: "Professor de inglês · Wizard · W12",
    bio: "Professor formado na Wizard, certificado W12 e com experiência no Canadá por conta de intercâmbio. Especialista em criar aulas dinâmicas, acolhedoras e voltadas para a prática real do idioma.",
  },
];

const Team = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-balance text-center font-bold text-xl tracking-[-0.04em] sm:text-4xl md:text-[2.75rem]">
        Quem vai te ensinar
      </h2>

      <div className="mt-12 flex justify-center">
        {teamMembers.map((member, index) => (
          <div
            className="w-full max-w-3xl rounded-3xl border border-border/70 bg-background/90 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.12)] sm:p-10"
            key={index}
          >
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <div className="w-full max-w-[260px] shrink-0 overflow-hidden rounded-2xl">
                <img
                  alt={member.name}
                  className="aspect-square w-full object-cover object-top"
                  src={member.image}
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  Professor
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-foreground">
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

export default Team;
