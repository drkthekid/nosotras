"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const rotatingWords = [
  "está perto de você",
  "entende você",
  "cresce com você",
  "fala a sua língua",
];

const mascots = ["/mascote/john.png", "/mascote/lola.png", "/mascote/juntos.png"];

const WHATSAPP_NUMBER = "5511999556612";
const whatsappMessage = encodeURIComponent(
  "Olá! Vim pelo site da Nosotras e gostaria de agendar uma aula experimental."
);
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [mascotIndex, setMascotIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMascotIndex((prev) => (prev + 1) % mascots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-8 sm:py-12">
      {/* Fundo animado */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-96 w-96 animate-[blob-move_9s_ease-in-out_infinite] rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] animate-[blob-move_11s_ease-in-out_infinite_1.5s] rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-[blob-move_10s_ease-in-out_infinite_3s] rounded-full bg-accent/30 blur-3xl" />
      </div>

      <style>{`
        @keyframes blob-move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -50px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.95); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.55; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.85; transform: translateX(-50%) scale(1.12); }
        }
      `}</style>

      <div className="mx-auto grid w-full max-w-screen-xl gap-16 md:grid-cols-2">
        <div className="animate-in fade-in slide-in-from-bottom-4 text-center duration-700 md:text-left">
          <h1 className="mx-auto mt-2 max-w-[19ch] text-4xl font-bold leading-[1.1] tracking-[-0.04em] sm:mt-6 sm:text-5xl md:mx-0 md:text-6xl lg:text-[3.25rem] xl:text-[3.75rem]">
            <span className="block">Aprenda inglês e espanhol</span>
            <span className="block text-secondary">com quem realmente</span>
            <span className="relative block h-[1.2em] overflow-hidden text-primary">
              <AnimatePresence mode="wait">
                <motion.span
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0"
                  exit={{ opacity: 0, y: -10 }}
                  initial={{ opacity: 0, y: 10 }}
                  key={wordIndex}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-[62ch] text-lg text-foreground/60 sm:mt-8 sm:text-2xl/normal md:mx-0">
            Aulas online ao vivo, turmas reduzidas de até 5 alunos, professores certificados e uma metodologia que trata cada aluno como único. Sua jornada no idioma começa aqui.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:justify-center sm:gap-4 md:justify-start">
            <Button
              className="rounded-full font-bold"
              nativeButton={false}
              render={<a href={whatsappLink} rel="noopener noreferrer" target="_blank" />}
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Agendar Aula Experimental
            </Button>
            <Button
              className="rounded-full border-secondary font-bold text-secondary hover:bg-secondary/10"
              nativeButton={false}
              render={<Link href="#teste-de-nivel" />}
              size="lg"
              variant="outline"
            >
              Fazer Teste de nivel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mascotes: escondidos no mobile, visíveis a partir do md */}
        <div className="mt-auto hidden items-center justify-center md:flex md:justify-end">
          <div className="relative flex w-full max-w-[720px] items-center justify-center overflow-hidden p-2 sm:p-4 lg:-mt-4 lg:p-0">
            {/* Luz vinda de baixo para cima */}
            <div
              aria-hidden="true"
              style={{ animation: "glow-pulse 4s ease-in-out infinite" }}
            />
            <div
              aria-hidden="true"
              style={{ animation: "glow-pulse 4s ease-in-out infinite 0.5s" }}
            />

            <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[620px]">
              <AnimatePresence mode="wait">
                <motion.img
                  alt="John e Lola, mascotes da Nosotras, representando os cursos de Inglês e Espanhol"
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 mx-auto h-full w-auto max-w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)]"
                  exit={{ opacity: 0, scale: 0.96 }}
                  initial={{ opacity: 0, scale: 0.96 }}
                  key={mascotIndex}
                  src={mascots[mascotIndex]}
                  style={{ animation: "float 5s ease-in-out infinite" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}