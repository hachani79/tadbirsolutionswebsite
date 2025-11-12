import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={toggleLanguage}
        variant="outline"
        size="icon"
        className="bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all"
        aria-label="Toggle language"
      >
        <Languages className="h-5 w-5" />
        <span className="sr-only">{language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}</span>
      </Button>
      <span className="absolute -bottom-6 right-0 text-xs text-muted-foreground font-medium">
        {language === 'en' ? 'EN' : 'AR'}
      </span>
    </div>
  );
};
