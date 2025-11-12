import { Smartphone, Wallet, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Features = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Smartphone,
      titleKey: "features.simplify",
      descriptionKey: "features.simplifyDesc",
    },
    {
      icon: Wallet,
      titleKey: "features.affordable",
      descriptionKey: "features.affordableDesc",
    },
    {
      icon: TrendingUp,
      titleKey: "features.empower",
      descriptionKey: "features.empowerDesc",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
