import { Courses } from "@/components/features/courses";
import Hero from "@/components/features/hero";
import Features from "@/components/features/metodology";
import { ContactPage } from "@/components/features/contact";
import Navbar from "@/components/features/navbar/navbar";
import FAQ from "@/components/features/faq";
import Footer from "@/components/features/footer";
import { Reveal } from "@/components/ui/reveal";
import TestIdiom from "@/components/features/test";
import { ScrollToHash } from "@/components/ui/scroll-to-hash";

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Hero />

      <Reveal>
        <section className="flex justify-center">
          <Courses />
        </section>
      </Reveal>

      <Reveal delay={0.01}>
        <Features />
      </Reveal>

   <Reveal delay={0.01}>
        <TestIdiom />
      </Reveal>

      <Reveal delay={0.01}>
        <ContactPage />
      </Reveal>

    <Reveal delay={0.01}>
        <FAQ />
      </Reveal>

      <Reveal delay={0.1} y={20}>
        <Footer />
      </Reveal>
    </>
  );
}