import type { Transition, Variants } from 'framer-motion'

export const easeOutSoft: Transition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
}

export const springSnappy: Transition = {
  type: 'spring',
  stiffness: 420,
  damping: 32,
  mass: 0.8,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const staggerChildren = (stagger = 0.06, delayChildren = 0.04): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})
