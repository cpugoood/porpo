import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/solid';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const prefersReduced = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="section-heading text-center"
        ref={ref}
        initial={prefersReduced ? {} : "hidden"}
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="glass p-8 rounded-3xl text-white/90"
          initial={prefersReduced ? {} : { opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed mb-4">
            I'm GOOOD, a frontend developer obsessed with crafting delightful user interfaces. 
            I blend creativity with code to build immersive digital worlds.
          </p>
          <p className="text-lg leading-relaxed">
            When I'm not coding, you'll find me brewing specialty coffee at exactly 93°C or exploring generative art.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={prefersReduced ? {} : { opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {['React', 'TypeScript', 'Tailwind', 'Node.js', 'Three.js', 'Figma'].map(tech => (
            <motion.span
              key={tech}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 hover:bg-white/20 hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
