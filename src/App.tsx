import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  FileText,
  ShoppingCart,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Zap,
  Loader2,
  Server,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import logo from './assets/logo.png'; 
import work1 from './assets/work1.png';
import work1a from './assets/work1a.png';

// --- UTILITIES & SHARED COMPONENTS ---

// 1. Scroll To Top on Route Change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// 2. Global Styles
const GlobalStyles = () => (
  <style>{`
    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
    @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes barGrow { 0% { transform: scaleY(0.5); } 50% { transform: scaleY(1); } 100% { transform: scaleY(0.5); } }
    .glass-panel { background: rgba(10, 10, 10, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(212, 175, 55, 0.1); }
    .grain-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E"); pointer-events: none; z-index: 9999; opacity: 0.4; }
    .text-glow { text-shadow: 0 0 30px rgba(212, 175, 55, 0.3); }
  `}</style>
);

// 3. Bento Card Component
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

// --- LAYOUT COMPONENT (Header + Footer + Form Logic) ---
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Form State for Footer
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // --- UPDATED FORM LOGIC ---
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setFormStatus('submitting');

    try {
      // ---------------------------------------------------------
      // ⚠️ REPLACE 'YOUR_FORMSPREE_ID' WITH YOUR ACTUAL ID ⚠️
      // Example: https://formspree.io/f/xkqezowq
      // ---------------------------------------------------------
      const response = await fetch("https://formspree.io/f/mwpjkrla", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setFormStatus('success');
        setEmail('');
        // Reset button after 3 seconds
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
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#D4AF37] opacity-[0.08] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-[#D4AF37] opacity-[0.05] blur-[100px]" />
      </div>

      {/* Header - FIXED CONSTANT BLACK */}
      <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-[#D4AF37]/10 py-4 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 relative group">
            <div className="absolute inset-0 bg-[#D4AF37] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
             <div className="h-14 overflow-hidden flex items-center relative z-10">
              <img src={logo} alt="BusinessLogics" className="h-20 w-auto object-cover object-center max-w-none transition-transform duration-500 group-hover:scale-110" style={{ transform: 'scale(1.2)' }} />
            </div>
          </Link>

          {/* Desktop Nav */}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
            {['Services', 'Work', 'About'].map((item) => (
               <Link key={item} to={`/${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-white font-bold hover:text-[#D4AF37]">{item}</Link>
            ))}
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="pt-20 flex-grow">
        {children}
      </main>

      {/* Footer / CTA Hybrid */}
      <section className="pt-20 pb-10 px-6 mt-auto">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-b from-[#0A0A0A] to-black border border-[#D4AF37]/20 rounded-[3rem] p-10 md:p-24 overflow-hidden text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D4AF37] opacity-10 blur-[100px]" />
              <h2 className="relative z-10 text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Ready to <span className="italic font-serif text-[#D4AF37]">upgrade?</span>
              </h2>
              <p className="relative z-10 text-zinc-400 text-xl mb-12 max-w-xl mx-auto">
                Stop using spreadsheets. Let's build something that actually works for your scale.
              </p>

              <form className="relative z-10 max-w-md mx-auto space-y-4" onSubmit={handleFormSubmit}>
                 <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-zinc-800 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                    <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" disabled={formStatus === 'success'} className="relative w-full bg-black text-white p-4 rounded-lg border border-zinc-800 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50" />
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
                  <a href="mailto:businesslogics.solutions@gmail.com" className="hover:text-[#D4AF37] transition-colors uppercase">Mail</a>
                </div>
                <div className="text-zinc-600 text-xs">© {new Date().getFullYear()} BUSINESSLOGICS.</div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

// --- PAGES ---

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

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-10 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative z-20" style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-mono mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
              </span>
              SYSTEMS ARCHITECTURE V2.0
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8">
              LOGIC <br /> MEETS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FBE8A6] to-[#B49220] text-glow italic font-serif pr-4">Luxury.</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-md mb-10 border-l-2 border-[#D4AF37]/30 pl-6">
              We don't just build software. We engineer digital empires. Bespoke dashboards and CRM solutions.
            </p>
            <div className="flex flex-wrap gap-5">
              <button onClick={scrollToContact} className="group relative px-8 py-4 bg-[#D4AF37] text-black font-bold text-lg rounded-none overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                <div className="absolute inset-0 w-full h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center gap-2">ENQUIRE NOW <ArrowRight className="w-5 h-5" /></span>
              </button>
              <button onClick={() => navigate('/work')} className="px-8 py-4 border border-zinc-800 hover:border-[#D4AF37] text-zinc-400 hover:text-white transition-colors font-mono text-sm">
                 VIEW WORK
              </button>
            </div>
          </div>
          
          {/* 3D Mockup Container - COMMAND CENTER VIEW */}
          <div className="relative hidden lg:block perspective-[2000px]">
              <div className="relative transition-transform duration-1000 ease-out" style={{ transform: `rotateY(-12deg) rotateX(10deg) translate(${mousePos.x}px, ${mousePos.y}px)`, transformStyle: 'preserve-3d' }}>
                <div className="absolute -inset-10 bg-gradient-to-tr from-[#D4AF37]/20 to-purple-900/0 rounded-3xl blur-3xl -z-10" />
                <div className="glass-panel rounded-2xl p-1 border border-[#D4AF37]/20 shadow-2xl shadow-black">
                  
                  {/* MOCKUP CONTENT */}
                  <div className="bg-[#0a0a0a] rounded-xl overflow-hidden h-[400px] relative flex flex-col">
                     {/* Mock Topbar */}
                     <div className="h-10 border-b border-zinc-800 bg-black/50 flex items-center justify-between px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                          <span className="text-[10px] font-mono text-emerald-500">SYSTEM ONLINE</span>
                        </div>
                     </div>

                     {/* Dashboard Body */}
                     <div className="p-6 flex-1 flex flex-col gap-4">
                        
                        {/* Top Row: Metrics */}
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

                        {/* Middle: Simulated Graph */}
                        <div className="flex-1 bg-[#111] border border-zinc-800 rounded-lg p-4 relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/5 to-transparent"></div>
                           <div className="flex items-end justify-between h-full gap-2 px-2 pb-2">
                              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                                <div 
                                  key={i} 
                                  className="w-full bg-[#D4AF37] opacity-80 rounded-t-sm"
                                  style={{ 
                                    height: `${h}%`,
                                    animation: `barGrow 3s infinite ease-in-out ${i * 0.1}s` 
                                  }}
                                ></div>
                              ))}
                           </div>
                        </div>

                        {/* Bottom: Status */}
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
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-8 border-y border-[#D4AF37]/10 bg-black/50 overflow-hidden">
        <div className="flex w-[200%] animate-[scroll_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex w-full justify-around items-center text-zinc-600 font-bold text-2xl uppercase tracking-widest px-10">
              <span>Logistics</span><span>•</span><span>Manufacturing</span><span>•</span><span>Retail</span><span>•</span>
              <span className="text-[#D4AF37]">BusinessLogics</span><span>•</span>
              <span>Fintech</span><span>•</span><span>Healthcare</span><span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bento Grid (Short) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div>
                <h2 className="text-[#D4AF37] font-mono text-sm mb-4">/// CAPABILITIES</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white">Tools for the <br /><span className="italic font-serif text-zinc-500">ambitious.</span></h3>
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
              <div onClick={() => navigate('/services')} className="md:col-span-2 row-span-1 md:row-span-2 bg-[#0A0A0A] rounded-3xl p-8 border border-[#222] hover:border-[#D4AF37]/50 transition-all group relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#333] flex items-center justify-center group-hover:scale-110 transition-transform"><LayoutDashboard className="text-[#D4AF37]" /></div>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-2">Custom ERP Systems</h4>
                    <p className="text-zinc-400 max-w-md">Centralize your entire organization.</p>
                    <div className="mt-4 text-[#D4AF37] text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">EXPLORE MODULES <ArrowRight size={14} /></div>
                  </div>
                </div>
              </div>
              <BentoCard icon={<ShoppingCart />} title="Smart Inventory" desc="Real-time stock tracking." onClick={() => navigate('/services')} />
              <BentoCard icon={<FileText />} title="Automated Billing" desc="GST compliant invoicing." onClick={() => navigate('/services')} />
           </div>
        </div>
      </section>
    </>
  );
};

const ServicesPage = () => (
  <div className="max-w-7xl mx-auto px-6 py-24">
    <h1 className="text-6xl font-bold mb-4 text-white">Our Services</h1>
    <p className="text-xl text-zinc-400 mb-20 max-w-2xl">
      Comprehensive modules designed to fit perfectly into your existing workflow. We don't force you to adapt to software; we build software that adapts to you.
    </p>
    
    <div className="grid md:grid-cols-2 gap-8">
      {[
        { icon: <LayoutDashboard />, title: "Custom ERP Development", desc: "End-to-end resource planning tailored to your industry logic." },
        { icon: <Users />, title: "HRMS & Payroll", desc: "Automated salary processing, attendance tracking, and performance appraisals." },
        { icon: <ShoppingCart />, title: "Inventory Management", desc: "FIFO/LIFO tracking, warehousing logic, and stock alerts." },
        { icon: <FileText />, title: "GST Billing", desc: "One-click e-invoice generation and seamless tax filing reports." },
        { icon: <Server />, title: "Cloud Migration", desc: "Move your on-premise data to secure, scalable cloud infrastructure." },
        { icon: <Zap />, title: "Automation Bots", desc: "RPA solutions to handle repetitive data entry tasks." },
      ].map((service, idx) => (
        <div key={idx} className="bg-[#111] p-8 rounded-2xl border border-zinc-800 hover:border-[#D4AF37] transition-all group">
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
          <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const WorkPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Defined project images array
  const projectImages = [work1, work1a];

  const nextSlide = (e: any) => {
    e.stopPropagation(); // Prevent any parent clicks
    setCurrentSlide((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = (e: any) => {
    e.stopPropagation(); // Prevent any parent clicks
    setCurrentSlide((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-6xl font-bold mb-4 text-white">Selected Work</h1>
      <p className="text-xl text-zinc-400 mb-20 max-w-2xl">
        A showcase of high-performance systems we've engineered for clients.
      </p>
      
      {/* ONLY ENQUIRY TRACKING PROJECT SHOWN */}
      <div className="space-y-20">
          <div className="group relative grid md:grid-cols-2 gap-10 items-center">
             {/* IMAGE SLIDER CONTAINER */}
             <div className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-[#D4AF37]/50 transition-all relative group/slider">
               
               {/* ACTIVE IMAGE */}
               <img 
                 src={projectImages[currentSlide]} 
                 alt="Project Screenshot" 
                 className="w-full h-full object-cover transition-opacity duration-500"
               />

               {/* OVERLAY GRADIENT */}
               <div className="absolute inset-0 bg-black/10 group-hover/slider:bg-transparent transition-colors"></div>

               {/* NAVIGATION CONTROLS (Visible on Hover) */}
               <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                 <button 
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-[#D4AF37] hover:text-black transition-all"
                 >
                    <ChevronLeft size={20} />
                 </button>
                 <button 
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-[#D4AF37] hover:text-black transition-all"
                 >
                    <ChevronRight size={20} />
                 </button>
               </div>

               {/* SLIDE INDICATORS (DOTS) */}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                 {projectImages.map((_, idx) => (
                   <div 
                     key={idx} 
                     className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-[#D4AF37] w-4' : 'bg-white/50'}`}
                   />
                 ))}
               </div>

             </div>

             {/* PROJECT DETAILS */}
             <div>
               <div className="text-[#D4AF37] font-mono text-xs mb-4">FEATURED PROJECT</div>
               <h3 className="text-3xl font-bold text-white mb-4">Enquiry Tracking System</h3>
               <p className="text-zinc-400 leading-relaxed mb-6">
                 A specialized dashboard for managing customer enquiries. Streamline lead follow-ups, track status changes from pending to conversion, and ensure no potential client falls through the cracks.
               </p>
               <div className="flex gap-2 mb-8">
                 <span className="px-3 py-1 bg-zinc-900 text-zinc-500 text-xs rounded border border-zinc-800">REACT</span>
                 <span className="px-3 py-1 bg-zinc-900 text-zinc-500 text-xs rounded border border-zinc-800">NODE.JS</span>
                 <span className="px-3 py-1 bg-zinc-900 text-zinc-500 text-xs rounded border border-zinc-800">TAILWIND</span>
               </div>
               <button className="text-white font-bold flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
               </button>
             </div>
          </div>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="max-w-4xl mx-auto px-6 py-24">
    <h1 className="text-6xl font-bold mb-12 text-white">About Us</h1>
    
    <div className="prose prose-invert prose-lg text-zinc-400">
      <p className="text-2xl text-white font-light mb-8">
        We are a boutique software agency obsessed with <span className="text-[#D4AF37]">efficiency</span>.
      </p>
      <p className="mb-6">
        Founded in 2025, BusinessLogics was born out of frustration. We saw businesses struggling with bloated, expensive "one-size-fits-all" software that did 100 things poorly and nothing perfectly.
      </p>
      <p className="mb-6">
        We took a different approach. We believe software should be like a tailored suit—cut exactly to your measurements. We don't use templates. We don't outsource. We write clean, performant code that solves specific business problems.
      </p>
      <p className="mb-12">
        Our team consists of systems architects, UI designers, and full-stack engineers who understand business logic as well as they understand binary.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-zinc-800 pt-16">
      <div>
         <div className="text-4xl font-bold text-white mb-2">20+</div>
         <div className="text-sm text-zinc-500 font-mono">ENTERPRISE CLIENTS</div>
      </div>
      <div>
         <div className="text-4xl font-bold text-white mb-2">50k+</div>
         <div className="text-sm text-zinc-500 font-mono">HOURS SAVED</div>
      </div>
      <div>
         <div className="text-4xl font-bold text-white mb-2">100%</div>
         <div className="text-sm text-zinc-500 font-mono">ON-TIME DELIVERY</div>
      </div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}