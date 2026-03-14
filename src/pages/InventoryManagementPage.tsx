import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Package, ScanLine, BarChart3, Bell, RefreshCw, ShieldCheck } from 'lucide-react';

export default function InventoryManagementPage() {
  useEffect(() => {
    document.title = 'Inventory Management Software | BusinessLogics';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Custom inventory management software by BusinessLogics. Real-time stock tracking, multi-warehouse management, barcode scanning, and automated reorder alerts built for your business.');
    }
  }, []);

  const features = [
    { icon: <ScanLine size={20} />, title: 'Barcode & QR Scanning', desc: 'Instant item lookup and movement tracking via barcode and QR code scanning on any device.' },
    { icon: <Package size={20} />, title: 'Multi-Warehouse Management', desc: 'Track stock across multiple locations, warehouses, and transit — all from one screen.' },
    { icon: <RefreshCw size={20} />, title: 'FIFO / LIFO / Batch Tracking', desc: 'Industry-standard costing methods with full batch, serial number, and expiry tracking.' },
    { icon: <Bell size={20} />, title: 'Automated Reorder Alerts', desc: 'Set stock thresholds and get automated alerts or purchase orders when stock levels drop.' },
    { icon: <BarChart3 size={20} />, title: 'Inventory Analytics', desc: 'Identify slow-moving stock, high-value items, and turnover rates with live dashboards.' },
    { icon: <ShieldCheck size={20} />, title: 'Audit & Cycle Counting', desc: 'Scheduled and on-demand stock audits with variance reports and approval workflows.' },
  ];

  const industries = ['Manufacturing & Production', 'FMCG & Distribution', 'Retail & Supermarkets', 'Pharma & Healthcare', 'E-Commerce & D2C', 'Automotive & Spare Parts'];

  const benefits = [
    'Eliminate stockouts and excess inventory simultaneously',
    'Reduce inventory carrying costs with optimized reorder points',
    'Real-time stock visibility across all warehouses and locations',
    'Prevent theft and discrepancies with full audit trail',
    'Seamless integration with your billing, ERP, and GST systems',
    'Mobile-first interface for warehouse staff on the floor',
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can inventory software handle multiple warehouses and stores?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our system supports location-level stock, inter-warehouse transfers, and consolidated reporting.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you support barcode-based operations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Barcode and QR workflows are supported for receiving, picking, transfer, and audits.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can we enforce approval workflows for stock adjustments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You can configure maker-checker flows and maintain complete adjustment logs for compliance.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will this work for fast-moving SKU catalogs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The platform is optimized for high-volume updates, rapid scanning, and real-time dashboarding.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Inventory Management Software | BusinessLogics</title>
        <meta name="description" content="Inventory management software with barcode scanning, stock automation, and multi-warehouse visibility. Built by BusinessLogics for scale-ready operations." />
        <meta name="keywords" content="inventory management software, stock management system, warehouse inventory software, inventory automation" />
        <link rel="canonical" href="https://businesslogics.in/inventory-management-software" />
        <meta property="og:title" content="Inventory Management Software | BusinessLogics" />
        <meta property="og:description" content="Track stock in real time and automate replenishment with custom inventory systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://businesslogics.in/inventory-management-software" />
        <meta property="og:image" content="https://businesslogics.in/logo.png" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="relative py-20 sm:py-32 px-6 overflow-hidden border-b border-[#D4AF37]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#D4AF37] opacity-[0.05] blur-[150px] rounded-full" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono mb-6 tracking-widest">INVENTORY MANAGEMENT</span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              Inventory Management<br /><span className="italic font-serif text-[#D4AF37]">Software</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
              Gain complete, real-time control over your stock. BusinessLogics builds custom inventory management software that tracks every unit — from purchase order to sale — with precision and zero manual errors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/" onClick={() => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)} className="inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-[#D4AF37] text-black font-bold hover:bg-white transition-colors">
                GET A DEMO <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 border border-zinc-700 hover:border-[#D4AF37] text-zinc-400 hover:text-white transition-all font-mono text-sm">VIEW ALL SERVICES</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-24 px-6 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// THE INVENTORY CHALLENGE</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Why Businesses Need<br />Inventory Management Software</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-6">
              For product-based businesses, inventory is your largest asset and your biggest operational risk. Too much stock ties up capital; too little loses sales. Managing this balance through spreadsheets leads to stockouts, shrinkage, and customer dissatisfaction.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
              BusinessLogics builds inventory management software that gives you live visibility, smart automation, and deep analytics — calibrated to your scale, industry compliance, and team's workflows.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-24 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// CAPABILITIES</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-14 leading-tight">Features of Our Inventory<br />Management Software</h2>
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
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Industries We Serve with<br />Inventory Solutions</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-12">Every industry has unique inventory challenges. We've solved them across these sectors with purpose-built software.</p>
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
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">Benefits of BusinessLogics<br />Inventory Software</h2>
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
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Why Businesses Need Inventory Management</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Inventory directly impacts cash flow, fulfillment reliability, and customer trust. Without a dedicated inventory management software system, businesses often rely on delayed manual updates that hide stock risks until they become expensive problems.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              A modern inventory platform creates real-time visibility across purchase, storage, transfer, and dispatch so teams can make faster, more accurate decisions and avoid both overstocking and stockouts.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Key Features</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              We design inventory management software with practical features for operational teams, warehouse leads, and management reporting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Live stock tracking across warehouses, bins, and in-transit inventory.</li>
              <li>Batch, serial, and expiry handling for regulated or perishable goods.</li>
              <li>Automated reorder suggestions using configurable thresholds.</li>
              <li>Cycle-count workflows with discrepancy and adjustment controls.</li>
              <li>Role-based access and full inventory audit history.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Inventory Automation Benefits</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              Automation improves consistency across procurement, receiving, allocation, and dispatch. Teams no longer depend on manual reminders and spreadsheet reconciliation to keep operations aligned.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Lower carrying costs through better replenishment timing.</li>
              <li>Faster fulfillment with accurate pick-and-pack workflows.</li>
              <li>Reduced shrinkage from stronger movement traceability.</li>
              <li>Higher customer satisfaction through improved stock availability.</li>
              <li>More confident planning with trustworthy consumption and turnover data.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Integration with ERP Systems</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Inventory is strongest when connected to purchasing, sales, finance, and planning workflows. That is why we architect inventory modules with clean API integration and event synchronization.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              If you are scaling operations across multiple departments, we can connect inventory management software with your <Link to="/erp-software" className="text-[#D4AF37] hover:text-white transition-colors">ERP software</Link> implementation to keep stock valuation, procurement, and order commitments fully aligned.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">FAQ</h2>
            <div className="space-y-5 text-zinc-300">
              <div>
                <h3 className="text-white font-semibold mb-1">Can inventory software handle multiple warehouses and stores?</h3>
                <p className="text-zinc-400">Yes. Our system supports location-level stock, inter-warehouse transfers, and consolidated reporting.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Do you support barcode-based operations?</h3>
                <p className="text-zinc-400">Yes. Barcode and QR workflows are supported for receiving, picking, transfer, and audits.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Can we enforce approval workflows for stock adjustments?</h3>
                <p className="text-zinc-400">Yes. You can configure maker-checker flows and maintain complete adjustment logs for compliance.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Will this work for fast-moving SKU catalogs?</h3>
                <p className="text-zinc-400">Yes. The platform is optimized for high-volume updates, rapid scanning, and real-time dashboarding.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-24 px-6 bg-[#080808] border-t border-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Take Control of<br /><span className="italic font-serif text-[#D4AF37]">Your Inventory</span></h2>
            <p className="text-zinc-400 text-lg mb-10">Stop losing money to stockouts and shrinkage. Get a custom inventory management system built for your exact product catalog and warehouse setup.</p>
            <Link to="/" onClick={() => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)} className="inline-flex items-center gap-2 px-6 py-4 sm:px-10 sm:py-5 bg-[#D4AF37] text-black font-bold text-lg hover:bg-white transition-colors">
              START YOUR PROJECT <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
