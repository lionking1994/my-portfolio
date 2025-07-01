export const SITE_CONFIG = {
  name: "Alex Chen",
  title: "AI/ML Engineer",
  description: "Portfolio of Alex Chen, AI/ML Engineer specializing in Computer Vision, NLP, and Deep Learning",
  url: "https://alexchen.dev",
  author: {
    name: "Alex Chen",
    email: "alex.chen.ai@email.com",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
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
