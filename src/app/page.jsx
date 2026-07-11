import { Courses } from "@/components/features/courses";
import Hero from "@/components/features/hero";
import Features from "@/components/features/metodology";
import { ContactPage } from "@/components/features/contact";
import Navbar from "@/components/features/navbar/navbar";
import FAQ from "@/components/features/faq";
import Footer from "@/components/features/footer";
import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Reveal>
        <section className="flex justify-center">
          <Courses />
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <Features />
      </Reveal>

      <Reveal delay={0.1}>
        <ContactPage />
      </Reveal>

      <Reveal delay={0.1}>
        <FAQ />
      </Reveal>

      <Reveal delay={0.1} y={20}>
        <Footer />
      </Reveal>
    </>
  );
}