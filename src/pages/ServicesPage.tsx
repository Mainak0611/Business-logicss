import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen relative overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute right-[-10%] top-0 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <motion.h1
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }}
        className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
      >
        Our Services
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
    </div>
  );
}
