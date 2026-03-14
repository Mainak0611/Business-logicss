import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, LayoutDashboard, Users, ShoppingCart, FileText, Server, BarChart3 } from 'lucide-react';

export default function ERPSoftwarePage() {
  useEffect(() => {
    document.title = 'ERP Software for Businesses | BusinessLogics';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'BusinessLogics builds custom ERP software for businesses of all sizes. Centralize finance, inventory, HR, and operations in one powerful, bespoke ERP system.'
      );
    }
  }, []);

  const features = [
    { icon: <LayoutDashboard size={20} />, title: 'Unified Dashboard', desc: 'One command center for finance, inventory, production, HR, and sales — real-time, always in sync.' },
    { icon: <Users size={20} />, title: 'HR & Payroll Module', desc: 'Attendance, leave management, payroll calculation, and statutory compliance built in.' },
    { icon: <ShoppingCart size={20} />, title: 'Procurement & Inventory', desc: 'Purchase order management, vendor tracking, FIFO/LIFO inventory, and reorder automation.' },
    { icon: <FileText size={20} />, title: 'Finance & Accounting', desc: 'GST-compliant invoicing, ledger management, P&L, balance sheets, and TDS filing.' },
    { icon: <Server size={20} />, title: 'Production & MRP', desc: 'Bill of Materials, work orders, machine scheduling, and production efficiency tracking.' },
    { icon: <BarChart3 size={20} />, title: 'Business Intelligence', desc: 'Customizable reports and live KPI dashboards that reveal exactly where your business stands.' },
  ];

  const industries = ['Manufacturing & Engineering', 'Trading & Distribution', 'Construction & Contracting', 'FMCG & Retail', 'Healthcare & Pharma', 'Textile & Garments'];

  const benefits = [
    'Replace 5+ disconnected tools with one integrated ERP platform',
    'Real-time visibility across all departments and locations',
    'GST, TDS, and Indian statutory compliance built-in from day one',
    'Role-based access control for data security',
    'Custom reports generated in seconds, not hours',
    'Scales from 10 users to 10,000 without re-platforming',
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-6 overflow-hidden border-b border-[#D4AF37]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-[#D4AF37] opacity-[0.05] blur-[150px] rounded-full" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono mb-6 tracking-widest">
              ERP DEVELOPMENT
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              ERP Software<br />
              <span className="italic font-serif text-[#D4AF37]">for Businesses</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
              Run your entire business from a single platform. BusinessLogics designs and builds custom ERP software for businesses that outgrow generic tools — deep-integrated, India-compliant, and built exactly for your industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/"
                onClick={() => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)}
                className="group inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-[#D4AF37] text-black font-bold rounded-none hover:bg-white transition-colors"
              >
                REQUEST ERP DEMO <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 border border-zinc-700 hover:border-[#D4AF37] text-zinc-400 hover:text-white transition-all font-mono text-sm">
                VIEW ALL SERVICES
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why */}
      <section className="py-14 sm:py-24 px-6 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// THE BUSINESS CASE</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Why Businesses Need<br />Custom ERP Software
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-6">
              Growing businesses inevitably hit a data silo problem. Finance uses one tool, inventory uses another, HR uses a third — and leadership can't see the full picture without manually pulling spreadsheets from every department. That's where ERP software for businesses becomes essential.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
              But off-the-shelf ERP solutions like SAP or Oracle are built for global enterprises, not Indian SMEs and mid-market companies. They're expensive, overcomplicated, and require months of implementation. BusinessLogics builds right-sized ERP software that fits your operations — deployed faster, configured precisely, and supported locally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 sm:py-24 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// ERP MODULES</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-14 leading-tight">
              Features of Our<br />ERP Software
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
              Industries We Build<br />ERP Systems For
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-12">
              Our ERP software for businesses has been deployed across industries with vastly different operational needs — each implementation tailored to the sector's specific compliance, workflows, and data requirements.
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
              Benefits of BusinessLogics<br />ERP Software
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
              Ready to Unify Your<br />
              <span className="italic font-serif text-[#D4AF37]">Business Operations?</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              Let us show you how a custom ERP system can transform your business operations. Book a free demo tailored to your industry.
            </p>
            <Link
              to="/"
              onClick={() => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)}
              className="group inline-flex items-center gap-2 px-6 py-4 sm:px-10 sm:py-5 bg-[#D4AF37] text-black font-bold text-lg hover:bg-white transition-colors"
            >
              GET A FREE ERP DEMO <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
