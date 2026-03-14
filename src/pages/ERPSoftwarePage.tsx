import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How is custom ERP different from off-the-shelf ERP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Custom ERP is built around your business logic, reducing process mismatch and expensive workarounds common with generic systems.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can we deploy modules in phases?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We typically launch high-priority modules first, then add finance, inventory, HR, and analytics in controlled milestones.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will migration from our current tools be supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We handle data mapping, validation, and cutover planning to keep operational risk low during transition.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is ERP software suitable for mid-sized businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Mid-sized organizations often see the fastest ROI because ERP removes bottlenecks that appear during growth.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Custom ERP Software Development | BusinessLogics</title>
        <meta name="description" content="Custom ERP software development for manufacturing, retail, and logistics companies. Automate operations and manage inventory with BusinessLogics ERP." />
        <meta name="keywords" content="ERP software, custom ERP software, ERP system development, ERP solution, business ERP software" />
        <link rel="canonical" href="https://businesslogics.in/erp-software" />
        <meta property="og:title" content="Custom ERP Software | BusinessLogics" />
        <meta property="og:description" content="Build scalable ERP systems tailored for your business operations and compliance needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://businesslogics.in/erp-software" />
        <meta property="og:image" content="https://businesslogics.in/logo.png" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

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
              Custom ERP<br />
              <span className="italic font-serif text-[#D4AF37]">Software</span>
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

      <section className="py-14 sm:py-24 px-6 bg-[#0A0A0A] border-y border-zinc-900">
        <div className="max-w-5xl mx-auto space-y-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">What is ERP Software</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              ERP software is an integrated operating system for your business. It connects departments such as finance, procurement, inventory, HR, sales, and operations in one consistent data model so everyone works from the same source of truth.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              A custom ERP software implementation is especially valuable for organizations with unique rules, multi-location workflows, or compliance-heavy processes that generic tools cannot model accurately.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Core ERP Modules</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              Our ERP architecture is modular so you can prioritize immediate needs and add capabilities as your organization scales.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Finance and accounting with GST workflows, ledgers, and tax-ready reports.</li>
              <li>Procurement and vendor lifecycle management.</li>
              <li>Inventory management software capabilities for stock, transfer, and valuation.</li>
              <li>Sales, order management, and fulfillment visibility.</li>
              <li>HR, payroll, and role-based access governance.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Benefits of Custom ERP Systems</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              A well-implemented ERP system improves operational confidence because decisions are based on complete, current data instead of disconnected reports. Teams coordinate faster, duplicate effort is reduced, and audits become simpler.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Real-time cross-department reporting and forecasting.</li>
              <li>Standardized workflows with fewer manual exceptions.</li>
              <li>Improved cash-flow visibility from procurement to invoicing.</li>
              <li>Higher data quality for planning, analytics, and compliance.</li>
              <li>Scalable platform that grows with new teams and locations.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Why Choose BusinessLogics ERP</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We build ERP software around the operational reality of Indian businesses: local compliance, mixed legacy environments, and evolving process requirements. Instead of forcing your teams to fit a rigid template, we design systems that respect how your business actually runs.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Our ERP engagements often connect directly with <Link to="/inventory-management-software" className="text-[#D4AF37] hover:text-white transition-colors">inventory management software</Link> for stock-intensive operations and enterprise <Link to="/business-process-automation" className="text-[#D4AF37] hover:text-white transition-colors">business process automation</Link> for approval and orchestration efficiency.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">FAQ</h2>
            <div className="space-y-5 text-zinc-300">
              <div>
                <h3 className="text-white font-semibold mb-1">How is custom ERP different from off-the-shelf ERP?</h3>
                <p className="text-zinc-400">Custom ERP is built around your business logic, reducing process mismatch and expensive workarounds common with generic systems.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Can we deploy modules in phases?</h3>
                <p className="text-zinc-400">Yes. We typically launch high-priority modules first, then add finance, inventory, HR, and analytics in controlled milestones.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Will migration from our current tools be supported?</h3>
                <p className="text-zinc-400">Yes. We handle data mapping, validation, and cutover planning to keep operational risk low during transition.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Is ERP software suitable for mid-sized businesses?</h3>
                <p className="text-zinc-400">Absolutely. Mid-sized organizations often see the fastest ROI because ERP removes bottlenecks that appear during growth.</p>
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
