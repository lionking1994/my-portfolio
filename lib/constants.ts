export const SITE_CONFIG = {
  name: "Daniel Cole",
  title: "AI/ML Engineer",
  description: "Portfolio of Daniel Cole, AI/ML Engineer specializing in Computer Vision, NLP, and Deep Learning",
  url: "https://danielcole.dev",
  author: {
    name: "Daniel Cole",
    email: "daniel.cole.ai@email.com",
    github: "https://github.com/danielcole",
    linkedin: "https://www.linkedin.com/in/danielrchinn",
  },
  experience: {
    years: 6,
    projects: 25,
    papers: 8,
    certifications: 5,
  },
} as const

export const NAVIGATION_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const

export const TECH_STACK = {
  languages: ["Python", "TypeScript", "JavaScript", "R", "SQL"],
  frameworks: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Hugging Face"],
  tools: ["Docker", "Kubernetes", "AWS", "GCP", "Git", "MLflow"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
} as const
