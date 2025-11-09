export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Empowering SMBs with Digital Solutions
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Launching Soon: Tadbir Prothese – Our first step toward easy digitalization
          </p>
        </div>
      </div>
    </section>
  );
};
