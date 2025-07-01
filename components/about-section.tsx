import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      school: "Stanford University",
      year: "2018-2022",
      focus: "Machine Learning & Computer Vision",
    },
    {
      degree: "M.S. in Artificial Intelligence",
      school: "MIT",
      year: "2016-2018",
      focus: "Deep Learning & Neural Networks",
    },
    {
      degree: "B.S. in Computer Science",
      school: "UC Berkeley",
      year: "2012-2016",
      focus: "Software Engineering & Mathematics",
    },
  ]

  const certifications = [
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2023",
    },
    {
      name: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    {
      name: "Deep Learning Specialization",
      issuer: "Coursera (Andrew Ng)",
      year: "2022",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card border-border card-enhanced-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-primary">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <h3 className="font-semibold text-card-foreground">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                  <Badge variant="secondary" className="mt-2">
                    {edu.focus}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-border card-enhanced-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-primary">My Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate AI/ML Engineer with over 6 years of experience in developing cutting-edge solutions
                using artificial intelligence and machine learning. My expertise spans across computer vision, natural
                language processing, and deep learning architectures.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I believe in creating AI systems that are not only technically robust but also ethically sound and
                user-friendly. My goal is to bridge the gap between research and real-world applications.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "The best way to predict the future is to create it through intelligent systems."
              </blockquote>
            </CardContent>
          </Card>

          <Card className="bg-card border-border card-enhanced-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-primary">Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <h3 className="font-semibold text-card-foreground">{cert.name}</h3>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-primary font-medium">{cert.year}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
