import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function AnimatedCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 50 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 50 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    const leave = () => setIsVisible(false);
    window.addEventListener('mousemove', move);
    document.body.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeEventListener('mouseleave', leave);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="w-4 h-4 rounded-full bg-white" />
    </motion.div>
  );
}
