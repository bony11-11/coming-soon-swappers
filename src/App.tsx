import { useEffect } from 'react';
import { 
  Shield, 
  Sparkles
} from 'lucide-react';
import './App.css';

function App() {
  useEffect(() => {
    // Component mounted
  }, []);

  return (
    <div className="min-h-screen bg-navy-deep text-cream relative overflow-x-hidden uppercase">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Tricolor Top Bar */}
      <div className="tricolor-top-bar" />

      {/* Header */}
      <header className="fixed top-6 left-0 right-0 z-50 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center animate-fade-in">
            <span className="text-xl font-display font-bold tracking-tight">
              Swappers<span className="text-red">.ai</span>
            </span>
          </div>
          
          {/* SC Balance Glass Pill */}
          <div className="glass-pill flex items-center gap-2 animate-fade-in delay-300">
            <Sparkles className="w-3.5 h-3.5 text-brass" />
            <span className="text-brass text-xs font-bold tracking-wider">SC</span>
            <span className="text-brass text-sm font-bold">2,500</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background Image with Slow Zoom */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Premium UAE Environment" 
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/40 to-navy-deep" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 py-20 translate-y-[-5%] sm:translate-y-0">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 uppercase tracking-widest animate-reveal-up opacity-0 delay-100 text-shadow-premium">
              No cash<br /> No compromise<br />
              <span className="text-shimmer">Trade up Always</span>
            </h1>

            {/* Subheadline Section */}
            <div className="mb-10 animate-reveal-up opacity-0 delay-500">
              <span className="text-brass text-[10px] sm:text-xs font-bold tracking-[0.6em] uppercase mb-4 block opacity-70">
                Introducing
              </span>
              <p className="text-sm sm:text-base text-white/90 max-w-lg mx-auto leading-relaxed uppercase tracking-[0.2em] font-medium">
                A new form of value is arriving in the UAE
              </p>
            </div>

            {/* Red CTA Styled "Coming Soon" Button */}
            <div className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-red text-white font-bold rounded-xl text-base transition-all duration-500 shadow-glow-red hover:scale-105 hover:bg-red-800 active:scale-95 animate-reveal-up opacity-0 delay-700 cursor-pointer group">
              <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="tracking-widest">COMING SOON</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-6 sm:py-8 px-4 sm:px-6 bg-navy-dark border-t border-white/5">
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
