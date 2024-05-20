'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import x from '@/assets/photo.png'
export const Photo = () => {
  return (
    <div className='h-full w-full relative'>
      
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ 
          opacity: 1,
          transition: { 
            duration: 0.4,
            delay: 1,
            ease: 'easeIn'
          } 
        }}>
        <motion.div 
           initial={{ opacity: 0 }} 
           animate={{ 
             opacity: 1,
             transition: { 
               duration: 0.4,
               delay: 1.4,
               ease: 'easeInOut'
             } 
           }}
        
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image src={'/assets/photo.png'} 
            alt="photo" 
            priority
            quality={100}
            fill
            className='object-contain'
         />
        </motion.div>  
      </motion.div>  
    </div>
  )
}
