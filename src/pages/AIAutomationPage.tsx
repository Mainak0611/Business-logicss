import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, GitBranch, Bell, RefreshCw, Lock, TrendingUp } from 'lucide-react';

export default function AIAutomationPage() {
  useEffect(() => {
    document.title = 'AI Automation Software | BusinessLogics';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Automate repetitive business processes with custom AI automation software by BusinessLogics. Reduce manual effort, eliminate errors, and accelerate operations.'
      );
    }
  }, []);

  const features = [
    { icon: <GitBranch size={20} />, title: 'AI Process Designer', desc: 'Map, build, and deploy intelligent automation processes without writing a single line of code.' },
    { icon: <Bell size={20} />, title: 'Smart Trigger Engine', desc: 'Trigger automation on time, events, thresholds, or external API calls automatically.' },
    { icon: <RefreshCw size={20} />, title: 'System Integrations', desc: 'Connect with ERP, CRM, HRMS, billing tools, WhatsApp, email, and government portals.' },
    { icon: <Zap size={20} />, title: 'AI & RPA Bots', desc: 'AI-powered and Robotic Process Automation bots handle repetitive data entry, scraping, and form submissions.' },
    { icon: <Lock size={20} />, title: 'Approval Automation', desc: 'Multi-level approval chains with AI-assisted recommendations, audit trails for purchase orders, and requests.' },
    { icon: <TrendingUp size={20} />, title: 'Analytics & Monitoring', desc: 'Real-time dashboards track automation performance, bottlenecks, and exception rates.' },
  ];

  const industries = ['Banking & Finance', 'Manufacturing', 'HR & Payroll', 'E-Commerce & Retail', 'Healthcare & Pharma', 'Government & PSUs'];

  const benefits = [
    'Eliminate manual data entry and human errors across departments',
    'Reduce process turnaround time by up to 80%',
    'Full audit trail for compliance and governance',
    'Scalable — add new automations without rebuilding from scratch',
    'Notifications via email, SMS, and WhatsApp at every step',
    '24/7 automated operations even when your team is offline',
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do we identify which processes to automate first?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start with high-volume, repetitive processes where delays and errors are currently expensive, such as approvals, invoicing, and status updates.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can AI automation coexist with our current systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We integrate automation layers with your existing ERP, CRM, and databases so you get value without disruptive replacements.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you support exception handling in automated processes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Automations include fallback paths, escalation rules, and human review checkpoints for non-standard scenarios.'
        }
      },
      {
        '@type': 'Question',
        name: 'How quickly can teams be trained?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most teams can adopt the system within days because we build role-specific interfaces around existing responsibilities.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>AI Automation Software | BusinessLogics</title>
        <meta name="description" content="AI automation software for approvals, escalations, and integrations. Automate repetitive tasks and accelerate operations with BusinessLogics." />
        <meta name="keywords" content="AI automation software, AI automation tools, process automation, business automation software" />
        <link rel="canonical" href="https://businesslogics.in/ai-automation-software" />
        <meta property="og:title" content="AI Automation Software | BusinessLogics" />
        <meta property="og:description" content="Automate repetitive business processes with AI, smart triggers, approvals, and real-time monitoring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://businesslogics.in/ai-automation-software" />
        <meta property="og:image" content="https://businesslogics.in/logo.png" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-6 overflow-hidden border-b border-[#D4AF37]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.05] blur-[150px] rounded-full" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono mb-6 tracking-widest">
              AI AUTOMATION
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              AI Automation<br />
              <span className="italic font-serif text-[#D4AF37]">Software</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
              Stop letting repetitive manual tasks drain your team's potential. Our AI automation software is custom-built to digitize, streamline, and automate the processes unique to your business — freeing your people for high-value work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/"
                onClick={() => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)}
                className="group inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-[#D4AF37] text-black font-bold rounded-none hover:bg-white transition-colors"
              >
                AUTOMATE YOUR PROCESSES <ArrowRight size={18} />
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
              Why Businesses Need<br />AI Automation Software
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-6">
              The average knowledge worker spends over 60% of their time on repetitive, low-value tasks — copying data between systems, chasing approvals over WhatsApp, and manually generating reports. This isn't just inefficient; it's costing you money, accuracy, and competitive advantage.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
              BusinessLogics builds AI automation software that targets your specific bottlenecks. We study your existing processes, identify the automation opportunities, and engineer smart triggers, notifications, and AI-powered bots that keep your operations moving — around the clock.
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
              Features of Our AI<br />Automation Software
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
              AI automation delivers ROI across every sector. We've helped companies in these industries eliminate manual drudgery and accelerate operational throughput.
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
              Benefits of BusinessLogics<br />AI Automation
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

      <section className="py-14 sm:py-24 px-6 bg-[#0A0A0A] border-y border-zinc-900">
        <div className="max-w-5xl mx-auto space-y-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">What is AI Automation</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              AI automation is the use of software and artificial intelligence to execute repetitive business tasks based on pre-defined rules, triggers, and approvals. Instead of relying on memory, chat messages, and manual follow-ups, teams run intelligent processes that move automatically from one step to the next.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Effective AI automation software does more than route tasks. It orchestrates data exchange between systems, sends contextual notifications, validates inputs using AI, and creates an audit trail for every decision, making operations faster and easier to govern.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Benefits of Automating Business Processes with AI</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              Automation turns process consistency into a competitive advantage. Teams spend less time coordinating routine tasks and more time on customer experience, quality, and growth initiatives.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Shorter cycle times for approvals, dispatch, invoicing, and escalations.</li>
              <li>Fewer errors from copy-paste handoffs across departments.</li>
              <li>Live status visibility for managers and stakeholders.</li>
              <li>Improved compliance with timestamped approval histories.</li>
              <li>Scalable operations without adding proportional headcount.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Features of Our AI Automation Platform</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              Our platform is designed for real-world operations where exceptions, deadlines, and integrations matter. We combine flexible automation design with governance controls so teams can automate with confidence.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Trigger-based routing for time, events, and data changes.</li>
              <li>Approval matrices with escalation and SLA tracking.</li>
              <li>Role-based permissions and full activity logs.</li>
              <li>API connectors for ERP software, CRM tools, and communication channels.</li>
              <li>Dashboards for throughput, exceptions, and bottleneck analysis.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Use Cases Across Industries</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              We implement AI automation software in industries where process reliability directly affects revenue, customer trust, and compliance. Common implementations include lead qualification and assignment, purchase approvals, vendor onboarding, service ticket routing, payroll reviews, and claims processing.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              If your objective is wider process transformation, we also deliver end-to-end <Link to="/business-process-automation" className="text-[#D4AF37] hover:text-white transition-colors">business process automation</Link> programs that combine workflows, integrations, and analytics into a unified operating model.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">FAQ</h2>
            <div className="space-y-5 text-zinc-300">
              <div>
                <h3 className="text-white font-semibold mb-1">How do we identify which processes to automate first?</h3>
                <p className="text-zinc-400">Start with high-volume, repetitive processes where delays and errors are currently expensive, such as approvals, invoicing, and status updates.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Can AI automation coexist with our current systems?</h3>
                <p className="text-zinc-400">Yes. We integrate automation layers with your existing ERP, CRM, and databases so you get value without disruptive replacements.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Do you support exception handling in automated processes?</h3>
                <p className="text-zinc-400">Yes. Automations include fallback paths, escalation rules, and human review checkpoints for non-standard scenarios.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">How quickly can teams be trained?</h3>
                <p className="text-zinc-400">Most teams can adopt the system within days because we build role-specific interfaces around existing responsibilities.</p>
              </div>
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
              <span className="italic font-serif text-[#D4AF37]">Business Processes</span>
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
