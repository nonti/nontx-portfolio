import { Mail, MapPin, Phone } from "lucide-react"

export const ContactSection = () => {

  return (
    <section id='#contact' className="py-24 px-4 relative bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <h2>
        Get in <span className="text-primary">Touch</span>
      </h2>

      <p className="text-center text-muted-foreground max-w-2xl mx-auto">
        Have a project in mind or collaborate?  Feel free to reach out. I'm always open to discussing new opportunities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="w-6 h-6 text-primary"/>
              </div>

              <div>
                <h4>Email</h4>
                <a href="mailto:nonty8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">nonty8@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="w-6 h-6 text-primary"/>
              </div>

              <div>
                <h4>Cell Phone</h4>
                <a href="tel:+27797684297" className="text-muted-foreground hover:text-primary transition-colors">+27 (79) 768-4297</a>
              </div>
            </div>
          </div>

          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="w-6 h-6 text-primary"/>
              </div>

              <div>
                <h4>Location</h4>
                <a href="mailto:nonty8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">481 Cuba Crescent, Lulekani</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
} 