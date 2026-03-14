import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Search, BarChart3, Globe, FileText, Link2, TrendingUp } from 'lucide-react';

export default function SEOPage() {
  useEffect(() => {
    document.title = 'Search Engine Optimization Services | BusinessLogics';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'BusinessLogics offers expert search engine optimization services for Indian businesses. Technical SEO, keyword research, on-page optimization, and content strategy to rank higher on Google.'
      );
    }
  }, []);

  const features = [
    { icon: <Search size={20} />, title: 'Technical SEO Audit', desc: 'Deep-dive audits covering site speed, Core Web Vitals, crawlability, indexation, and structured data markup.' },
    { icon: <BarChart3 size={20} />, title: 'Keyword Research & Strategy', desc: 'Data-driven keyword mapping using search volume, intent, and competition to target the right queries for your business.' },
    { icon: <FileText size={20} />, title: 'On-Page Optimization', desc: 'Optimized title tags, meta descriptions, H1–H6 hierarchy, internal linking, and content improvements page by page.' },
    { icon: <Globe size={20} />, title: 'Local SEO', desc: 'Google Business Profile optimization, local citations, and geo-targeted content to dominate local search results in your city.' },
    { icon: <Link2 size={20} />, title: 'Link Building', desc: 'High-authority backlink acquisition through white-hat outreach, digital PR, and industry-relevant content partnerships.' },
    { icon: <TrendingUp size={20} />, title: 'SEO Analytics & Reporting', desc: 'Monthly reports with rank tracking, organic traffic insights, and actionable recommendations — no jargon, just results.' },
  ];

  const industries = ['IT & SaaS Companies', 'E-Commerce & D2C', 'Healthcare & Clinics', 'Education & EdTech', 'Real Estate', 'Manufacturing & B2B'];

  const benefits = [
    'Rank on page 1 of Google for high-intent business keywords',
    'Sustainable organic traffic that doesn\'t stop when ad budgets do',
    'Full source-code and content ownership — no lock-in',
    'SEO built into every page from day one, not bolted on later',
    'Transparent monthly reporting with real traffic and ranking data',
    'India-focused strategy: GST, local markets, regional search intent',
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does SEO usually take to show results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most websites see measurable ranking and traffic movement within 3 to 6 months, depending on competition and current site quality.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide technical and content SEO together?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our search engine optimization services combine technical fixes, on-page optimization, and strategy-led content improvements.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can SEO help local businesses in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Local SEO optimizes geo-specific intent, Google Business Profile visibility, and location pages for regional discovery.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will we receive reporting and recommendations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You receive regular performance updates with ranking trends, traffic diagnostics, and prioritized next actions.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Search Engine Optimization Services | BusinessLogics</title>
        <meta name="description" content="Search engine optimization services for Indian businesses. Improve rankings with technical SEO, on-page optimization, and content strategy from BusinessLogics." />
        <meta name="keywords" content="search engine optimization services, SEO services India, technical SEO, on-page SEO, business SEO strategy" />
        <link rel="canonical" href="https://businesslogics.in/search-engine-optimization" />
        <meta property="og:title" content="Search Engine Optimization Services | BusinessLogics" />
        <meta property="og:description" content="Grow organic traffic and rankings with technical and content-led SEO services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://businesslogics.in/search-engine-optimization" />
        <meta property="og:image" content="https://businesslogics.in/logo.png" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 sm:py-32 px-6 overflow-hidden border-b border-[#D4AF37]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-[#D4AF37] opacity-[0.05] blur-[150px] rounded-full" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono mb-6 tracking-widest">
              SEARCH ENGINE OPTIMIZATION
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              Search Engine<br />
              <span className="italic font-serif text-[#D4AF37]">Optimization Services</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
              Your customers are searching for your solution right now — are you showing up? BusinessLogics delivers data-driven search engine optimization that puts your business at the top of Google for the keywords that drive real revenue.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/"
                onClick={() => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)}
                className="inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-[#D4AF37] text-black font-bold hover:bg-white transition-colors"
              >
                GET A FREE SEO AUDIT <ArrowRight size={18} />
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
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// THE VISIBILITY GAP</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Why Businesses Need<br />Search Engine Optimization
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-6">
              Over 90% of online experiences begin with a search engine. If your business isn't ranking on page 1 of Google for your target keywords, that traffic — and those customers — are going to your competitors. Paid ads stop the moment you pause spending. SEO compounds over time.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
              BusinessLogics treats SEO not as a marketing afterthought but as an engineering discipline. We combine technical precision — site architecture, schema markup, Core Web Vitals — with content strategy and authority building to deliver rankings that stick and traffic that converts. Whether you're a local business in Pune or a SaaS scaling across India, we build the search foundation your growth depends on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 sm:py-24 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-[#D4AF37] font-mono text-xs mb-4 tracking-widest">/// OUR SEO SERVICES</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-14 leading-tight">
              Features of Our<br />SEO Services
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
              Industries We Help<br />Rank on Google
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-12">
              From local service businesses to national e-commerce brands, our SEO strategies are tailored to each industry's search landscape, competitor landscape, and buyer intent.
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
              Benefits of BusinessLogics<br />SEO Services
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
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">What is SEO</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              SEO, or search engine optimization, is the process of improving a website so search engines can crawl, understand, and rank it for relevant user queries. Strong SEO aligns technical quality, content clarity, and topical authority so your website appears when potential customers are actively searching.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Search engine optimization services are most effective when integrated into product, design, and content planning rather than treated as a last-step checklist.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Technical SEO</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              Technical SEO ensures your site can be discovered and interpreted correctly by search engines. It also improves user experience factors that influence rankings and conversions.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Core Web Vitals, page speed, and mobile performance tuning.</li>
              <li>Crawl management with clean architecture and internal links.</li>
              <li>Schema markup and structured data validation.</li>
              <li>Indexation controls for canonicalization and duplicate handling.</li>
              <li>Technical monitoring for broken pages, redirects, and coverage issues.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">On-Page SEO</h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              On-page SEO focuses on content relevance and information architecture. We optimize headings, metadata, semantic hierarchy, and intent alignment so each page communicates a clear topic to both users and search engines.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Intent-driven keyword mapping and page-level targeting.</li>
              <li>H1, H2, and H3 hierarchy improvements for topic clarity.</li>
              <li>Internal linking patterns that guide users and distribute authority.</li>
              <li>Content improvements focused on accuracy, depth, and trust signals.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">Why SEO is Important for Businesses</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              SEO compounds. Unlike paid campaigns that pause when spend stops, optimized pages can continue attracting qualified traffic over time. This creates predictable acquisition economics and stronger brand credibility in your category.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              At BusinessLogics, our <Link to="/services" className="text-[#D4AF37] hover:text-white transition-colors">software development services</Link> and SEO programs are coordinated so performance, content, and conversion quality improve together.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">FAQ</h2>
            <div className="space-y-5 text-zinc-300">
              <div>
                <h3 className="text-white font-semibold mb-1">How long does SEO usually take to show results?</h3>
                <p className="text-zinc-400">Most websites see measurable ranking and traffic movement within 3 to 6 months, depending on competition and current site quality.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Do you provide technical and content SEO together?</h3>
                <p className="text-zinc-400">Yes. Our search engine optimization services combine technical fixes, on-page optimization, and strategy-led content improvements.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Can SEO help local businesses in India?</h3>
                <p className="text-zinc-400">Absolutely. Local SEO optimizes geo-specific intent, Google Business Profile visibility, and location pages for regional discovery.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Will we receive reporting and recommendations?</h3>
                <p className="text-zinc-400">Yes. You receive regular performance updates with ranking trends, traffic diagnostics, and prioritized next actions.</p>
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
              Ready to Rank Higher<br />
              <span className="italic font-serif text-[#D4AF37]">on Google?</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              Get a free SEO audit of your website. We'll identify exactly where you're losing rankings and what it will take to dominate your target keywords.
            </p>
            <Link
              to="/"
              onClick={() => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)}
              className="inline-flex items-center gap-2 px-6 py-4 sm:px-10 sm:py-5 bg-[#D4AF37] text-black font-bold text-lg hover:bg-white transition-colors"
            >
              GET MY FREE AUDIT <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
