"use client"
import Link from 'next/link'

import { Icon } from '@iconify/react'
const socials = [
  {
    name: 'Twitter',
    icon: <Icon icon={'akar-icons:twitter-fill'} />,
    href: 'https://twitter.com/withastro'
  },
  {
    name: 'GitHub',
    icon: <Icon icon={'akar-icons:github-fill'} />,
    href: 'https://github.com/withastro'
  },

  {
    name: 'Instagram',
    icon: <Icon icon={'akar-icons:instagram-fill'} />,
    href: 'https://instagram.com/withastro'
  },
  {
    name: 'LinkedIn',
    icon: <Icon icon={'akar-icons:linkedin-box-fill'} />,
    href: 'https://linkedin.com/withastro'
  }
] as const
export const Socials = () => {
  return <div className='flex gap-6'>
    {socials.map((social, index) => {
      return (
        <Link
          key={index}
          href={social.href}
          className="w-9 h-9 flex justify-center items-center border border-app-accent rounded-full text-base hover:bg-app-accent hover:text-app hover:transition-all hover:duration-500"
        >
          {social.icon}
        </Link>
      )
    })}
  </div>
}
