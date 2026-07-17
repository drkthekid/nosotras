"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TestIdiom() {
  return (
    <div
      className="relative flex min-h-screen scroll-mt-20 items-center justify-center overflow-hidden px-6"
      id="teste-de-nivel"
    >
      <AnimatedGridPattern
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
        duration={3}
        maxOpacity={0.1}
        numSquares={30}
      />
      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="mx-auto mt-6 max-w-xl text-4xl font-medium tracking-[-0.04em] sm:text-[2.75rem] md:text-6xl/[1.2]">
          Descubra seu nível antes de começar
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground md:text-2xl/normal">
          Não sabe qual é o seu nível? Faça nosso teste rápido e receba uma avaliação personalizada para começar na turma ideal para você.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button className="rounded-full" size="lg" />}>
              Testar meu nível
              <ChevronDown className="ml-1 h-4! w-4!" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="min-w-56">
              <DropdownMenuItem
                className="cursor-pointer gap-2 py-2.5"
                render={<Link href="/teste-de-nivel/ingles" />}
              >
                🇺🇸 Testar meu Inglês
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer gap-2 py-2.5"
                render={<Link href="/teste-de-nivel/espanhol" />}
              >
                🇪🇸 Testar meu Espanhol
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 pb-8 sm:pb-10">
          <Badge className="rounded-full border-border py-1" render={<Link href="#" />} variant="secondary">
            A1 Iniciante
          </Badge>
          <Badge className="rounded-full border-border py-1" render={<Link href="#" />} variant="secondary">
            A2 Básico
          </Badge>
          <Badge className="rounded-full border-border py-1" render={<Link href="#" />} variant="secondary">
            B1 Intermediário
          </Badge>
          <Badge className="rounded-full border-border py-1" render={<Link href="#" />} variant="secondary">
            B2 Avançado
          </Badge>
          <Badge className="rounded-full border-border py-1" render={<Link href="#" />} variant="secondary">
            C1 Fluente
          </Badge>
        </div>
      </div>
    </div>
  );
}