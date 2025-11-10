import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { OurJourney } from "@/components/OurJourney";
import { ComingSoon } from "@/components/ComingSoon";
import { AppScreenshots } from "@/components/AppScreenshots";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <OurJourney />
      <ComingSoon />
      <AppScreenshots />
      <Footer />
    </div>
  );
};

export default Index;
