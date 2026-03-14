import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CustomBusinessSoftwarePage from './pages/CustomBusinessSoftwarePage';
import WorkflowAutomationPage from './pages/WorkflowAutomationPage';
import ERPSoftwarePage from './pages/ERPSoftwarePage';
import InventoryManagementPage from './pages/InventoryManagementPage';
import BusinessProcessAutomationPage from './pages/BusinessProcessAutomationPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import SEOPage from './pages/SEOPage';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  FileText,
  ShoppingCart,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Loader2,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import logo from './assets/logo.png';

// --- UTILITIES & SHARED COMPONENTS ---

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

    * { box-sizing: border-box; }

    @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
    @keyframes floatReverse { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(20px) rotate(-3deg); } }
    @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes barGrow { 0% { transform: scaleY(0.5); } 50% { transform: scaleY(1); } 100% { transform: scaleY(0.5); } }
    @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes spinReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
    @keyframes pulseGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
    @keyframes drawLine { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
    @keyframes countUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes fadeInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }

    .glass-panel { background: rgba(10, 10, 10, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(212, 175, 55, 0.1); }
    .grain-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E"); pointer-events: none; z-index: 9999; opacity: 0.4; }
    .text-glow { text-shadow: 0 0 30px rgba(212, 175, 55, 0.3); }
    .gold-shimmer { background: linear-gradient(90deg, #D4AF37 0%, #FBE8A6 40%, #D4AF37 60%, #B49220 100%); background-size: 200% auto; animation: shimmer 4s linear infinite; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

    .geo-ring { animation: spinSlow 20s linear infinite; }
    .geo-ring-reverse { animation: spinReverse 15s linear infinite; }
    .float-1 { animation: float 6s ease-in-out infinite; }
    .float-2 { animation: floatReverse 8s ease-in-out infinite; }
    .float-3 { animation: float 10s ease-in-out infinite 2s; }

    .stat-animate { animation: countUp 0.8s ease forwards; }

    .corner-accent::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 60px; height: 60px;
      border-top: 1px solid rgba(212,175,55,0.5);
      border-left: 1px solid rgba(212,175,55,0.5);
    }
    .corner-accent::after {
      content: '';
      position: absolute;
      bottom: 0; right: 0;
      width: 60px; height: 60px;
      border-bottom: 1px solid rgba(212,175,55,0.5);
      border-right: 1px solid rgba(212,175,55,0.5);
    }
  `}</style>
);

const BentoCard = ({ icon, title, desc, onClick, className }: any) => (
  <div
    onClick={onClick}
    className={`bg-[#0A0A0A] rounded-3xl p-8 border border-[#222] hover:border-[#D4AF37]/50 transition-all group relative overflow-hidden flex flex-col justify-between cursor-pointer ${className}`}
  >
    <div className="absolute right-0 top-0 w-24 h-24 bg-[#D4AF37] opacity-0 group-hover:opacity-10 blur-[40px] transition-opacity duration-500" />
    <div className="w-10 h-10 rounded-lg bg-[#111] border border-[#333] flex items-center justify-center text-zinc-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37] transition-all">
      {icon}
    </div>
    <div className="relative z-10 mt-6">
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </div>
    <div className="mt-4 flex items-center gap-2 text-[#D4AF37] text-xs font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
      LEARN MORE <ArrowRight size={12} />
    </div>
  </div>
);

// --- DECORATIVE SIDE ELEMENTS ---
const LeftSideOrnament = () => (
  <div className="absolute left-0 top-0 h-full w-[120px] pointer-events-none overflow-hidden hidden xl:block">
    {/* Vertical line */}
    <div className="absolute left-10 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent" />

    {/* Rotating geometric ring */}
    <div className="absolute left-4 top-[30%] w-[80px] h-[80px]">
      <svg viewBox="0 0 80 80" className="geo-ring opacity-20">
        <circle cx="40" cy="40" r="35" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="4 8" />
        <circle cx="40" cy="40" r="25" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
        <line x1="5" y1="40" x2="75" y2="40" stroke="#D4AF37" strokeWidth="0.3" />
        <line x1="40" y1="5" x2="40" y2="75" stroke="#D4AF37" strokeWidth="0.3" />
      </svg>
    </div>

    {/* Floating diamond */}
    <div className="absolute left-8 top-[55%] float-2 opacity-30">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <polygon points="12,0 24,12 12,24 0,12" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
        <polygon points="12,4 20,12 12,20 4,12" fill="none" stroke="#D4AF37" strokeWidth="0.4" />
      </svg>
    </div>

    {/* Vertical text */}
    <div className="absolute left-2 top-1/2 -translate-y-1/2" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
      <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em] uppercase">Est. 2025</span>
    </div>

    {/* Small dots pattern */}
    <div className="absolute left-6 top-[70%] grid grid-cols-3 gap-2 opacity-20">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-1 h-1 rounded-full bg-[#D4AF37]" style={{ opacity: Math.random() > 0.5 ? 1 : 0.3 }} />
      ))}
    </div>
  </div>
);

const RightSideOrnament = () => (
  <div className="absolute right-0 top-0 h-full w-[120px] pointer-events-none overflow-hidden hidden xl:block">
    {/* Vertical line */}
    <div className="absolute right-10 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent" />



    {/* Rotating ring */}
    <div className="absolute right-3 top-[55%] w-[90px] h-[90px]">
      <svg viewBox="0 0 90 90" className="geo-ring-reverse opacity-15">
        <circle cx="45" cy="45" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2 6" />
        <circle cx="45" cy="45" r="28" fill="none" stroke="#D4AF37" strokeWidth="0.3" strokeDasharray="8 4" />
        <polygon points="45,15 75,45 45,75 15,45" fill="none" stroke="#D4AF37" strokeWidth="0.4" />
      </svg>
    </div>

    {/* Floating cross/plus */}
    <div className="absolute right-10 top-[75%] float-3 opacity-25">
      <svg width="20" height="20" viewBox="0 0 20 20">
        <line x1="10" y1="0" x2="10" y2="20" stroke="#D4AF37" strokeWidth="0.8" />
        <line x1="0" y1="10" x2="20" y2="10" stroke="#D4AF37" strokeWidth="0.8" />
      </svg>
    </div>
  </div>
);

// --- HERO BACKGROUND GRID ---
const HeroGrid = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Perspective grid lines - horizontal */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(12)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={`${(i + 1) * 8}%`} x2="100%" y2={`${(i + 1) * 8}%`} stroke="url(#gridFade)" strokeWidth="0.5" />
      ))}
      {[...Array(16)].map((_, i) => (
        <line key={`v${i}`} x1={`${(i + 1) * 6.25}%`} y1="0" x2={`${(i + 1) * 6.25}%`} y2="100%" stroke="url(#gridFade)" strokeWidth="0.5" />
      ))}
    </svg>

    {/* Corner decorative brackets */}
    <svg className="absolute top-6 left-6 w-20 h-20 opacity-20" viewBox="0 0 80 80">
      <path d="M0,30 L0,0 L30,0" fill="none" stroke="#D4AF37" strokeWidth="1" />
    </svg>
    <svg className="absolute top-6 right-6 w-20 h-20 opacity-20" viewBox="0 0 80 80">
      <path d="M80,30 L80,0 L50,0" fill="none" stroke="#D4AF37" strokeWidth="1" />
    </svg>
    <svg className="absolute bottom-6 left-6 w-20 h-20 opacity-20" viewBox="0 0 80 80">
      <path d="M0,50 L0,80 L30,80" fill="none" stroke="#D4AF37" strokeWidth="1" />
    </svg>
    <svg className="absolute bottom-6 right-6 w-20 h-20 opacity-20" viewBox="0 0 80 80">
      <path d="M80,50 L80,80 L50,80" fill="none" stroke="#D4AF37" strokeWidth="1" />
    </svg>
  </div>
);

// --- FLOATING PARTICLES ---
const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[
      { left: '8%', top: '20%', size: 3, delay: 0, duration: 7 },
      { left: '15%', top: '65%', size: 2, delay: 1.5, duration: 9 },
      { left: '85%', top: '25%', size: 4, delay: 0.5, duration: 6 },
      { left: '90%', top: '70%', size: 2, delay: 2, duration: 8 },
      { left: '5%', top: '45%', size: 2, delay: 3, duration: 11 },
      { left: '93%', top: '50%', size: 3, delay: 1, duration: 7.5 },
    ].map((p, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-[#D4AF37]"
        style={{
          left: p.left, top: p.top,
          width: p.size, height: p.size,
          opacity: 0.25,
          animation: `float ${p.duration}s ease-in-out infinite ${p.delay}s`
        }}
      />
    ))}
  </div>
);

// --- LAYOUT ---
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [requirements, setRequirements] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setFormStatus('submitting');
    try {
      const response = await fetch("https://formspree.io/f/mwpjkrla", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, requirements })
      });
      if (response.ok) {
        setFormStatus('success');
        setEmail('');
        setRequirements('');
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        alert("There was a problem submitting the form. Please try again.");
        setFormStatus('idle');
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
      setFormStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden relative flex flex-col">
      <GlobalStyles />
      <div className="grain-overlay"></div>

      {/* Background Ambient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#D4AF37] opacity-[0.06] blur-[150px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-[#D4AF37] opacity-[0.04] blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-[#D4AF37] opacity-[0.02] blur-[180px]" />
      </div>

      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-[#D4AF37]/10 py-4 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 relative group">
            <div className="absolute inset-0 bg-[#D4AF37] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="h-14 overflow-hidden flex items-center relative z-10">
              <img src={logo} alt="BusinessLogics" className="h-20 w-auto object-cover object-center max-w-none transition-transform duration-500 group-hover:scale-110" style={{ transform: 'scale(1.2)' }} />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Services', path: '/services' },
              { label: 'Work', path: '/work' },
              { label: 'About', path: '/about' }
            ].map((item) => (
              <Link key={item.label} to={item.path} className="relative text-sm font-medium text-zinc-400 hover:text-white transition-colors group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="ml-4 px-6 py-2.5 bg-transparent border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Start Project
            </button>
          </nav>

          <button className="md:hidden text-white z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-3xl z-40 md:hidden">
            <nav className="absolute top-28 left-0 right-0 px-6 flex flex-col items-center gap-8">
              {[
                { label: 'Services', path: '/services' },
                { label: 'Work', path: '/work' },
                { label: 'About', path: '/about' }
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl text-white font-bold hover:text-[#D4AF37]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="absolute top-[22rem] left-0 right-0 px-6 flex justify-center">
              <button
                onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100); }}
                className="px-8 py-3 bg-[#D4AF37] text-black font-bold rounded-full text-sm"
              >
                Start Project
              </button>
            </div>
          </div>
        )}
      </header>

      <main className={`pt-20 flex-grow transition-all duration-200 ${isMobileMenuOpen ? 'blur-xl pointer-events-none select-none' : ''}`}>
        {children}
      </main>

      {/* Footer / CTA */}
      <section className={`pt-20 pb-10 px-6 mt-auto transition-all duration-200 ${isMobileMenuOpen ? 'blur-xl pointer-events-none select-none' : ''}`}>
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-b from-[#0A0A0A] to-black border border-[#D4AF37]/20 rounded-[3rem] p-10 md:p-24 overflow-hidden text-center corner-accent">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D4AF37] opacity-10 blur-[100px]" />

            {/* Decorative lines in footer */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-30">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <svg width="12" height="12" viewBox="0 0 12 12"><polygon points="6,0 12,6 6,12 0,6" fill="#D4AF37" /></svg>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>

            <h2 className="relative z-10 text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Ready to <span className="italic font-serif text-[#D4AF37]">upgrade?</span>
            </h2>
            <p className="relative z-10 text-zinc-400 text-xl mb-12 max-w-xl mx-auto">
              Stop using spreadsheets. Let's build something that actually works for your scale.
            </p>

            <form className="relative z-10 max-w-2xl mx-auto space-y-4" onSubmit={handleFormSubmit}>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-zinc-800 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" disabled={formStatus === 'success'} className="relative w-full bg-black text-white p-4 rounded-lg border border-zinc-800 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50" />
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-zinc-800 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                <textarea name="requirements" value={requirements} onChange={(e) => setRequirements(e.target.value)} placeholder="Tell us about your requirements (optional)" disabled={formStatus === 'success'} rows={3} className="relative w-full bg-black text-white p-4 rounded-lg border border-zinc-800 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50 resize-none" />
              </div>
              <button type="submit" disabled={formStatus !== 'idle'} className={`w-full py-4 font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${formStatus === 'success' ? 'bg-emerald-500 text-black' : 'bg-white text-black hover:bg-[#D4AF37]'}`}>
                {formStatus === 'idle' && <>BOOK DISCOVERY CALL <ArrowRight size={18} /></>}
                {formStatus === 'submitting' && <Loader2 className="animate-spin" />}
                {formStatus === 'success' && <>REQUEST RECEIVED <CheckCircle2 size={18} /></>}
              </button>
            </form>

            <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src={logo} className="h-8 grayscale hover:grayscale-0 transition-all" alt="logo" />
              </div>
              <div className="flex gap-6 text-sm text-zinc-500 font-mono">
                <a href="https://www.linkedin.com/company/businesslogicss" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors uppercase">LinkedIn</a>
              </div>
              <div className="text-zinc-600 text-xs">© {new Date().getFullYear()} BUSINESSLOGICS.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- HOMEPAGE ---
const HomePage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 20 - 10, y: (e.clientY / window.innerHeight) * 20 - 10 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  // Parallax Logic
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { mass: 0.1, stiffness: 100, damping: 20 });

  // Parallax Transforms
  const yBgText = useTransform(smoothScrollY, [0, 1000], [0, 400]);
  const yHeroContent = useTransform(smoothScrollY, [0, 1000], [0, 150]);
  const opacityHero = useTransform(smoothScrollY, [0, 500], [1, 0]);

  const mockupY = useTransform(smoothScrollY, [0, 1000], [0, -300]);
  const mockupRotateX = useTransform(smoothScrollY, [0, 1000], [10, 30]);
  const mockupRotateY = useTransform(smoothScrollY, [0, 1000], [-12, -25]);
  const mockupScale = useTransform(smoothScrollY, [0, 800], [1, 1.1]);

  const yMarquee = useTransform(smoothScrollY, [0, 1500], [0, -100]);
  const yWhyUs = useTransform(smoothScrollY, [500, 1500], [150, -50]);
  const yBento = useTransform(smoothScrollY, [1000, 2500], [200, 0]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-10 pb-20 px-6 overflow-hidden">
        {/* Background grid */}
        <HeroGrid />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Side ornaments */}
        <LeftSideOrnament />
        <RightSideOrnament />

        {/* Large decorative background text */}
        <motion.div
          style={{ y: yBgText }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        >
          <span className="text-[20vw] font-bold text-white/[0.015] leading-none select-none whitespace-nowrap" style={{ fontFamily: 'serif' }}>BL</span>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          {/* LEFT: Text */}
          <motion.div
            style={{ y: yHeroContent, opacity: opacityHero }}
            className="relative z-20"
          >
            <div style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-mono mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                </span>
                SYSTEMS ARCHITECTURE V2.0
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8">
                LOGIC <br /> MEETS <br />
                <span className="gold-shimmer italic font-serif pr-4">Luxury.</span>
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed max-w-md mb-10 border-l-2 border-[#D4AF37]/30 pl-6">
                We don't just build software. We engineer digital empires. Bespoke dashboards and CRM solutions.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mb-12">
                <button onClick={scrollToContact} className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-[#D4AF37] text-black font-bold text-base sm:text-lg rounded-none overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                  <div className="absolute inset-0 w-full h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-2">ENQUIRE NOW <ArrowRight className="w-5 h-5" /></span>
                </button>
                <button onClick={() => navigate('/work')} className="px-6 py-3 sm:px-8 sm:py-4 border border-zinc-800 hover:border-[#D4AF37] text-zinc-400 hover:text-white transition-colors font-mono text-sm">
                  VIEW WORK
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: 3D Mockup */}
          <div className="relative perspective-[2000px]">
            {/* Glow ring behind mockup */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[350px] h-[350px] rounded-full border border-[#D4AF37]/10 animate-[spinSlow_25s_linear_infinite]" />
              <div className="absolute w-[280px] h-[280px] rounded-full border border-[#D4AF37]/5 animate-[spinReverse_18s_linear_infinite]" />
            </div>

            <motion.div
              style={{
                rotateX: mockupRotateX,
                rotateY: mockupRotateY,
                y: mockupY,
                scale: mockupScale
              }}
              className="relative transition-shadow duration-1000 ease-out preserve-3d"
            >
              <div style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }} className="w-full h-full">
                <div className="absolute -inset-10 bg-gradient-to-tr from-[#D4AF37]/20 to-purple-900/0 rounded-3xl blur-3xl -z-10" />
                <div className="glass-panel rounded-2xl p-1 border border-[#D4AF37]/20 shadow-2xl shadow-black">
                  <div className="bg-[#0a0a0a] rounded-xl overflow-hidden h-[400px] relative flex flex-col">
                    <div className="h-10 border-b border-zinc-800 bg-black/50 flex items-center justify-between px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-emerald-500">SYSTEM ONLINE</span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col gap-4">
                      <div className="flex gap-4">
                        <div className="flex-1 bg-[#111] border border-zinc-800 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-zinc-500 text-xs font-mono">TOTAL REVENUE</span>
                            <TrendingUp size={14} className="text-[#D4AF37]" />
                          </div>
                          <div className="text-2xl font-bold text-white">₹ XXXXX</div>
                          <div className="text-emerald-500 text-xs mt-1">+18% this month</div>
                        </div>
                        <div className="flex-1 bg-[#111] border border-zinc-800 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-zinc-500 text-xs font-mono">ACTIVE USERS</span>
                            <Users size={14} className="text-zinc-400" />
                          </div>
                          <div className="text-2xl font-bold text-white">1,204</div>
                          <div className="text-zinc-500 text-xs mt-1">Currently active</div>
                        </div>
                      </div>

                      <div className="flex-1 bg-[#111] border border-zinc-800 rounded-lg p-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/5 to-transparent"></div>
                        <div className="flex items-end justify-between h-full gap-2 px-2 pb-2">
                          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                            <div key={i} className="w-full bg-[#D4AF37] opacity-80 rounded-t-sm" style={{ height: `${h}%`, animation: `barGrow 3s infinite ease-in-out ${i * 0.1}s` }}></div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-zinc-500 px-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck size={12} className="text-emerald-500" />
                          <span>Security Protocols Active</span>
                        </div>
                        <div className="font-mono">V 2.4.0</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-500 to-transparent animate-[float_2s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* Marquee */}
      < motion.div style={{ y: yMarquee }
      } className="py-8 border-y border-[#D4AF37]/10 bg-black/50 overflow-hidden relative z-20" >
        <div className="flex w-[200%] animate-[scroll_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex w-full justify-around items-center text-zinc-600 font-bold text-2xl uppercase tracking-widest px-10">
              <span>Logistics</span><span>•</span><span>Manufacturing</span><span>•</span><span>Retail</span><span>•</span>
              <span className="text-[#D4AF37]">BusinessLogics</span><span>•</span>
              <span>Fintech</span><span>•</span><span>Healthcare</span><span>•</span>
            </div>
          ))}
        </div>
      </motion.div >

      {/* WHY US — NEW SECTION */}
      < section className="py-24 px-6 relative overflow-hidden bg-[#050505]" >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#D4AF37] opacity-[0.03] blur-[120px]" />
        </div>
        <motion.div style={{ y: yWhyUs }} className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// WHY BUSINESSLOGICS</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Built for scale,<br /><span className="italic font-serif text-zinc-400">designed for elegance.</span>
              </h3>
              <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg">
                Every system we build is engineered with precision. We don't sell templates — we listen, architect, and deliver custom solutions that grow with your business.
              </p>
              <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="flex items-center gap-2 text-[#D4AF37] font-mono text-sm hover:gap-4 transition-all">
                START A PROJECT <ArrowRight size={14} />
              </button>
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { num: '01', title: 'Zero Templates', desc: 'Every line of code is written for your specific business logic.' },
                { num: '02', title: 'Full Ownership', desc: 'You own 100% of the source code. No vendor lock-in.' },
                { num: '03', title: 'Ongoing Support', desc: 'We stay with you post-launch. Systems evolve as you do.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="flex gap-5 p-5 border border-zinc-900 rounded-xl hover:border-[#D4AF37]/30 transition-all group"
                >
                  <span className="text-[#D4AF37]/40 font-mono text-xs pt-1 group-hover:text-[#D4AF37] transition-colors">{item.num}</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section >

      {/* Bento Grid */}
      < section className="py-32 px-6 bg-[#050505] relative z-20" >
        <motion.div style={{ y: yBento }} className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#D4AF37] font-mono text-sm mb-4">/// CAPABILITIES</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">Tools for the <br /><span className="italic font-serif text-zinc-500">ambitious.</span></h3>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              onClick={() => navigate('/services')}
              className="md:col-span-2 row-span-1 md:row-span-2 bg-[#0A0A0A] rounded-3xl p-8 border border-[#222] hover:border-[#D4AF37]/50 transition-all group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#333] flex items-center justify-center group-hover:scale-110 transition-transform"><LayoutDashboard className="text-[#D4AF37]" /></div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">Custom ERP Systems</h4>
                  <p className="text-zinc-400 max-w-md">Centralize your entire organization.</p>
                  <div className="mt-4 text-[#D4AF37] text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">EXPLORE MODULES <ArrowRight size={14} /></div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <BentoCard icon={<ShoppingCart />} title="Smart Inventory" desc="Real-time stock tracking." onClick={() => navigate('/services')} className="h-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-full"
            >
              <BentoCard icon={<FileText />} title="Automated Billing" desc="GST compliant invoicing." onClick={() => navigate('/services')} className="h-full" />
            </motion.div>
          </div>
        </motion.div>
      </section >

      {/* TESTIMONIAL / TRUST STRIP */}
      < section className="py-16 px-6 border-t border-zinc-900" >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zinc-700 text-xs font-mono tracking-widest uppercase mb-10">Trusted by businesses across India</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            {['Logistics', 'Retail', 'Manufacturing', 'Healthcare', 'Fintech'].map((industry, i) => (
              <div key={i} className="flex items-center gap-2 text-zinc-700 hover:text-zinc-400 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
                <span className="font-mono text-xs uppercase tracking-widest">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* OUR SOLUTIONS — Internal linking section */}
      <section className="py-24 px-6 bg-[#080808] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-[#D4AF37] font-mono text-sm mb-4">/// OUR SOLUTIONS</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">Built for Every <span className="italic font-serif text-zinc-400">business need.</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Custom Business Software', desc: 'Bespoke software engineered around your exact workflows and business logic.', path: '/custom-business-software', tag: 'Custom Dev' },
              { title: 'Workflow Automation', desc: 'Automate multi-step business processes with smart triggers, bots, and integrations.', path: '/workflow-automation-software', tag: 'Automation' },
              { title: 'ERP Software', desc: 'Unify finance, HR, inventory, and operations in one custom ERP platform.', path: '/erp-software', tag: 'ERP' },
              { title: 'Inventory Management', desc: 'Real-time stock tracking, barcode scanning, and automated reorder across warehouses.', path: '/inventory-management-software', tag: 'Inventory' },
              { title: 'Business Process Automation', desc: 'Transform manual, error-prone operations into intelligent self-running systems.', path: '/business-process-automation', tag: 'BPA' },
              { title: 'Search Engine Optimization', desc: 'Rank on page 1 of Google. Technical SEO, keyword strategy, and content optimization.', path: '/search-engine-optimization', tag: 'SEO' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="block bg-[#0A0A0A] border border-zinc-800 hover:border-[#D4AF37]/50 rounded-2xl p-7 transition-all group relative overflow-hidden h-full"
                >
                  <div className="absolute right-0 top-0 w-24 h-24 bg-[#D4AF37] opacity-0 group-hover:opacity-10 blur-[40px] transition-opacity duration-500" />
                  <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-mono rounded-full mb-4 tracking-widest">{item.tag}</span>
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                  <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    LEARN MORE <ArrowRight size={12} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <script type="application/ld+json">{JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'BusinessLogics',
            url: 'https://businesslogics.in',
            logo: 'https://businesslogics.in/logo.png',
            sameAs: ['https://www.linkedin.com/company/businesslogicss']
          })}</script>
        </Helmet>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/custom-business-software" element={<CustomBusinessSoftwarePage />} />
            <Route path="/workflow-automation-software" element={<WorkflowAutomationPage />} />
            <Route path="/erp-software" element={<ERPSoftwarePage />} />
            <Route path="/inventory-management-software" element={<InventoryManagementPage />} />
            <Route path="/business-process-automation" element={<BusinessProcessAutomationPage />} />
            <Route path="/search-engine-optimization" element={<SEOPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}