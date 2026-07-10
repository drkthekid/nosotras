import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="mx-auto grid w-full max-w-screen-xl gap-16 lg:grid-cols-2">
        <div>
          <h1 className="mt-6 max-w-[17ch] text-4xl font-bold leading-[1.1] tracking-[-0.04em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
            <span className="block">Aprenda inglês e espanhol</span>
            <span className="block text-secondary">com quem realmente</span>
            <span className="block text-primary">está perto de você</span>
          </h1>

          <p className="mt-4 max-w-[60ch] text-lg text-foreground/60 sm:mt-6 sm:text-xl/normal">
            Aulas online ao vivo, turmas reduzidas de até 5 alunos, professores certificados e uma metodologia que trata cada aluno como único. Sua jornada no idioma começa aqui.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row">
            <Button className="rounded-full font-bold" size="lg">
              Agendar Aula Experimental
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              className="rounded-full border-secondary font-bold text-secondary hover:bg-secondary/10"
              size="lg"
              variant="outline"
            >
              Fazer teste de nível
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-center lg:justify-end">
          <div className="relative flex w-full max-w-[620px] items-center justify-center overflow-hidden p-2 sm:p-4 lg:-mt-4 lg:p-0">
            <img
              alt="John e Lola, mascotes da Nosotras, representando os cursos de Inglês e Espanhol"
              className="h-[340px] w-auto max-w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)] sm:h-[430px] lg:h-[500px]"
              src="/mascote/juntos.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}