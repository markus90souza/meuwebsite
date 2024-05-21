'use client'
import { stats } from '@/constants/stats'
import { cn } from '@/lib/utils'
import type { FC } from 'react'
import CountUp from 'react-countup'

export const Stats: FC = () => {
  return (
    <section className="pt-4 pb-12 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-3 min-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
              >
                <CountUp
                  className="text-4xl font-semibold xl:text-6xl"
                  start={0}
                  end={Number(stat.value)}
                  duration={5}
                  delay={2}
                />
                <span
                  className={cn(
                    'leading-snug text-white/80',
                    stat.title.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]',
                  )}
                >
                  {stat.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
