export const englishQuestions = [
  {
    question: "She ___ to the gym every morning.",
    options: ["go", "goes", "going", "gone"],
    correct: 1,
  },
  {
    question: "I have never ___ to Japan.",
    options: ["be", "being", "been", "was"],
    correct: 2,
  },
  {
    question: "If I ___ more time, I would travel more.",
    options: ["have", "had", "has", "having"],
    correct: 1,
  },
  {
    question: "Which word means the same as 'happy'?",
    options: ["sad", "joyful", "angry", "tired"],
    correct: 1,
  },
  {
    question: "They ___ finished the project by next Friday.",
    options: ["will have", "have", "had", "will"],
    correct: 0,
  },
  {
    question: "The cake ___ by my mother.",
    options: ["made", "is made", "making", "make"],
    correct: 1,
  },
  {
    question: "Despite ___ tired, she kept working.",
    options: ["be", "being", "been", "is"],
    correct: 1,
  },
  {
    question: "She's really good ___ math.",
    options: ["in", "at", "on", "for"],
    correct: 1,
  },
  {
    question: "I wish I ___ speak French fluently.",
    options: ["can", "could", "would", "will"],
    correct: 1,
  },
  {
    question: "Which word means 'to postpone'?",
    options: ["cancel", "delay", "finish", "start"],
    correct: 1,
  },
];

export const spanishQuestions = [
  {
    question: "Ella ___ al gimnasio todas las mañanas.",
    options: ["va", "van", "vas", "voy"],
    correct: 0,
  },
  {
    question: "Yo nunca ___ estado en España.",
    options: ["he", "ha", "has", "hemos"],
    correct: 0,
  },
  {
    question: "Si ___ más tiempo, viajaría más.",
    options: ["tuviera", "tengo", "tenía", "tendré"],
    correct: 0,
  },
  {
    question: "¿Cuál es un sinónimo de 'feliz'?",
    options: ["triste", "alegre", "enojado", "cansado"],
    correct: 1,
  },
  {
    question: "Ellos ___ terminado el proyecto para el viernes.",
    options: ["habrán", "han", "habían", "hubieran"],
    correct: 0,
  },
  {
    question: "El pastel ___ por mi madre.",
    options: ["hecho", "es hecho", "hace", "hacer"],
    correct: 1,
  },
  {
    question: "A pesar de ___ cansada, siguió trabajando.",
    options: ["estar", "ser", "estando", "está"],
    correct: 0,
  },
  {
    question: "Ella es muy buena ___ matemáticas.",
    options: ["en", "con", "por", "para"],
    correct: 0,
  },
  {
    question: "Ojalá ___ hablar francés con fluidez.",
    options: ["pueda", "podría", "puedo", "pudiera"],
    correct: 3,
  },
  {
    question: "¿Qué palabra significa 'posponer'?",
    options: ["cancelar", "aplazar", "terminar", "empezar"],
    correct: 1,
  },
];

export function getLevelResult(score) {
  if (score <= 3) {
    return {
      level: "Iniciante",
      code: "A1",
      description:
        "Você está no começo da sua jornada — e tudo bem! Nossas turmas para iniciantes vão te dar uma base sólida desde o primeiro dia.",
    };
  }
  if (score <= 5) {
    return {
      level: "Básico",
      code: "A2",
      description:
        "Você já entende bastante coisa. Com a prática certa, sua fluência vai decolar rapidinho.",
    };
  }
  if (score <= 7) {
    return {
      level: "Intermediário",
      code: "B1",
      description:
        "Muito bom! Você já se comunica com alguma confiança. Nossas turmas intermediárias vão refinar sua fluência.",
    };
  }
  if (score <= 8) {
    return {
      level: "Avançado",
      code: "B2",
      description:
        "Ótimo domínio! Você está bem próximo da fluência total — falta só destravar naturalidade em situações do dia a dia.",
    };
  }
  return {
    level: "Fluente",
    code: "C1",
    description:
      "Uau! Seu domínio do idioma é impressionante. Vamos te ajudar a lapidar os últimos detalhes para uma fluência completa.",
  };
}