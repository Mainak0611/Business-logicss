import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Code2, Layers, Users, Briefcase, Cpu, BarChart3 } from 'lucide-react';

export default function CustomBusinessSoftwarePage() {
  useEffect(() => {
    document.title = 'Custom Business Software Development | BusinessLogics';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'BusinessLogics delivers custom business software tailored to your exact workflows. From CRM to ERP, we engineer bespoke digital systems that scale with your business.'
      );
    }
  }, []);

  const features = [
    { icon: <Code2 size={20} />, title: 'Fully Bespoke Code', desc: 'Every line written for your specific business logic — no templates, no compromises.' },
    { icon: <Layers size={20} />, title: 'Modular Architecture', desc: 'Build what you need today and scale seamlessly as your business grows tomorrow.' },
    { icon: <Users size={20} />, title: 'User-Centric Design', desc: "Interfaces crafted for your team's real workflows, reducing training time and errors." },
    { icon: <Cpu size={20} />, title: 'API & Integration Ready', desc: 'Connects with your existing tools — Tally, GST portals, payment gateways, and more.' },
    { icon: <BarChart3 size={20} />, title: 'Real-Time Analytics', desc: 'Live dashboards and reports that give you actionable business intelligence.' },
    { icon: <Briefcase size={20} />, title: 'Cloud or On-Premise', desc: 'Deploy on your own servers or on the cloud — the choice is always yours.' },
  ];

  const industries = ['Manufacturing', 'Retail & E-Commerce', 'Logistics & Supply Chain', 'Healthcare', 'Fintech & NBFC', 'Education & EdTech'];

  const benefits = [
    'No vendor lock-in — you own 100% of the source code',
    'Reduced operational costs through automation',
    'Faster decision-making with real-time data',
    'Seamless integration with your existing ecosystem',
    'Dedicated post-launch support and maintenance',
    'Built to Indian compliance standards (GST, TDS, labour law)',
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-6 overflow-hidden border-b border-[#D4AF37]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.05] blur-[150px] rounded-full" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono mb-6 tracking-widest">
              CUSTOM SOFTWARE DEVELOPMENT
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              Custom Business<br />
              <span className="italic font-serif text-[#D4AF37]">Software Solutions</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
              Off-the-shelf software was never built for your business. BusinessLogics engineers custom business software that fits your exact workflows, processes, and growth ambitions — from the ground up.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/"
                onClick={() => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)}
                className="group inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-[#D4AF37] text-black font-bold rounded-none hover:bg-white transition-colors"
              >
                GET A FREE CONSULTATION <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 border border-zinc-700 hover:border-[#D4AF37] text-zinc-400 hover:text-white transition-all font-mono text-sm">
                VIEW ALL SERVICES
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why businesses need custom software */}
      <section className="py-14 sm:py-24 px-6 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// THE PROBLEM</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Why Businesses Need<br />Custom Business Software
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-6">
              Generic SaaS platforms are built for the average business — not yours. They force you to adapt your processes to the software, not the other way around. The result? Workarounds, spreadsheets alongside "modern" tools, and frustrated teams.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
              Custom business software built by BusinessLogics is engineered around your specific operations. Whether you manage 10 employees or 10,000 SKUs, we design systems that eliminate friction, automate the repetitive, and give your leadership real-time visibility — so every business decision is backed by data, not guesswork.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 sm:py-24 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// CAPABILITIES</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-14 leading-tight">
              Features of Our Custom<br />Software Development
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0A0A0A] border border-zinc-800 hover:border-[#D4AF37]/50 rounded-2xl p-6 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#111] border border-[#333] flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-14 sm:py-24 px-6 bg-[#080808] border-y border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// INDUSTRIES WE SERVE</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Industries We Serve with<br />Custom Software
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-12">
              Our custom business software solutions span across sectors. No matter the industry, we bring deep domain expertise to architect systems that solve real operational challenges.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industries.map((ind, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-[#0A0A0A] border border-zinc-800 rounded-xl hover:border-[#D4AF37]/40 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0" />
                  <span className="text-zinc-300 font-medium text-sm">{ind}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 sm:py-24 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// WHY BUSINESSLOGICS</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
              Benefits of Choosing<br />BusinessLogics
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-zinc-900 hover:border-zinc-700 transition-all"
                >
                  <CheckCircle2 size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-24 px-6 bg-[#080808] border-t border-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Build Your<br />
              <span className="italic font-serif text-[#D4AF37]">Custom Software?</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              Let's talk about your business challenges. We'll design a custom software solution that eliminates inefficiencies and drives real growth.
            </p>
            <Link
              to="/"
              onClick={() => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)}
              className="group inline-flex items-center gap-2 px-6 py-4 sm:px-10 sm:py-5 bg-[#D4AF37] text-black font-bold text-lg hover:bg-white transition-colors"
            >
              START YOUR PROJECT <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
