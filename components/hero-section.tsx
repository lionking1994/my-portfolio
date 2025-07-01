import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { Robot2D } from "@/components/robot-2d"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <AnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                <span className="text-primary">Alex</span> <span className="text-foreground">Chen</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
                AI/ML Engineer | Computer Vision Specialist | Deep Learning Expert
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate about building intelligent systems that solve real-world problems. Specializing in computer
                vision, natural language processing, and MLOps with 6+ years of experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="#projects">
                  <ArrowDown className="mr-2 h-4 w-4" />
                  View My Work
                </Link>
              </Button>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:alex.chen.ai@email.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 relative">
            <Robot2D />
          </div>
        </div>
      </div>
    </section>
  )
}
