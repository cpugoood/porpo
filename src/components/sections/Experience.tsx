import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const prefersReduced = useReducedMotion();

  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="section-heading text-center"
        ref={ref}
        initial={prefersReduced ? {} : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className="relative border-l-2 border-white/20 pl-8 ml-4 md:ml-0 md:pl-12 md:border-l-2">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            className="mb-10 relative"
            initial={prefersReduced ? {} : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-[2.2rem] md:-left-[3.2rem] w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center text-white font-bold">
              {exp.logo}
            </div>
            <div className="glass p-6 rounded-2xl">
              <p className="text-sm text-white/60">{exp.year}</p>
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <p className="text-purple-300">{exp.company}</p>
              <p className="text-white/70 mt-2">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
