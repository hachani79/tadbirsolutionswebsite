import { Hero } from "@/components/Hero";
import { ComingSoon } from "@/components/ComingSoon";
import { AppScreenshots } from "@/components/AppScreenshots";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ComingSoon />
      <AppScreenshots />
      <Footer />
    </div>
  );
};

export default Index;
