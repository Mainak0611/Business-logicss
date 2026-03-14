import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, GitBranch, Bell, RefreshCw, Lock, TrendingUp } from 'lucide-react';

export default function WorkflowAutomationPage() {
  useEffect(() => {
    document.title = 'Workflow Automation Software | BusinessLogics';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Automate repetitive business workflows with custom workflow automation software by BusinessLogics. Reduce manual effort, eliminate errors, and accelerate operations.'
      );
    }
  }, []);

  const features = [
    { icon: <GitBranch size={20} />, title: 'Visual Workflow Designer', desc: 'Map, build, and deploy complex multi-step workflows without writing a single line of code.' },
    { icon: <Bell size={20} />, title: 'Smart Trigger Engine', desc: 'Trigger workflows on time, events, thresholds, or external API calls automatically.' },
    { icon: <RefreshCw size={20} />, title: 'System Integrations', desc: 'Connect with ERP, CRM, HRMS, billing tools, WhatsApp, email, and government portals.' },
    { icon: <Zap size={20} />, title: 'RPA Bots', desc: 'Robotic Process Automation bots handle repetitive data entry, scraping, and form submissions.' },
    { icon: <Lock size={20} />, title: 'Approval Workflows', desc: 'Multi-level approval chains with audit trails for purchase orders, leave requests, and more.' },
    { icon: <TrendingUp size={20} />, title: 'Analytics & Monitoring', desc: 'Real-time dashboards track workflow performance, bottlenecks, and exception rates.' },
  ];

  const industries = ['Banking & Finance', 'Manufacturing', 'HR & Payroll', 'E-Commerce & Retail', 'Healthcare & Pharma', 'Government & PSUs'];

  const benefits = [
    'Eliminate manual data entry and human errors across departments',
    'Reduce process turnaround time by up to 80%',
    'Full audit trail for compliance and governance',
    'Scalable — add new workflows without rebuilding from scratch',
    'Notifications via email, SMS, and WhatsApp at every step',
    '24/7 automated operations even when your team is offline',
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-6 overflow-hidden border-b border-[#D4AF37]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.05] blur-[150px] rounded-full" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono mb-6 tracking-widest">
              WORKFLOW AUTOMATION
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              Workflow Automation<br />
              <span className="italic font-serif text-[#D4AF37]">Software</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
              Stop letting repetitive manual tasks drain your team's potential. Our workflow automation software is custom-built to digitize, streamline, and automate the processes unique to your business — freeing your people for high-value work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/"
                onClick={() => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)}
                className="group inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-[#D4AF37] text-black font-bold rounded-none hover:bg-white transition-colors"
              >
                AUTOMATE YOUR WORKFLOWS <ArrowRight size={18} />
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
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// THE CHALLENGE</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Why Businesses Need<br />Workflow Automation Software
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-6">
              The average knowledge worker spends over 60% of their time on repetitive, low-value tasks — copying data between systems, chasing approvals over WhatsApp, and manually generating reports. This isn't just inefficient; it's costing you money, accuracy, and competitive advantage.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
              BusinessLogics builds workflow automation software that targets your specific bottlenecks. We study your existing processes, identify the automation opportunities, and engineer smart triggers, notifications, and bots that keep your operations moving — around the clock.
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
              Features of Our Workflow<br />Automation Software
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
              Industries We Automate
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-12">
              Workflow automation delivers ROI across every sector. We've helped companies in these industries eliminate manual drudgery and accelerate operational throughput.
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
              Benefits of BusinessLogics<br />Workflow Automation
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
              Let's Automate Your<br />
              <span className="italic font-serif text-[#D4AF37]">Business Workflows</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              Book a free discovery call. We'll map your current processes and show you exactly where automation can save you time and money.
            </p>
            <Link
              to="/"
              onClick={() => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)}
              className="group inline-flex items-center gap-2 px-6 py-4 sm:px-10 sm:py-5 bg-[#D4AF37] text-black font-bold text-lg hover:bg-white transition-colors"
            >
              BOOK A FREE CALL <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
