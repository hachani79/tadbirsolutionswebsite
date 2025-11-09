import { Hero } from "@/components/Hero";
import { OurJourney } from "@/components/OurJourney";
import { AboutProthese } from "@/components/AboutProthese";
import { ComingSoon } from "@/components/ComingSoon";
import { AppScreenshots } from "@/components/AppScreenshots";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <OurJourney />
      <ComingSoon />
      <AboutProthese />
      <AppScreenshots />
      <Footer />
    </div>
  );
};

export default Index;
