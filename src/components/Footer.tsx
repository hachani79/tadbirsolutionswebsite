import { Instagram, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.jpeg";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-6">
          <a href="mailto:admin@tadbirsolutions.com">
            <Button size="lg" className="group text-base sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <p className="text-muted-foreground text-sm mt-3">
            We'll let you know when the app will be ready!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a 
              href="mailto:admin@tadbirsolutions.com"
              className="hover:text-primary transition-colors"
            >
              admin@tadbirsolutions.com
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/tadbir_solutions?igsh=bzR5bDkwajJ0NWxv&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2025 Tadbir Solutions
          </p>
        </div>
      </div>
      
      <div className="w-full bg-muted/40 border-t border-border py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <img 
            src={logoImage} 
            alt="Tadbir Solutions Logo" 
            className="h-16 sm:h-20 md:h-24 w-auto"
          />
        </div>
      </div>
    </footer>
  );
};
