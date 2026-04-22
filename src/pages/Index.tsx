import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
