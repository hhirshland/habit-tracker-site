import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import SocialProof from "@/components/SocialProof";
import DownloadCta from "@/components/DownloadCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AppShowcase />
        <SocialProof />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
