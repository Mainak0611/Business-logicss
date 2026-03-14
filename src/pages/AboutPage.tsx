import { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | BusinessLogics';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'BusinessLogics is a boutique software agency founded in 2025 that builds custom, bespoke digital systems for businesses across India. Zero templates. Full ownership.');
    }
  }, []);

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { mass: 0.1, stiffness: 100, damping: 20 });
  const yTitle = useTransform(smoothScrollY, [0, 500], [0, 150]);
  const opacityTitle = useTransform(smoothScrollY, [0, 300], [1, 0.3]);

  const stats = [
    { value: '100%', label: 'ON-TIME DELIVERY' },
    { value: '50+', label: 'MODULES BUILT' },
    { value: '0', label: 'TEMPLATES USED' },
    { value: '2025', label: 'FOUNDED' },
  ];

  const values = [
    { num: '01', title: 'Zero Templates', desc: 'Every line of code is written for your specific business logic — never copy-pasted from a boilerplate.' },
    { num: '02', title: 'Full Ownership', desc: 'You own 100% of the source code. No vendor lock-in, no recurring license fees, no surprises.' },
    { num: '03', title: 'Ongoing Support', desc: 'We stay with you post-launch. Software evolves as your business does, and we evolve with it.' },
    { num: '04', title: 'India-First Compliance', desc: 'Built-in GST, TDS, and PF compliance. We understand the regulatory landscape your business operates in.' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen relative overflow-hidden">
      <motion.h1
        style={{ y: yTitle, opacity: opacityTitle }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-12 text-white relative z-0 tracking-tight"
      >
        About Us
      </motion.h1>

      <div className="prose prose-invert prose-lg text-zinc-400 relative z-10">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-2xl text-white font-light mb-8"
        >
          We are a boutique software agency obsessed with <span className="text-[#D4AF37]">efficiency</span>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
          className="mb-6"
        >
          Founded in 2025, BusinessLogics was born out of frustration. We saw businesses struggling with bloated, expensive "one-size-fits-all" software that did 100 things poorly and nothing perfectly.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="mb-6"
        >
          We took a different approach. We believe software should be like a tailored suit — cut exactly to your measurements. We don't use templates. We don't outsource. We write clean, performant code that solves specific business problems.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="mb-12"
        >
          Our team consists of systems architects, UI designers, and full-stack engineers who understand business logic as well as they understand binary.
        </motion.p>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-zinc-800 pt-16 relative z-10"
      >
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{s.value}</div>
            <div className="text-sm text-zinc-500 font-mono">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Values */}
      <div className="mt-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest"
        >
          /// OUR VALUES
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-4xl font-bold text-white mb-10"
        >
          What we stand for
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-5 border border-zinc-900 rounded-xl hover:border-[#D4AF37]/30 transition-all group"
            >
              <span className="text-[#D4AF37]/40 font-mono text-xs pt-1 group-hover:text-[#D4AF37] transition-colors">{item.num}</span>
              <div>
                <h3 className="text-white font-bold mb-1">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
