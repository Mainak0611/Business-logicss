import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Code2,
  Zap,
  LayoutDashboard,
  Package,
  GitMerge,
  Search,
  ArrowRight,
} from 'lucide-react';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Our Services | BusinessLogics';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Explore BusinessLogics services: custom business software, workflow automation, ERP, inventory management, business process automation, and SEO for Indian businesses.');
    }
  }, []);

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { mass: 0.1, stiffness: 100, damping: 20 });
  const yBg = useTransform(smoothScrollY, [0, 1000], [0, 200]);

  const services = [
    {
      icon: <Code2 />,
      title: 'Custom Business Software',
      desc: 'Bespoke software engineered around your exact workflows and business logic.',
      path: '/custom-business-software',
    },
    {
      icon: <Zap />,
      title: 'Workflow Automation',
      desc: 'Automate multi-step business processes with smart triggers, bots, and integrations.',
      path: '/workflow-automation-software',
    },
    {
      icon: <LayoutDashboard />,
      title: 'ERP Software',
      desc: 'Unify finance, HR, inventory, and operations in one custom ERP platform.',
      path: '/erp-software',
    },
    {
      icon: <Package />,
      title: 'Inventory Management',
      desc: 'Real-time stock tracking, barcode scanning, and automated reorder across warehouses.',
      path: '/inventory-management-software',
    },
    {
      icon: <GitMerge />,
      title: 'Business Process Automation',
      desc: 'Transform manual, error-prone operations into intelligent self-running systems.',
      path: '/business-process-automation',
    },
    {
      icon: <Search />,
      title: 'Search Engine Optimization',
      desc: 'Rank on page 1 of Google. Technical SEO, keyword strategy, and content optimization.',
      path: '/search-engine-optimization',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you provide end-to-end delivery from strategy to support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We cover discovery, architecture, development, deployment, and post-launch optimization.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can we start with one module and expand later?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our modular approach allows phased delivery without forcing a full platform migration upfront.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do you ensure software fits our process?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We map your workflow in detail before development and validate each release with user feedback loops.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do your services include SEO for software-led growth?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our search engine optimization services can be combined with software implementation to improve discovery and conversion outcomes.'
        }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen relative overflow-hidden">
      <Helmet>
        <title>Our Software Development Services | BusinessLogics</title>
        <meta name="description" content="Explore BusinessLogics services including custom business software, ERP software, workflow automation software, inventory management software, business process automation, and SEO services." />
        <meta name="keywords" content="software development services, custom business software, ERP software, workflow automation software, inventory management software, business process automation" />
        <link rel="canonical" href="https://businesslogics.in/services" />
        <meta property="og:title" content="Our Software Development Services | BusinessLogics" />
        <meta property="og:description" content="Discover software services tailored for operational efficiency, automation, and scalable growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://businesslogics.in/services" />
        <meta property="og:image" content="https://businesslogics.in/logo.png" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <motion.div style={{ y: yBg }} className="absolute right-[-10%] top-0 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <motion.h1
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }}
        className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
      >
        Our Software Development Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className="text-xl text-zinc-400 mb-20 max-w-2xl"
      >
        Comprehensive modules designed to fit perfectly into your existing workflow. We don't force you to adapt to software; we build software that adapts to you.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
          >
            <Link
              to={service.path}
              className="block bg-[#111] p-8 rounded-2xl border border-zinc-800 hover:border-[#D4AF37] transition-all group h-full"
            >
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{service.title}</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">{service.desc}</p>
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                LEARN MORE <ArrowRight size={12} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <section className="mt-20 sm:mt-28 bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-6 sm:p-10 relative z-10 space-y-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Custom Software Development</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Our custom business software engagements start with operational discovery, not generic feature lists. We design systems around your processes, approvals, data flows, and reporting needs so the platform becomes a true operating advantage.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li>Purpose-built architecture for your exact workflows and growth goals.</li>
            <li>Secure APIs for integration with existing products and partner systems.</li>
            <li>Milestone-based delivery with measurable outcomes in each release.</li>
          </ul>
          <p className="text-zinc-400 leading-relaxed mt-4">
            Explore our dedicated <Link to="/custom-business-software" className="text-[#D4AF37] hover:text-white transition-colors">custom business software</Link> page for complete implementation details.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">ERP Solutions</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            We deliver modular ERP solutions that unify finance, procurement, inventory, and operations into one reliable source of truth. This reduces reconciliation effort, improves planning quality, and helps leadership make decisions from real-time data.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li>Department-level modules with phased rollout flexibility.</li>
            <li>Compliance-oriented reporting and access control structures.</li>
            <li>High-availability architecture for business-critical operations.</li>
          </ul>
          <p className="text-zinc-400 leading-relaxed mt-4">
            Learn more about our <Link to="/erp-software" className="text-[#D4AF37] hover:text-white transition-colors">ERP software</Link> capabilities.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Workflow Automation</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Our workflow automation software and business process automation services remove repetitive effort from approvals, notifications, handoffs, and status tracking. Teams gain speed without sacrificing governance.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li>Trigger-based workflows with escalation and SLA controls.</li>
            <li>Integration with ERP, CRM, HR, and communication channels.</li>
            <li>Exception handling paths for real-world process variability.</li>
          </ul>
          <p className="text-zinc-400 leading-relaxed mt-4">
            See our <Link to="/workflow-automation-software" className="text-[#D4AF37] hover:text-white transition-colors">workflow automation software</Link> and <Link to="/business-process-automation" className="text-[#D4AF37] hover:text-white transition-colors">business process automation</Link> pages.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Inventory Systems</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            We build inventory management software that supports high-volume catalog operations, warehouse coordination, and purchase planning. Systems include role-based controls, traceability, and analytics for better stock decisions.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li>Multi-location stock visibility and movement history.</li>
            <li>Barcode and batch workflows for faster floor operations.</li>
            <li>Automated reorder and valuation-aligned reporting.</li>
          </ul>
          <p className="text-zinc-400 leading-relaxed mt-4">
            Review our <Link to="/inventory-management-software" className="text-[#D4AF37] hover:text-white transition-colors">inventory management software</Link> solutions, and for growth through digital visibility explore <Link to="/search-engine-optimization" className="text-[#D4AF37] hover:text-white transition-colors">search engine optimization services</Link>.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">FAQ</h2>
          <div className="space-y-4 text-zinc-300">
            <div>
              <h3 className="text-white font-semibold mb-1">Do you provide end-to-end delivery from strategy to support?</h3>
              <p className="text-zinc-400">Yes. We cover discovery, architecture, development, deployment, and post-launch optimization.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Can we start with one module and expand later?</h3>
              <p className="text-zinc-400">Yes. Our modular approach allows phased delivery without forcing a full platform migration upfront.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">How do you ensure software fits our process?</h3>
              <p className="text-zinc-400">We map your workflow in detail before development and validate each release with user feedback loops.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Do your services include SEO for software-led growth?</h3>
              <p className="text-zinc-400">Yes. Our search engine optimization services can be combined with software implementation to improve discovery and conversion outcomes.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
