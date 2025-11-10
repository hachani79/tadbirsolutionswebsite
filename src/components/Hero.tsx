import logoImage from "@/assets/logo.jpeg";

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background pt-20 pb-12">
      <img 
        src={logoImage} 
        alt="Tadbir Solutions Logo" 
        className="absolute top-6 left-6 h-28 sm:h-32 md:h-40 w-auto z-20"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight tracking-tight">
            Empowering SMBs with Digital Solutions
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-0 max-w-3xl mx-auto font-medium">
            Tadbir Solutions is committed to creating a suite of lightweight, user-friendly apps for different sectors—always keeping affordability and simplicity at the core of everything we build.
          </p>
        </div>
      </div>
    </section>
  );
};
