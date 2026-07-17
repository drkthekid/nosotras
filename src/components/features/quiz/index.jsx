"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, MessageCircle, RotateCcw, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLevelResult } from "@/lib/quiz.data";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "5511999556612";

export function LevelQuiz({ language, mascot, questions, accentClass = "text-primary" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = questions[currentIndex];
  const progress = ((currentIndex + (answered ? 1 : 0)) / questions.length) * 100;

  function handleSelect(optionIndex) {
    if (answered) return;
    setSelected(optionIndex);
    setAnswered(true);
    if (optionIndex === question.correct) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
    setFinished(false);
  }

  if (finished) {
    const result = getLevelResult(score);

    const whatsappMessage = encodeURIComponent(
      `Olá! Acabei de fazer o teste de nível de ${language} no site da Nosotras e meu resultado foi ${result.level} (${result.code}). Gostaria de agendar uma aula experimental!`
    );
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    return (
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-primary/15 bg-background/80 p-8 text-center shadow-xl ring-1 ring-primary/10 backdrop-blur-xl sm:p-12"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        />

        <img
          alt={mascot.alt}
          className="relative mx-auto h-50 w-auto object-contain drop-shadow-xl"
          src={mascot.src}
        />

        <p className={cn("relative mt-4 text-sm font-semibold uppercase tracking-[0.25em]", accentClass)}>
          Resultado do teste de {language}
        </p>
        <h2 className="relative mt-2 text-3xl font-bold tracking-[-0.03em]">
          Nível {result.level} <span className="text-foreground/50">({result.code})</span>
        </h2>
        <p className="relative mt-4 text-base leading-7 text-foreground/70">{result.description}</p>

        <p className="relative mt-6 text-sm text-foreground/50">
          Você acertou {score} de {questions.length} perguntas.
        </p>

        <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            className="rounded-full bg-[#25D366] font-bold text-white hover:bg-[#1FBD59]"
            render={<a href={whatsappLink} rel="noopener noreferrer" target="_blank" />}
            size="lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Agendar aula experimental
          </Button>
          <Button
            className="rounded-full font-bold"
            onClick={handleRestart}
            size="lg"
            variant="outline"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Refazer teste
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      {/* Barra de progresso */}
      <div className="mb-8 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
          <motion.div
            animate={{ width: `${progress}%` }}
            className="h-full rounded-full bg-primary"
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        <span className="text-sm font-medium text-foreground/60">
          {currentIndex + 1}/{questions.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="rounded-[2rem] border border-primary/15 bg-background/80 p-8 shadow-lg ring-1 ring-primary/10 backdrop-blur-xl sm:p-10"
          exit={{ opacity: 0, x: -20 }}
          initial={{ opacity: 0, x: 20 }}
          key={currentIndex}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold leading-relaxed sm:text-2xl">
            {question.question}
          </h3>

          <div className="mt-6 flex flex-col gap-3">
            {question.options.map((option, index) => {
              const isCorrect = index === question.correct;
              const isSelected = index === selected;

              return (
                <button
                  className={cn(
                    "flex items-center justify-between rounded-xl border px-5 py-3.5 text-left text-base transition-all duration-200",
                    !answered && "border-border/60 bg-background/40 hover:border-primary hover:bg-primary/5",
                    answered && isCorrect && "border-primary bg-primary/10 text-primary",
                    answered && isSelected && !isCorrect && "border-destructive bg-destructive/10 text-destructive",
                    answered && !isSelected && !isCorrect && "border-border/40 bg-background/20 opacity-50"
                  )}
                  disabled={answered}
                  key={option}
                  onClick={() => handleSelect(index)}
                  type="button"
                >
                  {option}
                  {answered && isCorrect && <CheckCircle2 className="h-5 w-5 shrink-0" />}
                  {answered && isSelected && !isCorrect && <XCircle className="h-5 w-5 shrink-0" />}
                </button>
              );
            })}
          </div>

          {answered && (
            <motion.div
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
            >
              <Button className="w-full rounded-full font-bold" onClick={handleNext} size="lg">
                {currentIndex + 1 < questions.length ? "Próxima pergunta" : "Ver resultado"}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}