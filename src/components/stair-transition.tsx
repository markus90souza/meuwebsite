'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { type FC } from 'react'
import { Stairs } from './stairs'

export const StairTransitions: FC = () => {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="flex z-40 h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none">
          <Stairs />
        </div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 0.4, delay: 1, ease: 'easeInOut' },
          }}
          className="h-screen w-screen fixed top-0 bg-app pointer-events-none"
        />
      </div>
    </AnimatePresence>
  )
}
