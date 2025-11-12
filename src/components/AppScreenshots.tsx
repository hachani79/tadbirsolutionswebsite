import appDentist from "@/assets/app-dentist.jpg";
import appDashboard from "@/assets/app-dashboard-new.jpg";
import appRendezVous from "@/assets/app-rendez-vous.jpg";
import appCommande from "@/assets/app-commande-new.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

export const AppScreenshots = () => {
  const { t } = useLanguage();
  const screenshots = [
    { image: appDentist, titleKey: "app.dentist", descriptionKey: "app.dentistDesc" },
    { image: appDashboard, titleKey: "app.dashboard", descriptionKey: "app.dashboardDesc" },
    { image: appRendezVous, titleKey: "app.appointments", descriptionKey: "app.appointmentsDesc" },
    { image: appCommande, titleKey: "app.orders", descriptionKey: "app.ordersDesc" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            {t('app.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            {t('app.subtitle')}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('app.description')}
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <div className="flex flex-col items-center group">
                  <div className="relative w-full max-w-[260px] aspect-[9/19.5] rounded-[2.5rem] bg-gradient-to-br from-secondary/10 to-primary/10 p-2 shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-secondary/80 rounded-b-2xl z-10" />
                    <div className="w-full h-full rounded-[2.2rem] bg-black overflow-hidden border-2 border-secondary/20 flex items-center justify-center p-1">
                      <img 
                        src={screenshot.image} 
                        alt={t(screenshot.titleKey)}
                        className="w-full h-full object-cover rounded-[2rem]"
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{t(screenshot.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(screenshot.descriptionKey)}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};
