'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { type FC, type ReactNode } from 'react'

type PageTransitionsProps = {
  children: ReactNode
}
export const PageTransitions: FC<PageTransitionsProps> = ({ children }) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          className="h-screen w-screen bg-app fixed top-0 pointer-events-none "
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: 'easeInOut',
            },
          }}
        />
        {children}
      </div>
    </AnimatePresence>
  )
}
