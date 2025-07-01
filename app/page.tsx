import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { ResumeSection } from "@/components/resume-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "AI/ML Engineer specializing in Computer Vision, NLP, and Deep Learning with 6+ years of experience building intelligent systems.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <ResumeSection />
    </main>
  )
}
