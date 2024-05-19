import Link from 'next/link'
import { type FC } from 'react'
import { Nav } from './nav'
import { Button } from '@/components/ui/button'
import { MobileNav } from './mobile-nav'

export const Header: FC = () => {
  return (
    <header className="text-white py-4 xl:py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={''}>
          <strong className="font-semibold text-4xl">
            M90<span className="text-app-accent">.</span>
          </strong>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={'/contato'}>
            <Button className="rounded-full bg-app-accent hover:bg-app-accent-hover text-app">
              Fale comigo
            </Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
