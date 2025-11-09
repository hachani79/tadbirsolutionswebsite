import { Smartphone } from "lucide-react";

export const AppScreenshots = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            See Tadbir Prothese in Action
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the simplicity and power of our first digital solution
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative w-full max-w-[280px] aspect-[9/19] rounded-[3rem] bg-gradient-to-br from-primary/20 to-secondary/20 p-3 shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-background/80 rounded-b-3xl z-10" />
                <div className="w-full h-full rounded-[2.5rem] bg-muted/50 flex items-center justify-center border-4 border-background/50">
                  <div className="text-center p-6">
                    <Smartphone className="h-16 w-16 mx-auto mb-4 text-primary/40" />
                    <p className="text-sm text-muted-foreground font-medium">
                      Screenshot {index}
                    </p>
                    <p className="text-xs text-muted-foreground/60 mt-2">
                      Upload your app screen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
