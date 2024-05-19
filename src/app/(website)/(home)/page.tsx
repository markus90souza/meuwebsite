import { Photo } from '@/components/photo'
import { Socials } from '@/components/socials'
import { Stats } from '@/components/stats'
import { Button } from '@/components/ui/button'
import { DownloadIcon } from 'lucide-react'

const HomePage = () => {
  return (
    <section className="h-full">
      <div className="h-full container mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 pt-8">
          <header className="text-center xl:text-left order-2 xl:order-none">
            <strong className="text-xl">Frontend | Mobile Developer</strong>
            <h1 className="title mb-6">
              Olá eu sou <br />{' '}
              <span className="text-app-accent subtitle">Marcos J.S</span>
            </h1>

            <p className="max-w-[500px] text-white/80 mb-9">
              Frontend | Mobile Developer, apainado por tecnologia, busco sempre
              me aprimorar e me tornar um desenvolvedor melhor, estou aprendendo
              as tecnologias mais novas.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                size={'lg'}
                variant={'outline'}
                className="bg-transparent flex items-center gap-2 border-app-accent rounded-full hover:text-app hover:bg-app-accent-hover"
              >
                <span className="text-app-accent hover:text-app">
                  Baixar CV
                </span>
                <DownloadIcon className="w-5 h-5 text-app-accent" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </header>

          <div className="order-1 mb-8 xl:mb-0 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  )
}

export default HomePage
