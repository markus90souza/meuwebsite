'use client'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { about } from "@/constants/about"
import { education } from "@/constants/education"
import { experiences } from "@/constants/experieces"
import { motion } from "framer-motion"


const ResumePage = () => {
  return(
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1,
      transition: { 
        duration: 0.4,
        delay: 2.4,
        ease: 'easeIn'
      }

    }}
    className="min-h-[80vh] xl:py-0 flex flex-col justify-center py-12"
    >

      <div  className="container mx-auto">
        <Tabs defaultValue={'experience'} className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-96 mx-auto xl:mx-0 gap-6">
            <TabsTrigger 
            
            className="bg-[#27272c] rounded-md"
            value="about">
              Sobre
            </TabsTrigger>
            <TabsTrigger value="experience">
              Experiências
            </TabsTrigger>
            <TabsTrigger value="education">
              Formação Academica e Profissional
            </TabsTrigger>
            <TabsTrigger value="skills">
              Minhas skills
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="about" className="w-full min-h-[480px]">
                About
            </TabsContent>
            <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <header className="flex flex-col gap-4">
                    <strong className="text-4xl font-semibold">{experiences.title}</strong>
                    <span className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experiences.description}</span>
                  </header>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {
                        experiences.works.map((work, index) => {
                          return (
                            <li key={index} className="h-auto w-full  bg-[#232329] rounded-xl gap-1 lg:items-start flex flex-col items-center justify-center py-6 px-10">
                              <span className="text-app-accent">
                                {work.date}
                              </span>
                              <strong className="text-xl max-w-64 min-h-16 text-center lg:text-left">
                                {work.role}
                              </strong>

                              <span>{work.modalidade}</span>
                              <div className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-app-accent" />
                                <span className="text-white/60">{work.company}</span>
                              </div>
                              <p className="text-white/60 block">{work.description}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </ScrollArea>
                </div>
            </TabsContent>
            <TabsContent value="education" className="w-full min-h-[480px]">
            <div className="flex flex-col gap-8 text-center xl:text-left">
                  <header className="flex flex-col gap-4">
                    <strong className="text-4xl font-semibold">
                      {education.title}
                    </strong>
                    <span className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{
                      education.description}
                    </span>
                  </header>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {
                        education.educations.map((edu, index) => {
                          return (
                            <li key={index} className="h-auto w-full  bg-[#232329] rounded-xl gap-1 lg:items-start flex flex-col items-center justify-center py-6 px-10">
                              <span className="text-app-accent">
                                {edu.date}
                              </span>
                              <strong className="text-xl max-w-64 min-h-16 text-center lg:text-left">
                                {edu.institution}
                              </strong>

                            
                              <div className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-app-accent" />
                                <span className="text-white/60">{edu.name}</span>
                              </div>

                            </li>
                          )
                        })
                      }
                    </ul>
                  </ScrollArea>
                </div>
            </TabsContent>          
    
            <TabsContent value="skills" className="w-full min-h-[480px]">
                Minhas skills
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default ResumePage
