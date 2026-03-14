import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the first process we should automate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start with high-volume, low-complexity workflows that currently involve repetitive manual approvals or data entry.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can automation handle exceptions and manual overrides?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We build exception branches and controlled override paths to keep operations flexible without losing governance.'
        }
      },
      {
        '@type': 'Question',
        name: 'How is success measured after implementation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We track cycle time reduction, error-rate changes, SLA compliance, and throughput improvements against your baseline.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will automation replace human teams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Automation removes repetitive effort so teams can focus on judgment-intensive, customer-facing, and strategic responsibilities.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Business Process Automation | BusinessLogics</title>
        <meta name="description" content="Business process automation services to streamline approvals, reduce errors, and scale operations. Build automated workflows with BusinessLogics." />
        <meta name="keywords" content="business process automation, process automation software, workflow automation, BPA solutions" />
        <link rel="canonical" href="https://businesslogics.in/business-process-automation" />
        <meta property="og:title" content="Business Process Automation | BusinessLogics" />
        <meta property="og:description" content="Transform manual operations into intelligent, governed, and scalable automated processes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://businesslogics.in/business-process-automation" />
        <meta property="og:image" content="https://businesslogics.in/logo.png" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

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

      <section className="py-14 sm:py-24 px-6 bg-[#0A0A0A] border-y border-zinc-900">
        <div className="max-w-5xl mx-auto space-y-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">What is Business Process Automation</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Business process automation is the structured transformation of repetitive, rule-driven operations into software-managed workflows. It is broader than one isolated automation tool because it covers interdependent processes across departments, systems, and decision points.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              In practice, business process automation connects triggers, approvals, data validation, document generation, and reporting into one governed chain. This reduces delay, improves consistency, and gives leaders a transparent operating view.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Benefits of Automating Business Processes</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              Organizations that automate core processes usually see measurable improvements in turnaround time, accuracy, and operational resilience within the first implementation phase.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Faster service delivery through reduced handoff delays.</li>
              <li>Lower operational costs by minimizing manual repetition.</li>
              <li>Consistent policy enforcement across branches and teams.</li>
              <li>Comprehensive audit trails for governance and compliance.</li>
              <li>Greater leadership visibility with real-time process data.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Examples of Automated Workflows</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              We implement business process automation in both customer-facing and internal operations. Typical examples include enquiry qualification and assignment, purchase request approvals, invoice matching, onboarding checklists, claim processing, and renewal reminders.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Sales lead to proposal workflow with SLA-based escalations.</li>
              <li>Procurement pipeline from request to vendor payment.</li>
              <li>Employee onboarding with document verification checkpoints.</li>
              <li>Support ticket routing with severity and queue logic.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">How We Implement Automation</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              Our delivery framework starts with measurable process baselines so improvements are visible and actionable. We map process states, define rules and exception paths, implement integrations, test with pilot teams, and then scale in phases.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Discovery workshops with process owners and operators.</li>
              <li>Target-state process blueprint and automation matrix.</li>
              <li>Incremental implementation with rollback-safe releases.</li>
              <li>Post-launch dashboards for continuous optimization.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">FAQ</h2>
            <div className="space-y-5 text-zinc-300">
              <div>
                <h3 className="text-white font-semibold mb-1">What is the first process we should automate?</h3>
                <p className="text-zinc-400">Start with high-volume, low-complexity workflows that currently involve repetitive manual approvals or data entry.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Can automation handle exceptions and manual overrides?</h3>
                <p className="text-zinc-400">Yes. We build exception branches and controlled override paths to keep operations flexible without losing governance.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">How is success measured after implementation?</h3>
                <p className="text-zinc-400">We track cycle time reduction, error-rate changes, SLA compliance, and throughput improvements against your baseline.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Will automation replace human teams?</h3>
                <p className="text-zinc-400">Automation removes repetitive effort so teams can focus on judgment-intensive, customer-facing, and strategic responsibilities.</p>
              </div>
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
