import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import EveningCheckIn from "@/components/EveningCheckIn";
import WeeklyRecaps from "@/components/WeeklyRecaps";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import Faq from "@/components/Faq";
import DownloadCta from "@/components/DownloadCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <Features />
        <AppShowcase />
        <EveningCheckIn />
        <WeeklyRecaps />
        <Pricing />
        <SocialProof />
        <ProblemSolution />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
