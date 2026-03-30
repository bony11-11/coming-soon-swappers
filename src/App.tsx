import { useEffect, useState } from 'react';
import { 
  Shield, 
  Sparkles
} from 'lucide-react';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Preload large hero image
    const img = new Image();
    img.src = '/images/hero-bg.png';
    img.onload = () => setImageLoaded(true);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-navy-deep text-cream relative overflow-x-hidden uppercase transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Cinematic Reveal Overlay */}
      <div className={`fixed inset-0 z-[100] bg-navy-deep transition-transform duration-[1500ms] cubic-bezier(0.22, 1, 0.36, 1) ${isLoaded ? 'translate-y-[-100%]' : 'translate-y-0'}`} />

      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Tricolor Top Bar */}
      <div className="tricolor-top-bar" />

      {/* Header */}
      <header className={`fixed top-6 left-0 right-0 z-50 px-6 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-display font-bold tracking-tight">
              Swappers<span className="text-red">.ai</span>
            </span>
          </div>
          
          {/* SC Balance Glass Pill */}
          <div className="glass-pill flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brass" />
            <span className="text-brass text-xs font-bold tracking-wider">SC</span>
            <span className="text-brass text-sm font-bold">2,500</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Optimized Background Image Loading */}
        <div className="absolute inset-0 bg-navy-deep">
          <img 
            src="/images/hero-bg.png" 
            alt="Premium UAE Environment" 
            className={`w-full h-full object-cover animate-slow-zoom transition-all duration-[2000ms] ${imageLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-xl'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/40 to-navy-deep" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 py-20 translate-y-[-5%] sm:translate-y-0">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 uppercase tracking-widest transition-all duration-1000 delay-[1200ms] text-shadow-premium ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              No cash<br /> No compromise<br />
              <span className="text-shimmer">Trade up Always</span>
            </h1>

            {/* Subheadline Section */}
            <div className={`mb-10 transition-all duration-1000 delay-[1400ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-brass text-[10px] sm:text-xs font-bold tracking-[0.6em] uppercase mb-4 block opacity-70">
                Introducing
              </span>
              <p className="text-sm sm:text-base text-white/90 max-w-lg mx-auto leading-relaxed uppercase tracking-[0.2em] font-medium">
                A new form of value is arriving in the UAE
              </p>
            </div>

            {/* Red CTA Styled "Coming Soon" Button */}
            <div className={`inline-flex items-center gap-2.5 px-8 py-3.5 bg-red text-white font-bold rounded-xl text-base transition-all duration-1000 delay-[1600ms] shadow-glow-red hover:scale-105 hover:bg-red-800 active:scale-95 cursor-pointer group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="tracking-widest">COMING SOON</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative py-6 sm:py-8 px-4 sm:px-6 bg-navy-dark border-t border-white/5 transition-opacity duration-1000 delay-[2000ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-lg font-display font-bold tracking-tight">
                Swappers<span className="text-red">.ai</span>
              </span>
            </div>

            {/* Copyright only */}
            <div className="text-xs text-gray-cool tracking-widest uppercase">
              © 2026 Swappers.ai
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
