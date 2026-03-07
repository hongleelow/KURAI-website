import { useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

// Freezes the outlet so old page content stays during exit animation
function FrozenOutlet() {
  const outlet = useOutlet();
  const [frozen] = useState(outlet);
  return <>{frozen}</>;
}

export default function PageTransition() {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}
    >
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15, ease: 'easeInOut' }}
        style={{ willChange: 'opacity' }}
      >
        <FrozenOutlet />
      </motion.div>
    </AnimatePresence>
  );
}
