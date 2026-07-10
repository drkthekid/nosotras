import {
  CircleDollarSign,
  Clock,
  Package,
  PackageX,
  Plane,
  ShieldPlus,
  Users,
  Waypoints,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais idiomas você oferece?",
    answer:
      "Oferecemos aulas de inglês e espanhol, com foco em conversação, fluência e confiança para o dia a dia e para objetivos profissionais.",
    icon: Plane,
  },
  {
    question: "As aulas são online ou presenciais?",
    answer:
      "As aulas são 100% online, ao vivo, com professores qualificados e interação real em tempo de verdade.",
    icon: Clock,
  },
  {
    question: "Qual é o tamanho das turmas?",
    answer:
      "Nossas turmas são reduzidas, com até 5 alunos, para garantir mais atenção e participação para cada estudante.",
    icon: Users,
  },
  {
    question: "Preciso ter experiência prévia?",
    answer:
      "Não. Temos turmas para iniciantes, intermediários e avançados, e adaptamos o conteúdo ao seu nível.",
    icon: Waypoints,
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Você pode escolher o plano que melhor combina com você e entrar em contato para verificar as opções disponíveis.",
    icon: CircleDollarSign,
  },
  {
    question: "Posso trocar de turma ou horário?",
    answer:
      "Sim, sempre que houver disponibilidade e conforme as regras da turma, podemos conversar sobre ajustes no seu planejamento.",
    icon: PackageX,
  },
  {
    question: "Tenho suporte durante as aulas?",
    answer:
      "Sim. Você conta com acompanhamento próximo, feedback e orientação da equipe ao longo da sua jornada de aprendizado.",
    icon: ShieldPlus,
  },
  {
    question: "Como posso começar?",
    answer:
      "Você pode agendar uma aula experimental ou entrar em contato pelo WhatsApp para tirar dúvidas e começar hoje mesmo.",
    icon: Package,
  },
];

const FAQ = () => {
  const totalFaqs = faqs.length;
  const firstHalfFaqs = faqs.slice(0, Math.ceil(totalFaqs / 2));
  const secondHalfFaqs = faqs.slice(Math.ceil(totalFaqs / 2));

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20">
      <h2 className="text-balance text-center text-4xl font-semibold tracking-[-0.04em] sm:text-[2.75rem]">
        Confira as perguntas mais frequentes
      </h2>
      <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
        <Accordion
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
          collapsible
          type="single">
          <div className="space-y-4">
            <AccordionItemList faqs={firstHalfFaqs} />
          </div>
          <div className="space-y-4">
            <AccordionItemList faqs={secondHalfFaqs} />
          </div>
        </Accordion>
      </div>
    </div>
  );
};

function AccordionItemList({
  faqs
}) {
  return faqs.map((faq, index) => (
    <AccordionItem
      className="rounded-lg border border-primary/20 bg-primary/10 px-5 last:border-b dark:border-primary/30 dark:bg-primary/15"
      key={index}
      value={faq.question}>
      <AccordionTrigger className="py-5 text-left text-lg font-bold">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <faq.icon className="size-5 shrink-0" />
          </div>
          <span>{faq.question}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-2 pb-4 pl-14 text-base leading-7 text-foreground/80">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ));
}

export default FAQ;
