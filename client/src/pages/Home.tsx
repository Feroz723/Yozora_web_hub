import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/* About section placeholder if needed, otherwise removed as per request to focus on Web Dev */}
        <section id="about" className="py-24 container mx-auto px-6 text-center">
             <h2 className="text-3xl font-heading font-bold mb-6">About Yozora</h2>
             <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
               Yozora Technologies is a premier web development company dedicated to building the digital infrastructure of tomorrow. 
               Inspired by the limitless possibilities of the night sky ("Yozora"), we aim to reach new heights in every project we undertake.
             </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}