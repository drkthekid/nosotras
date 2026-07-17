import Navbar from "@/components/features/navbar/navbar";
import Footer from "@/components/features/footer";
import { Reveal } from "@/components/ui/reveal";
import { spanishQuestions } from "@/lib/quiz.data";
import { LevelQuiz } from "@/components/features/quiz/index"

export default function TesteDeNivelIngles() {
    return (
        <>
            <Navbar />
            <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
                        Teste de nível
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                        Descubra seu nível de Espanhol
                    </h1>
                    <p className="mt-3 max-w-md text-foreground/60">
                        10 perguntas rápidas para entender onde você está e qual turma combina com você.
                    </p>
                </div>

                <LevelQuiz
                    accentClass="text-secondary"
                    language="Espanhol"
                    mascot={{ src: "/mascote/lola.png", alt: "Mascote Lola" }}
                    questions={spanishQuestions}
                />
            </div>

            <Reveal delay={0.1} y={20}>
                <Footer />
            </Reveal>
        </>
    );
}