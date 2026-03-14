import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does custom business software development usually take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most projects ship an initial production version in 8 to 16 weeks depending on scope, integrations, and migration complexity.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can you modernize an existing legacy system instead of rebuilding from scratch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We often phase modernization so your team keeps operating while we progressively replace fragile modules.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will the software integrate with our current tools?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We design APIs and connectors for accounting systems, ERPs, CRMs, payment gateways, and internal databases.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do we own the code and data?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. You retain full ownership of source code, deployment assets, and business data.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Custom Business Software Development | BusinessLogics</title>
        <meta name="description" content="Custom business software development for Indian businesses. Build scalable systems tailored to your workflows with BusinessLogics." />
        <meta name="keywords" content="custom business software, custom software development, bespoke business software, business software development company" />
        <link rel="canonical" href="https://businesslogics.in/custom-business-software" />
        <meta property="og:title" content="Custom Business Software Development | BusinessLogics" />
        <meta property="og:description" content="Get custom business software built around your process logic, integrations, and growth roadmap." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://businesslogics.in/custom-business-software" />
        <meta property="og:image" content="https://businesslogics.in/logo.png" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

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
              <span className="italic font-serif text-[#D4AF37]">Software Development</span>
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

      <section className="py-14 sm:py-24 px-6 bg-[#0A0A0A] border-y border-zinc-900">
        <div className="max-w-5xl mx-auto space-y-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">What is Custom Business Software</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Custom business software is a purpose-built digital platform designed around your real operating model, not a generic checklist of features made for everyone. Unlike off-the-shelf products, a custom system reflects your approvals, pricing logic, customer lifecycle, data dependencies, and reporting standards from day one.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              For growing companies, this matters because your competitive advantage often lives in process details. When software is built around those details, teams move faster, decisions become more accurate, and leaders get visibility without asking five departments for spreadsheet exports.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Benefits of Custom Software for Businesses</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              A tailored platform creates compounding value because every release maps to your business goals. Teams spend less time on manual workarounds and more time on execution, while management gains reliable data for planning and forecasting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Process-fit architecture that reduces rework and exceptions.</li>
              <li>Higher adoption because screens and flows match day-to-day operations.</li>
              <li>Built-in integrations with accounting, ERP software, and workflow tools.</li>
              <li>Improved security through role-based permissions and audit trails.</li>
              <li>Lower long-term cost than stacked subscriptions across multiple tools.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Our Custom Software Development Process</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              BusinessLogics follows a practical engineering process that balances speed with stability. We start with process discovery, build a technical blueprint, ship in milestones, and optimize with real usage data after launch.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li><strong>Discovery:</strong> Workflow mapping, stakeholder interviews, and requirements prioritization.</li>
              <li><strong>Architecture:</strong> Modular design for performance, scalability, and future integrations.</li>
              <li><strong>Development:</strong> Incremental releases with QA checkpoints and user feedback loops.</li>
              <li><strong>Go-live:</strong> Migration support, team onboarding, and production hardening.</li>
              <li><strong>Continuous improvement:</strong> Feature expansion and analytics-led iteration.</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-5">
              Many clients pair this foundation with our <Link to="/erp-software" className="text-[#D4AF37] hover:text-white transition-colors">ERP software</Link> implementation or our <Link to="/workflow-automation-software" className="text-[#D4AF37] hover:text-white transition-colors">workflow automation software</Link> capabilities to unify operations end to end.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              We build custom systems for companies that cannot afford rigid software. From manufacturing operations that need traceability to service businesses that need SLA-driven delivery, our solutions adapt to domain complexity instead of forcing compromise.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Manufacturing and distribution with procurement and production dependencies.</li>
              <li>Healthcare operations requiring structured records and controlled access.</li>
              <li>Retail and e-commerce with catalog, order, and inventory management software needs.</li>
              <li>Financial services with strict approvals, logs, and compliance workflows.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">FAQ</h2>
            <div className="space-y-5 text-zinc-300">
              <div>
                <h3 className="text-white font-semibold mb-1">How long does custom business software development usually take?</h3>
                <p className="text-zinc-400">Most projects ship an initial production version in 8 to 16 weeks depending on scope, integrations, and migration complexity.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Can you modernize an existing legacy system instead of rebuilding from scratch?</h3>
                <p className="text-zinc-400">Yes. We often phase modernization so your team keeps operating while we progressively replace fragile modules.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Will the software integrate with our current tools?</h3>
                <p className="text-zinc-400">Yes. We design APIs and connectors for accounting systems, ERPs, CRMs, payment gateways, and internal databases.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Do we own the code and data?</h3>
                <p className="text-zinc-400">Absolutely. You retain full ownership of source code, deployment assets, and business data.</p>
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
