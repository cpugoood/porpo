import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24"
    >
      <motion.div
        initial={prefersReduced ? {} : "hidden"}
        animate="visible"
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          GOOOD
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10">
          Creating vibrant digital experiences
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Get in Touch
          </button>
        </div>
      </motion.div>

      {/* Floating 3D avatar placeholder (we use a lottie-like css animation) */}
      <motion.div
        className="mt-12 w-40 h-40 rounded-full border-2 border-white/20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        <span className="text-5xl">👨‍💻</span>
      </motion.div>
    </section>
  );
}
