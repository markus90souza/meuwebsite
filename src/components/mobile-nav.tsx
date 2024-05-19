'use client'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from './ui/sheet'
import { MenuIcon, QrCodeIcon } from 'lucide-react'
import { links } from '@/constants/menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <MenuIcon className="h-8 w-8 text-app-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-between">
        <SheetHeader className="mt-12 text-accent text-2xl">
          <Link href={''}>
            <strong className="font-semibold text-4xl">
              M90<span className="text-app-accent">.</span>
            </strong>
          </Link>
        </SheetHeader>

        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                className={cn(
                  'capitalize text-xl transition-all hover:text-app-accent-hover',
                  pathname === link.href &&
                    'text-app-accent border-b-2 border-b-app-accent',
                )}
                key={index}
                href={link.href}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <SheetFooter>
          <QrCodeIcon />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
