'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = [
  'O',
  'Orb',
  'Orbit',
  'Orbital',
  'ONE',
  'Open',
  'Omni',
  'Origin',
  'Opportunity',
  'Overflow',
  'Overcome',
  'Odyssey',
  'Он',
  'Observe',
  'Offer',
  'Organize',
  'Optimal',
  'Original',
];

export default function RotatingO() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 1800);

    return () => clearInterval(id);
  }, []);

  return (
 <span
  className="
    relative
    inline-block
    ml-2
    w-[120px]
    sm:w-[160px]
    md:w-[220px]
    h-[1em]
    align-baseline
  "
>
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[index]}
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -90 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute left-0 top-0 text-yellow-400 font-bold"
          style={{ transformOrigin: '50% 50%' }}
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
