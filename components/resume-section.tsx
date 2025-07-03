import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, Eye } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

export function ResumeSection() {
  return (
    <section className="relative py-12 bg-muted/30 overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="max-w-2xl mx-auto text-center border-gray-400 dark:border-gray-700 shadow-sm">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Professional Resume</CardTitle>
            <p className="text-muted-foreground">
              Download my complete resume with detailed experience, education, and technical skills.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <a href="/resume/Daniel_Cole_Resume.pdf" download="Daniel_Cole_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 border-none dark:bg-gray-100 dark:text-black dark:hover:bg-gray-200"
                asChild
              >
                <a href="/resume/Daniel_Cole_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview Online
                </a>
              </Button>
            </div>
            <Button variant="link" size="lg" asChild>
              <a href="/resume">
                See more details
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
