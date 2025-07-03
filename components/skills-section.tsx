import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AnimatedBackground } from "@/components/animated-background"

export function SkillsSection() {
  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "TensorFlow/Keras", level: 90 },
    { name: "PyTorch", level: 88 },
    { name: "Computer Vision", level: 92 },
    { name: "Natural Language Processing", level: 85 },
    { name: "MLOps", level: 80 },
  ]

  const tools = [
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Git",
    "MLflow",
    "Weights & Biases",
    "Apache Airflow",
    "FastAPI",
    "React",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
  ]

  const domains = [
    "Computer Vision",
    "Natural Language Processing",
    "Deep Learning",
    "Machine Learning",
    "Generative AI",
    "MLOps",
    "Data Engineering",
    "Model Deployment",
    "A/B Testing",
    "Statistical Analysis",
  ]

  return (
    <section id="skills" className="relative py-20 bg-[#0a101e] overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card border-gray-500 dark:border-gray-700 shadow-sm">
            <CardHeader>
              <CardTitle className="text-primary">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-card-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-gray-500 dark:border-gray-700 shadow-sm">
            <CardHeader>
              <CardTitle className="text-primary">Domain Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {domains.map((domain, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-400 dark:border-gray-600"
                  >
                    {domain}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card border-gray-400 dark:border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle className="text-primary">Tools & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm border-gray-500 dark:border-gray-500 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
