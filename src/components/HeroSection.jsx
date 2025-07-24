import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
  return( 
  <section className="relative min-h-screen flex flex-col items-center justify-center">
    <div className="container z-10 mx-auto max-w-xl text-cnter">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl tracking-tight font-bold ">
          <span className="opacity-0 animate-fade-in">Hi, I&apos;m</span>{' '}
          <span className="text-primary opacity-0 animate-fade-in-delay-2">Nontombi</span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Mbowane</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-1">
          As a developer, I specialize in revamping websites for small startup companies. I take existing websites abd transform them into modern, user-friendly, and highly functional platforms. 
        </p>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href='#projects' className="cosy-button ">View my work</a>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-1/2 -transform-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary "/>
    </div>
  </section>
  )
}