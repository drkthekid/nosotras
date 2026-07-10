import { Courses } from "@/components/features/courses";
import Hero from "@/components/features/hero";
import Features from "@/components/features/metodoly";
import {ContactPage} from "@/components/features/contact";
import Navbar from "@/components/features/navbar/navbar";
import Image from "next/image";
import FAQ from "@/components/features/faq";
import Footer from "@/components/features/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="flex justify-center">
        <Courses />
      </section>
      <Features />
      <ContactPage/>
      <FAQ/>
      <Footer/>
    </>
  );
}
