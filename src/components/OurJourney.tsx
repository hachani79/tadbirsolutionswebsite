import { CheckCircle2 } from "lucide-react";

export const OurJourney = () => {
  const missions = [
    "Make technology simple and affordable.",
    "Build tools that solve real problems for real businesses.",
    "Empower SMBs to thrive in the digital age.",
  ];

  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
            Our Journey
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 text-center leading-relaxed">
            Tadbir Solutions was born from a simple belief: every small business deserves access to digitalization without complexity or high costs. We saw how many SMBs struggle with outdated processes and expensive tools, and we wanted to change that.
          </p>
          
          <div className="grid gap-6">
            {missions.map((mission, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-foreground">{mission}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
