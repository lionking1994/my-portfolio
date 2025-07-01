import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "TechVision AI",
      period: "2022 - Present",
      description:
        "Leading the development of computer vision solutions for autonomous systems. Built and deployed ML models that process over 1M images daily with 99.2% accuracy.",
      achievements: [
        "Developed a real-time object detection system reducing processing time by 60%",
        "Led a team of 5 engineers in building MLOps infrastructure",
        "Published 3 research papers in top-tier AI conferences",
      ],
      technologies: ["PyTorch", "CUDA", "Kubernetes", "MLflow", "AWS"],
    },
    {
      title: "Machine Learning Engineer",
      company: "DataFlow Solutions",
      period: "2020 - 2022",
      description:
        "Designed and implemented end-to-end ML pipelines for natural language processing applications. Specialized in transformer architectures and large language models.",
      achievements: [
        "Built a custom NLP pipeline processing 10M+ documents monthly",
        "Improved model inference speed by 40% through optimization techniques",
        "Mentored junior engineers and established ML best practices",
      ],
      technologies: ["TensorFlow", "Transformers", "Docker", "GCP", "Python"],
    },
    {
      title: "AI Research Intern",
      company: "Stanford AI Lab",
      period: "2019 - 2020",
      description:
        "Conducted research on generative adversarial networks and their applications in computer vision. Contributed to open-source projects and academic publications.",
      achievements: [
        "Co-authored 2 papers on GANs published in CVPR and ICCV",
        "Developed novel architectures for image-to-image translation",
        "Contributed to PyTorch and TensorFlow open-source projects",
      ],
      technologies: ["PyTorch", "GANs", "Computer Vision", "Research", "Python"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative bg-card border-border card-enhanced-border shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"></div>
              <CardHeader className="pl-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl text-card-foreground">{exp.title}</CardTitle>
                  <Badge variant="outline">{exp.period}</Badge>
                </div>
                <p className="text-primary font-semibold">{exp.company}</p>
              </CardHeader>
              <CardContent className="pl-8">
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-green-500 dark:text-green-400 mr-2">→</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
