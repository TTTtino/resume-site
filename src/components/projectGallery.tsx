import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { easeOutSoft } from '@lib/motion'

interface ProjectGalleryProps {
  images: string[]
  title: string
  autoplayMs?: number
}

export const ProjectGallery = ({
  images,
  title,
  autoplayMs = 10000,
}: ProjectGalleryProps) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const reduceMotion = useReducedMotion()
  const count = images.length

  const goTo = useCallback(
    (next: number, dir: number) => {
      if (count === 0) return
      setDirection(dir)
      setIndex(((next % count) + count) % count)
    },
    [count],
  )

  useEffect(() => {
    if (count <= 1 || reduceMotion) return
    const id = window.setInterval(() => {
      setDirection(1)
      setIndex((current) => (current + 1) % count)
    }, autoplayMs)
    return () => window.clearInterval(id)
  }, [autoplayMs, count, reduceMotion])

  if (count === 0) {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-dark-slate-50">
        <div className="relative h-48 sm:h-96">
          <img
            src="/projects/wip-project.png"
            alt="Work in progress project"
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-dark-slate-50">
      <div
        className="relative h-48 touch-pan-y sm:h-96"
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') goTo(index - 1, -1)
          if (event.key === 'ArrowRight') goTo(index + 1, 1)
        }}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} screenshots`}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            custom={direction}
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: direction >= 0 ? 40 : -40 }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: direction >= 0 ? -40 : 40 }
            }
            transition={easeOutSoft}
            drag={reduceMotion ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) goTo(index + 1, 1)
              else if (info.offset.x > 60) goTo(index - 1, -1)
            }}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </AnimatePresence>
      </div>

      {count > 1 && (
        <div className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3">
          <button
            type="button"
            aria-label="Previous screenshot"
            className="rounded-full text-slate-200 transition hover:text-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
            onClick={() => goTo(index - 1, -1)}
          >
            <FaChevronCircleLeft className="h-7 w-7" />
          </button>

          <div className="flex items-center gap-2" aria-hidden="true">
            {images.map((image, dotIndex) => (
              <button
                key={image}
                type="button"
                aria-label={`Go to screenshot ${dotIndex + 1}`}
                className={`h-2 w-2 rounded-full transition ${
                  dotIndex === index
                    ? 'bg-primary-400'
                    : 'bg-white/25 hover:bg-white/50'
                }`}
                onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next screenshot"
            className="rounded-full text-slate-200 transition hover:text-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
            onClick={() => goTo(index + 1, 1)}
          >
            <FaChevronCircleRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </div>
  )
}
