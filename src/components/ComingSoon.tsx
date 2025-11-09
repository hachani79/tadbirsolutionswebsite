import { Rocket } from "lucide-react";

export const ComingSoon = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-6">
            <Rocket className="h-10 w-10 text-primary" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Coming Soon
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Tadbir Solutions is committed to creating a suite of lightweight, user-friendly apps for different sectors—always keeping affordability and simplicity at the core of everything we build.
          </p>
        </div>
      </div>
    </section>
  );
};
