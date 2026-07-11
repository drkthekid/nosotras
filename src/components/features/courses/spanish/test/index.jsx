import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function TestSpanish() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <AnimatedGridPattern
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
        duration={3}
        maxOpacity={0.1}
        numSquares={30} />
      <div className="relative z-10 max-w-3xl text-center">
       
        <h1
          className="mx-auto mt-6 max-w-xl font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem] md:text-6xl/[1.2]">
          Descubra seu nível antes de começar
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-muted-foreground text-xl md:text-2xl/normal">
          Não sabe qual é o seu nível? Faça nosso teste rápido e receba uma avaliação personalizada para começar na turma ideal para você.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button className="rounded-full" size="lg">
            Testar meu nível <ArrowUpRight className="h-5! w-5!" />
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 pb-8 sm:pb-10">
          <Badge
            className="rounded-full border-border py-1"
            variant="secondary"
            render={<Link href="#" />}>A1 Iniciante</Badge>
          <Badge
            className="rounded-full border-border py-1"
            variant="secondary"
            render={<Link href="#" />}>A2 Básico </Badge>
          <Badge
            className="rounded-full border-border py-1"
            variant="secondary"
            render={<Link href="#" />}>B1 Intermediário </Badge>
          <Badge
            className="rounded-full border-border py-1"
            variant="secondary"
            render={<Link href="#" />}>B2 Avançado </Badge>
          <Badge
            className="rounded-full border-border py-1"
            variant="secondary"
            render={<Link href="#" />}>C1 Fluente </Badge>
        </div>
      </div>
    </div>
  );
}
