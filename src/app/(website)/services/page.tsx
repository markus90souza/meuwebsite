'use client'

import { services } from '@/constants/services'
import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import Link from 'next/link'
const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] xl:py-0 flex flex-col justify-center py-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2.4,
              ease: 'easeIn',
            },
          }}
          className="grid grid-cols-1  md:grid-cols-2 md:gap-14 gap-y-14 gap-x-0"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                <header className="w-full flex items-center justify-between">
                  <span className="text-5xl text-outline transition-all duration-500 text-transparent font-semibold group-hover:text-outline-hover">
                    {service.id}
                  </span>
                  <Link
                    className="hover:-rotate-45 flex items-center justify-center w-11 h-11 bg-white transition-all duration-500 group-hover:bg-app-accent  rounded-full"
                    href={'#'}
                  >
                    <ArrowDownRight className="text-3xl text-app" />
                  </Link>
                </header>
                <strong className="duration-500 transition-all font-bold text-white leading-none text-[32px] group-hover:text-app-accent">
                  {service.name}
                </strong>

                <p className="text-white/60 line-clamp-2">
                  {service.description}
                </p>
                <div className="border-b border-white/20 w-full" />
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPage
