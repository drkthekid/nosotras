import Footer from "@/components/features/footer";
import Spanish from "@/components/features/courses/spanish";
import Navbar from "@/components/features/navbar/navbar";
import TeamSpanish from "@/components/features/courses/spanish/teacher";
import TestSpanish from "@/components/features/courses/spanish/test";

export default function Espanhol() {
  return (
    <>
      <Navbar />
      <Spanish />
      <section className="bg-accent">

        <TeamSpanish />
      </section>
      <TestSpanish />
      <Footer />
    </>
  );
}
