import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export const AboutProthese = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-accent/50 to-background border-2 border-primary/20 rounded-3xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                About Tadbir Prothese
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Our first app, <span className="font-semibold text-primary">Tadbir Prothese</span>, is designed for dental prosthesis professionals, offering a practical, easy-to-use solution that streamlines workflows and enhances productivity.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
