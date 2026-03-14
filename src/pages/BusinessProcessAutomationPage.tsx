import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, GitMerge, BarChart3, FileText, RefreshCw, Zap } from 'lucide-react';

export default function BusinessProcessAutomationPage() {
  useEffect(() => {
    document.title = 'Business Process Automation Software | BusinessLogics';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'BusinessLogics delivers end-to-end business process automation solutions. Streamline operations, reduce costs, and scale faster with custom BPA software built for Indian businesses.');
    }
  }, []);

  const features = [
    { icon: <GitMerge size={20} />, title: 'End-to-End Process Mapping', desc: 'We document and digitize your entire process chain — from trigger to outcome — before a single line is written.' },
    { icon: <Cpu size={20} />, title: 'Intelligent Rule Engines', desc: 'Conditional logic, routing rules, and exception handling that mirror your team\'s real decision-making.' },
    { icon: <FileText size={20} />, title: 'Document Automation', desc: 'Auto-generate contracts, invoices, reports, and compliance documents from structured data.' },
    { icon: <RefreshCw size={20} />, title: 'Cross-System Orchestration', desc: 'Synchronize data and actions across ERP, CRM, HRMS, billing, and third-party APIs seamlessly.' },
    { icon: <Zap size={20} />, title: 'Event-Driven Automation', desc: 'Processes triggered by form submissions, database changes, scheduled times, or external webhooks.' },
    { icon: <BarChart3 size={20} />, title: 'Process Analytics', desc: 'Measure cycle times, identify bottlenecks, and continuously improve through data-driven insights.' },
  ];

  const industries = ['Banking & Insurance', 'Manufacturing', 'Logistics & Freight', 'Healthcare & Diagnostics', 'Legal & Compliance', 'Government & PSUs'];

  const benefits = [
    'Reduce process cycle times by up to 70% through automation',
    'Eliminate human errors in high-volume, repetitive processes',
    'Achieve regulatory compliance with automated audit trails',
    'Scale operations without proportionally increasing headcount',
    'Improve employee satisfaction by removing drudge work',
    'Lower operational costs while increasing throughput',
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="relative py-20 sm:py-32 px-6 overflow-hidden border-b border-[#D4AF37]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[500px] h-[400px] bg-[#D4AF37] opacity-[0.05] blur-[150px] rounded-full -translate-x-1/2" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono mb-6 tracking-widest">BUSINESS PROCESS AUTOMATION</span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              Business Process<br /><span className="italic font-serif text-[#D4AF37]">Automation</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
              Transform your operations from manual and error-prone to intelligent and self-running. BusinessLogics designs and builds business process automation solutions that eliminate bottlenecks, enforce consistency, and free your team for strategic work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/" onClick={() => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)} className="inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-[#D4AF37] text-black font-bold hover:bg-white transition-colors">
                START AUTOMATING <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 border border-zinc-700 hover:border-[#D4AF37] text-zinc-400 hover:text-white transition-all font-mono text-sm">VIEW ALL SERVICES</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-24 px-6 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// THE OPERATIONAL GAP</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Why Businesses Need<br />Business Process Automation</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-6">
              Every growing business eventually hits a scaling wall. Adding more people to manage more processes isn't sustainable — it introduces inconsistency, increases error rates, and balloons costs. Business process automation (BPA) solves this by making your processes run themselves.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
              Unlike generic workflow tools, BusinessLogics builds BPA systems that truly mirror your business logic. We embed the intelligence of your best operators into automated systems — so every process, every time, happens exactly as it should, without manual intervention.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-24 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// CAPABILITIES</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-14 leading-tight">Features of Our Business<br />Process Automation Solutions</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-[#0A0A0A] border border-zinc-800 hover:border-[#D4AF37]/50 rounded-2xl p-6 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-[#111] border border-[#333] flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-24 px-6 bg-[#080808] border-y border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// INDUSTRIES WE SERVE</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Industries We Transform<br />with Process Automation</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-12">Business process automation delivers transformative results across sectors where volume, compliance, and consistency are critical.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industries.map((ind, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-center gap-3 p-4 bg-[#0A0A0A] border border-zinc-800 rounded-xl hover:border-[#D4AF37]/40 transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0" />
                  <span className="text-zinc-300 font-medium text-sm">{ind}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-24 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// WHY BUSINESSLOGICS</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">Benefits of BusinessLogics<br />Process Automation</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-3 p-4 rounded-xl border border-zinc-900 hover:border-zinc-700 transition-all">
                  <CheckCircle2 size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-24 px-6 bg-[#080808] border-t border-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Automate Your<br /><span className="italic font-serif text-[#D4AF37]">Business Processes?</span></h2>
            <p className="text-zinc-400 text-lg mb-10">Let's identify the 3 processes in your business that, if automated today, would have the biggest impact on efficiency and cost. Book a free process audit.</p>
            <Link to="/" onClick={() => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)} className="inline-flex items-center gap-2 px-6 py-4 sm:px-10 sm:py-5 bg-[#D4AF37] text-black font-bold text-lg hover:bg-white transition-colors">
              BOOK FREE PROCESS AUDIT <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
