import { AboutSection } from '@/components/AboutSection'
import { HeroSection } from '@/components/HeroSection'
import { Navbar } from '@/components/Navbar'
import { StarBackground } from '@/components/StarBackground'
import { SkillsSection } from '@/components/SkillsSections'
import { ProjectSection } from '@/components/ProjectSection'
import { ContactSection } from '@/components/ContactSection'

export const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/**Theme toggle */}

      {/**Backgound effects */}
      <StarBackground/>

      {/**Navbar */}
      <Navbar/>
      {/**Main content */}
        <main>
          <HeroSection/>
          <AboutSection/>
          <SkillsSection/>
          <ProjectSection/>
          <ContactSection/>
        </main>
      {/**Footer */}
    </div>
  )
}

