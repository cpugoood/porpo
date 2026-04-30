import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const prefersReduced = useReducedMotion();

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="section-heading text-center"
        ref={ref}
        initial={prefersReduced ? {} : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        Skills & Expertise
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center"
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-28 h-28">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                />
                <motion.path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="url(#grad)"
                  strokeWidth="2"
                  strokeDasharray={`${skill.level}, 100`}
                  initial={{ strokeDasharray: '0, 100' }}
                  whileInView={{ strokeDasharray: `${skill.level}, 100` }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
                {skill.level}%
              </span>
            </div>
            <p className="mt-3 text-white/80">{skill.name}</p>
          </motion.div>
        ))}
      </div>
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff00cc" />
            <stop offset="100%" stopColor="#333399" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
