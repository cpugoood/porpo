import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'animate' | 'exit'>('animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('exit');
      setTimeout(onComplete, 500);
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg width="200" height="200" viewBox="0 0 200 200">
        <motion.path
          d="M100 20 L180 100 L100 180 L20 100 Z"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.text
          x="50%"
          y="52%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#grad)"
          className="text-4xl font-bold"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          GOOOD
        </motion.text>
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff00cc" />
            <stop offset="100%" stopColor="#333399" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
