import { AboutSection } from "@/components/AboutSection"
import { HeroSection } from "@/components/HeroSection"
import { Navbar } from "@/components/Navbar"
import { StarBackground } from "@/components/StarBackground"
import { ThemeToggle } from "@/components/ThemeToggle"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/**Theme toggle */}
      <ThemeToggle/>

      {/**Backgound effects */}
      <StarBackground/>

      {/**Navbar */}
      <Navbar/>
      {/**Main content */}
        <main>
          <HeroSection/>
          <AboutSection/>
        </main>
      {/**Footer */}
    </div>
  )
}

