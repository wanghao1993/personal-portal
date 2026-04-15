import Hero from "@/components/hero";
import NowSection from "@/components/now-section";
import Projects from "@/components/projects";
import BlogPreview from "@/components/blog-preview";
import Footer from "@/components/footer";
import ParticlesBackground from "@/components/particles-background";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticlesBackground />
      <div className="relative z-10">
        <Hero />
        <NowSection />
        <Projects />
        <BlogPreview />
        <Footer />
      </div>
    </main>
  );
}
