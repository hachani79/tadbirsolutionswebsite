import appMain from "@/assets/app-main.jpg";
import appCommandes from "@/assets/app-commandes.jpg";
import appDashboard from "@/assets/app-dashboard.jpg";

export const AppScreenshots = () => {
  const screenshots = [
    { image: appMain, title: "Login Screen", description: "Secure authentication with biometric support" },
    { image: appCommandes, title: "Order Management", description: "Track and manage all Dentist orders" },
    { image: appDashboard, title: "Admin Dashboard", description: "Real-time insights and analytics" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            See Tadbir Prothese in Action
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Experience the simplicity and power of our first digital solution
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our first app, Tadbir Prothese, is designed specifically for dental labs to streamline Dentist order management. 
            From order tracking to delivery scheduling, everything you need is at your fingertips.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative w-full max-w-[260px] aspect-[9/19.5] rounded-[2.5rem] bg-gradient-to-br from-secondary/10 to-primary/10 p-2 shadow-2xl hover:shadow-glow transition-all duration-500 hover:scale-105 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-secondary/80 rounded-b-2xl z-10" />
                <div className="w-full h-full rounded-[2.2rem] bg-black overflow-hidden border-2 border-secondary/20 flex items-center justify-center p-1">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="w-full h-full object-contain rounded-[2rem]"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">{screenshot.title}</h3>
                <p className="text-sm text-muted-foreground">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
