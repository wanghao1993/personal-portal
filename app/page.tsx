import Hero from "@/components/hero";
import NowSection from "@/components/now-section";
import Projects from "@/components/projects";
import BlogPreview from "@/components/blog-preview";
import Footer from "@/components/footer";
import ParticlesBackground from "@/components/particles-background";
import Aegis from "aegis-web-sdk";

export default function Home() {
  new Aegis({
    id: "ok85Zsbp9Wna55pX45", // 上报 id
    reportApiSpeed: true, // 接口测速
    reportAssetSpeed: true, // 静态资源测速
    spa: true, // spa 应用页面跳转的时候开启 pv 计算
    hostUrl: "https://rumt-sg.com",
  });
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
