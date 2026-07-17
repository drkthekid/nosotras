"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const levels = [
  { label: "A1 Iniciante", className: "bg-secondary/10 text-secondary border-secondary/30" },
  { label: "A2 Básico", className: "bg-secondary/15 text-secondary border-secondary/40" },
  { label: "B1 Intermediário", className: "bg-secondary/20 text-secondary border-secondary/50" },
  { label: "B2 Avançado", className: "bg-secondary/25 text-secondary border-secondary/60" },
  { label: "C1 Fluente", className: "bg-secondary/30 text-secondary border-secondary/70" },
];

export default function TestSpanish() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      {/* Fundo animado */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 animate-[blob-move_12s_ease-in-out_infinite] rounded-full bg-secondary/20 blur-[100px]" />
      </div>

      <style>{`
        @keyframes blob-move {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          33% { transform: translate(-45%, -55%) scale(1.1); }
          66% { transform: translate(-55%, -45%) scale(0.95); }
        }
      `}</style>

      <AnimatedGridPattern
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
        duration={3}
        maxOpacity={0.1}
        numSquares={30}
      />

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-3xl text-center"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        <h1 className="mx-auto mt-6 max-w-2xl text-5xl font-bold leading-[1.1] tracking-[-0.04em] sm:text-6xl md:text-7xl/[1.05]">
          Descubra seu{" "}
          <span className="bg-gradient-to-r from-secondary via-secondary/70 to-secondary bg-clip-text text-transparent">
            nível de Espanhol
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground md:text-2xl/normal">
          Responda algumas perguntas rápidas e receba uma avaliação personalizada para começar na turma ideal para você.
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <Button
            className="rounded-full bg-secondary px-8 text-lg font-bold text-secondary-foreground shadow-xl shadow-secondary/20 transition-transform duration-200 hover:scale-105 hover:bg-secondary/90"
            render={<a href="/teste-de-nivel/espanhol" />}
            size="lg"
          >
            Testar meu nível
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 pb-8 sm:pb-10">
          {levels.map((level, index) => (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.85 }}
              key={level.label}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.08, ease: "easeOut" }}
            >
              <Badge
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-semibold transition-transform duration-200 hover:scale-105",
                  level.className
                )}
              >
                {level.label}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}