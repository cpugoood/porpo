import { useKonami } from '../hooks/useKonami';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function KonamiCode() {
  const konami = useKonami();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (konami) setShow(true);
  }, [konami]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-[9998] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShow(false)}
        >
          <motion.div
            className="glass p-10 rounded-3xl text-center text-white max-w-md"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
          >
            <h2 className="text-3xl font-bold mb-4">🎮 Cheat Activated!</h2>
            <p className="text-lg">You found Gоооd's secret project! It's a retro Snake game hidden in the console. Type <code className="bg-white/20 px-1 rounded">gooodSnake()</code></p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
