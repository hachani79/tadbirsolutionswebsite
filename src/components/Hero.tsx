import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight tracking-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto font-medium">
            {t('hero.subtitle')}
          </p>
          
          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight">
              {t('hero.mission')}
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed">
              {t('hero.missionText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
