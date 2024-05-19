'use client'

import { links } from '@/constants/menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Nav = () => {
  const pathname = usePathname()
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            className={cn(
              'capitalize font-medium transition-all hover:text-app-accent-hover',
              pathname === link.href &&
                'text-app-accent border-b-2 border-app-accent',
            )}
            key={index}
            href={link.href}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
