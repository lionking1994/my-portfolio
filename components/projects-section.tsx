import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, GitFork, Mail } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  github: string
  demo: string
  stats: {
    stars: number
    forks: number
  }
  featured: boolean
  image: string
}

const projects: Project[] = [
  {
    id: "ai-vision-platform",
    title: "AI Vision Analytics Platform",
    description:
      "Enterprise-grade computer vision platform for real-time object detection and analysis with 99.2% accuracy.",
    longDescription:
      "Built a comprehensive computer vision platform that processes over 10M images daily. Features include real-time object detection, facial recognition, and anomaly detection using custom YOLO models and transformer architectures.",
    technologies: ["PyTorch", "FastAPI", "React", "Docker", "AWS", "Redis", "PostgreSQL"],
    github: "https://github.com/lionking1994/OSSDC-VisionAI-Core",
    demo: "https://vision-demo.danielcole.dev",
    stats: { stars: 1248, forks: 234 },
    featured: true,
    image: "/images/computer-vision.jpg",
  },
  {
    id: "nlp-document-processor",
    title: "Intelligent Document Processing System",
    description: "AI-powered document extraction and processing system using advanced NLP and OCR technologies.",
    longDescription:
      "Developed an end-to-end document processing solution that combines OCR, NLP, and custom transformer models to extract and structure information from various document types with 95% accuracy.",
    technologies: ["Transformers", "spaCy", "Tesseract", "Python", "MongoDB", "Kubernetes"],
    github: "https://github.com/lionking1994/document-processing-with-ai",
    demo: "https://docs-demo.danielcole.dev",
    stats: { stars: 892, forks: 156 },
    featured: true,
    image: "/images/document-process-with-ai.png",
  },
  {
    id: "ml-ops-pipeline",
    title: "MLOps Automation Pipeline",
    description:
      "Complete MLOps solution for model training, deployment, and monitoring with automated CI/CD integration.",
    longDescription:
      "Created a comprehensive MLOps platform that automates the entire ML lifecycle from data preprocessing to model deployment and monitoring. Includes A/B testing, model versioning, and performance tracking.",
    technologies: ["MLflow", "Kubeflow", "Apache Airflow", "Python", "Docker", "Grafana"],
    github: "https://github.com/lionking1994/MLOps-pipeline",
    demo: "https://mlops-demo.danielcole.dev",
    stats: { stars: 567, forks: 89 },
    featured: true,
    image: "/images/mlops.png",
  },
  {
    id: "generative-ai-art",
    title: "Generative AI Art Studio",
    description:
      "Creative AI application for generating artwork using GANs and diffusion models with real-time editing.",
    longDescription:
      "Built an interactive web application that allows users to generate and edit artwork using state-of-the-art generative AI models including Stable Diffusion and custom GAN architectures.",
    technologies: ["Stable Diffusion", "PyTorch", "React", "WebGL", "Node.js"],
    github: "https://github.com/lionking1994/CushyStudio",
    demo: "https://art-studio.danielcole.dev",
    stats: { stars: 1456, forks: 298 },
    featured: false,
    image: "/images/build-custom-ai-and-generative-ai-solutions.png",
  },
  {
    id: "recommendation-engine",
    title: "ML Recommendation Engine",
    description: "High-performance recommendation system using collaborative filtering and deep learning techniques.",
    longDescription:
      "Developed a scalable recommendation engine that combines collaborative filtering, content-based filtering, and deep learning models to provide personalized recommendations with sub-100ms response times.",
    technologies: ["TensorFlow", "Apache Spark", "Elasticsearch", "Python", "Kafka"],
    github: "https://github.com/lionking1994/AI-POWERED-RECOMMENDATION-ENGINE",
    demo: "https://recommendation-demo.danielcole.dev",
    stats: { stars: 723, forks: 134 },
    featured: false,
    image: "/images/recommendation-engine.png",
  },
  {
    id: "ai-chatbot-framework",
    title: "Conversational AI Framework",
    description: "Open-source framework for building intelligent chatbots with natural language understanding.",
    longDescription:
      "Created a comprehensive framework for building conversational AI applications with built-in NLU, dialog management, and integration capabilities for various messaging platforms.",
    technologies: ["BERT", "Rasa", "FastAPI", "React", "WebSocket", "Docker"],
    github: "https://github.com/lionking1994/RealtimeVoiceChat",
    demo: "https://chatbot-demo.danielcole.dev",
    stats: { stars: 945, forks: 187 },
    featured: false,
    image: "/images/conversational-ai.jpg",
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative AI/ML solutions that solve real-world problems and push the boundaries of technology.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-card border-border card-enhanced-border group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden flex items-center justify-center bg-white dark:bg-background">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {project.stats.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {project.stats.forks}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground mb-4 line-clamp-3 flex-shrink-0">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge
                      variant="outline"
                      className="text-xs border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300"
                    >
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black bg-transparent"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Other Notable Projects</h3>
          <div className="w-16 h-0.5 bg-primary/60 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-md transition-all duration-300 bg-card border-border card-enhanced-border group flex flex-col h-full"
            >
              <div className="relative h-40 overflow-hidden flex items-center justify-center bg-white dark:bg-background">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
              </div>
              <CardHeader className="pb-3 flex-shrink-0">
                <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {project.stats.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {project.stats.forks}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2 flex-shrink-0">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3 flex-shrink-0">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="outline"
                      className="text-xs border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black bg-transparent"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/lionking1994" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View All Projects on GitHub
              </a>
            </Button>
            <Button size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
