import { Briefcase, Code, Download, User } from "lucide-react"
import { cvPath } from "@/data";
export const AboutSection = () => {
  

  return <section id="about" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Pasionate developer</h3>
          <p className="text-muted-foreground">
            with over 4 years of experience in web development, I specialize in creating responsive, accessible and performant web application using modern technologies
          </p>
          <p className="text-muted-foreground">I&apos;m passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 t-4">
            <a href="#contact" className="cosy-button">Get in touch</a>
            <a href={cvPath} download='Nontombi-CV.pdf' className="px-6 py-2 rounded-full flex gap-2 border border-primary text-primary hover:bg-primary/10 transition-all duration-300">Download CV<Download size={20}/></a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
          <div className="gradient-border p-6 card-hover">
             <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user experiencee
                  </p>
                </div>
              </div>
          </div>
          <div className="gradient-border p-6 card-hover">
             <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conceptiona to completion with agile methodologies.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}