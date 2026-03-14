import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | BusinessLogics';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'BusinessLogics is a boutique software agency founded in 2026 that builds custom, bespoke digital systems for businesses across India. Zero templates. Full ownership.');
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
    { value: '2026', label: 'FOUNDED' },
  ];

  const values = [
    { num: '01', title: 'Zero Templates', desc: 'Every line of code is written for your specific business logic — never copy-pasted from a boilerplate.' },
    { num: '02', title: 'Full Ownership', desc: 'You own 100% of the source code. No vendor lock-in, no recurring license fees, no surprises.' },
    { num: '03', title: 'Ongoing Support', desc: 'We stay with you post-launch. Software evolves as your business does, and we evolve with it.' },
    { num: '04', title: 'India-First Compliance', desc: 'Built-in GST, TDS, and PF compliance. We understand the regulatory landscape your business operates in.' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What type of companies do you typically work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with growing teams that need tailored systems, typically from SMB to mid-market scale.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you only build new products or also improve existing software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We build net-new systems and modernize legacy platforms through phased transitions.'
        }
      },
      {
        '@type': 'Question',
        name: 'How involved is our internal team during development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your team stays involved through discovery, milestone reviews, and user acceptance checkpoints.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can your team support SEO and growth after launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We provide search engine optimization services to improve discoverability and lead quality after launch.'
        }
      }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen relative overflow-hidden">
      <Helmet>
        <title>About BusinessLogics | Custom Software Company in India</title>
        <meta name="description" content="Learn about BusinessLogics, a software engineering company delivering custom business software, ERP software, workflow automation software, and search engine optimization services." />
        <meta name="keywords" content="About BusinessLogics, software development company, custom business software, ERP software company, workflow automation software" />
        <link rel="canonical" href="https://businesslogics.in/about" />
        <meta property="og:title" content="About BusinessLogics | Software Engineering Team" />
        <meta property="og:description" content="Meet the team behind BusinessLogics and learn how we build scalable software for operations-driven businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://businesslogics.in/about" />
        <meta property="og:image" content="https://businesslogics.in/logo.png" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <motion.h1
        style={{ y: yTitle, opacity: opacityTitle }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-12 text-white relative z-0 tracking-tight"
      >
        About BusinessLogics
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
          Founded in 2026, BusinessLogics was born out of frustration. We saw businesses struggling with bloated, expensive "one-size-fits-all" software that did 100 things poorly and nothing perfectly.
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

      <section className="mt-20 bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-6 sm:p-10 relative z-10 space-y-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Our mission is to help ambitious companies run with less friction by replacing patchwork tools with focused digital systems. We believe software should simplify decision-making, reduce manual dependency, and create operational confidence at every level of the organization.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            We specialize in high-impact systems where reliability and speed matter, including custom business software, ERP software, and workflow automation software initiatives.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Our Approach to Software Development</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            We follow a collaborative, engineering-first process that starts with deep process understanding before architecture decisions are made. Every system is planned for maintainability, integration readiness, and measurable business outcomes.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li>Discovery-driven planning with stakeholder and operator alignment.</li>
            <li>Modular system design for iterative delivery and scale.</li>
            <li>Quality assurance and real-user validation throughout development.</li>
            <li>Post-launch support focused on adoption and continuous improvement.</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            BusinessLogics builds software for teams that need precision and adaptability. We support manufacturing, retail, healthcare, logistics, professional services, and growth-stage digital businesses.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            In each sector, our goal is the same: translate business reality into stable software architecture so teams can execute faster, stay compliant, and grow without operational bottlenecks.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Why Businesses Choose Us</h2>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
            <li>Business-first engineering that maps software to operational reality.</li>
            <li>Transparent delivery with milestone-based communication.</li>
            <li>Long-term technical partnership instead of one-time handoff.</li>
            <li>Domain depth across business process automation and inventory management software.</li>
          </ul>
          <p className="text-zinc-400 leading-relaxed">
            If you are evaluating options, explore our <Link to="/services" className="text-[#D4AF37] hover:text-white transition-colors">software development services</Link> or review our <Link to="/work" className="text-[#D4AF37] hover:text-white transition-colors">work portfolio</Link>.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">FAQ</h2>
          <div className="space-y-4 text-zinc-300">
            <div>
              <h3 className="text-white font-semibold mb-1">What type of companies do you typically work with?</h3>
              <p className="text-zinc-400">We work with growing teams that need tailored systems, typically from SMB to mid-market scale.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Do you only build new products or also improve existing software?</h3>
              <p className="text-zinc-400">Both. We build net-new systems and modernize legacy platforms through phased transitions.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">How involved is our internal team during development?</h3>
              <p className="text-zinc-400">Your team stays involved through discovery, milestone reviews, and user acceptance checkpoints.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Can your team support SEO and growth after launch?</h3>
              <p className="text-zinc-400">Yes. We also provide search engine optimization services to improve discoverability and lead quality.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
