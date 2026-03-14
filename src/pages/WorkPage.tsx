import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';

export default function WorkPage() {
  useEffect(() => {
    document.title = 'Selected Work | BusinessLogics';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'A showcase of high-performance custom software systems engineered by BusinessLogics for clients across India.');
    }
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const projectImages = [img1, img2, img3, img4, img5, img6, img7];

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { mass: 0.1, stiffness: 100, damping: 20 });
  const yBg = useTransform(smoothScrollY, [0, 1000], [0, 200]);

  const nextSlide = (e: React.MouseEvent) => { e.stopPropagation(); setCurrentSlide((prev) => (prev + 1) % projectImages.length); };
  const prevSlide = (e: React.MouseEvent) => { e.stopPropagation(); setCurrentSlide((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1)); };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute left-[10%] top-[20%] w-[300px] h-[300px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.h1
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }}
        className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
      >
        Selected Work
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
        className="text-xl text-zinc-400 mb-20 max-w-2xl"
      >
        A showcase of high-performance systems we've engineered for clients.
      </motion.p>

      <div className="space-y-20 relative z-10">
        <div className="group relative grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-[#D4AF37]/50 transition-all relative group/slider"
          >
            <img src={projectImages[currentSlide]} alt="Project Screenshot" className="w-full h-full object-cover transition-opacity duration-500" />
            <div className="absolute inset-0 bg-black/10 group-hover/slider:bg-transparent transition-colors" />
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
              <button onClick={prevSlide} className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-[#D4AF37] hover:text-black transition-all"><ChevronLeft size={20} /></button>
              <button onClick={nextSlide} className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-[#D4AF37] hover:text-black transition-all"><ChevronRight size={20} /></button>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {projectImages.map((_, idx) => (<div key={idx} className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-[#D4AF37] w-4' : 'bg-white/50'}`} />))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="text-[#D4AF37] font-mono text-xs mb-4">FEATURED PROJECT</div>
            <h2 className="text-3xl font-bold text-white mb-4">Enquiry Tracking System</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">A specialized dashboard for managing customer enquiries. Streamline lead follow-ups, track status changes from pending to conversion, and ensure no potential client falls through the cracks.</p>
            <div className="flex gap-2 mb-8">
              <span className="px-3 py-1 bg-zinc-900 text-zinc-500 text-xs rounded border border-zinc-800">REACT</span>
              <span className="px-3 py-1 bg-zinc-900 text-zinc-500 text-xs rounded border border-zinc-800">NODE.JS</span>
              <span className="px-3 py-1 bg-zinc-900 text-zinc-500 text-xs rounded border border-zinc-800">TAILWIND</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
