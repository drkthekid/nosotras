import Footer from "@/components/features/footer";
import English from "@/components/features/courses/english";
import Navbar from "@/components/features/navbar/navbar";
import Team from "@/components/features/courses/english/teacher";
import TestEnglish from "@/components/features/courses/english/test";

export default function Ingles() {
  return (
    <>
    <Navbar/>
     <English/>
     <Team/>
     <TestEnglish/>
     <Footer/>
    </>
  );
}
