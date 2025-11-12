import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Hero
    'hero.title': 'Helping Small Businesses Go Digital',
    'hero.subtitle': 'Tadbir Solutions is committed to creating a suite of lightweight, user-friendly apps for different sectors—always keeping affordability and simplicity at the core of everything we build.',
    'hero.mission': 'Our Mission',
    'hero.missionText': 'Tadbir Solutions was born from a simple belief: every small business deserves access to digitalization without complexity or high costs. We saw how many local businesses struggle with outdated processes and expensive tools, and we wanted to change that.',
    
    // Features
    'features.title': 'What We Stand For',
    'features.simplify': 'Simplify Technology',
    'features.simplifyDesc': 'Build intuitive tools that make digital adoption effortless for local businesses, no matter their size or technical expertise.',
    'features.affordable': 'Affordable Solutions',
    'features.affordableDesc': 'Deliver cost-effective apps helping local businesses grow without heavy investments.',
    'features.empower': 'Empower Local Businesses',
    'features.empowerDesc': 'Enable local businesses to thrive in the digital age with solutions designed to solve real operational challenges.',
    
    // Coming Soon
    'coming.title': 'Coming Soon',
    
    // App Screenshots
    'app.title': 'Tadbir Prothese',
    'app.subtitle': 'Experience the simplicity and power of our first digital solution',
    'app.description': 'Our first app, Tadbir Prothese, is designed specifically for dental labs to streamline Dentist order management. From order tracking to delivery scheduling, everything you need is at your fingertips.',
    'app.dentist': 'Dentist Management',
    'app.dentistDesc': 'Manage relationships and contacts with dentists',
    'app.dashboard': 'Dashboard',
    'app.dashboardDesc': 'Real-time insights and analytics',
    'app.appointments': 'Appointments',
    'app.appointmentsDesc': 'Schedule and track appointments',
    'app.orders': 'Create Orders',
    'app.ordersDesc': 'Easily create and manage new orders',
    
    // Footer
    'footer.subscribe': 'Subscribe',
    'footer.subscribeText': "We'll let you know when the app will be ready!",
    'footer.emailPlaceholder': 'Enter your email',
    'footer.successMessage': 'Thank you for subscribing!',
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    // Hero
    'hero.title': 'مساعدة الشركات الصغيرة على التحول الرقمي',
    'hero.subtitle': 'تلتزم حلول تدبير بإنشاء مجموعة من التطبيقات الخفيفة وسهلة الاستخدام لقطاعات مختلفة - مع الحفاظ دائمًا على القدرة على تحمل التكاليف والبساطة في صميم كل ما نبنيه.',
    'hero.mission': 'مهمتنا',
    'hero.missionText': 'ولدت حلول تدبير من إيمان بسيط: كل شركة صغيرة تستحق الوصول إلى الرقمنة دون تعقيد أو تكاليف عالية. لقد رأينا كيف تكافح العديد من الشركات المحلية مع العمليات القديمة والأدوات باهظة الثمن، وأردنا تغيير ذلك.',
    
    // Features
    'features.title': 'ما نؤمن به',
    'features.simplify': 'تبسيط التكنولوجيا',
    'features.simplifyDesc': 'بناء أدوات بديهية تجعل التحول الرقمي سهلاً للشركات المحلية، بغض النظر عن حجمها أو خبرتها التقنية.',
    'features.affordable': 'حلول ميسورة التكلفة',
    'features.affordableDesc': 'تقديم تطبيقات فعالة من حيث التكلفة تساعد الشركات المحلية على النمو دون استثمارات كبيرة.',
    'features.empower': 'تمكين الشركات المحلية',
    'features.empowerDesc': 'تمكين الشركات المحلية من الازدهار في العصر الرقمي بحلول مصممة لحل التحديات التشغيلية الحقيقية.',
    
    // Coming Soon
    'coming.title': 'قريبًا',
    
    // App Screenshots
    'app.title': 'تدبير بروتيز',
    'app.subtitle': 'اختبر بساطة وقوة حلنا الرقمي الأول',
    'app.description': 'تطبيقنا الأول، تدبير بروتيز، مصمم خصيصًا لمختبرات طب الأسنان لتبسيط إدارة طلبات أطباء الأسنان. من تتبع الطلبات إلى جدولة التسليم، كل ما تحتاجه في متناول يدك.',
    'app.dentist': 'إدارة أطباء الأسنان',
    'app.dentistDesc': 'إدارة العلاقات والاتصالات مع أطباء الأسنان',
    'app.dashboard': 'لوحة التحكم',
    'app.dashboardDesc': 'رؤى وتحليلات في الوقت الفعلي',
    'app.appointments': 'المواعيد',
    'app.appointmentsDesc': 'جدولة وتتبع المواعيد',
    'app.orders': 'إنشاء الطلبات',
    'app.ordersDesc': 'إنشاء وإدارة الطلبات الجديدة بسهولة',
    
    // Footer
    'footer.subscribe': 'اشترك',
    'footer.subscribeText': 'سنعلمك عندما يكون التطبيق جاهزًا!',
    'footer.emailPlaceholder': 'أدخل بريدك الإلكتروني',
    'footer.successMessage': 'شكرا لك على الاشتراك!',
    'footer.rights': 'كل الحقوق محفوظة.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set document direction and lang attribute
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
