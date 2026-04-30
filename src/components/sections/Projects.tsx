import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const categories = ['All', 'web', 'mobile', 'ai', 'fun'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const prefersReduced = useReducedMotion();

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        className="section-heading text-center"
        ref={ref}
        initial={prefersReduced ? {} : "hidden"}
        animate={inView ? "visible" : "hidden"}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition-all ${
              filter === cat
                ? 'bg-white/20 border-white/40 text-white'
                : 'border-white/10 text-white/60 hover:border-white/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 flex flex-col group cursor-pointer"
              whileHover={{ scale: 1.03, rotateY: 5 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-white/70 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <a href={project.github} className="text-sm text-purple-300 hover:text-purple-100">GitHub</a>
                <a href={project.live} className="text-sm text-purple-300 hover:text-purple-100">Live</a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
