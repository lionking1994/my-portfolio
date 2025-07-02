import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata = {
  title: "Resume - Daniel Cole | AI/ML Engineer",
  description:
    "Download the professional resume of Daniel Cole, AI/ML Engineer specializing in Computer Vision and Deep Learning.",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Theme Toggle Button */}
        <div className="absolute right-4 top-4 z-10">
          <ThemeToggle />
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="self-start">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>
            <div className="text-center w-full">
              <h1 className="text-3xl font-bold">Professional Resume</h1>
              <p className="text-muted-foreground">Daniel Cole - AI/ML Engineer</p>
            </div>
          </div>

          {/* Resume Preview Card */}
          <Card className="mb-8">
            <CardHeader className="text-center">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Resume Download</CardTitle>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My comprehensive resume includes detailed information about my experience in AI/ML engineering, computer
                vision projects, deep learning research, and technical expertise.
              </p>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/resume/Daniel_Cole_Resume.pdf" download="Daniel_Cole_Resume.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF Resume
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-500 dark:border-blue-400 hover:border-blue-700 dark:hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  asChild
                >
                  <a href="/resume/Daniel_Cole_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5" />
                    View in Browser
                  </a>
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong className="text-foreground">Format:</strong>
                  <br />
                  PDF Document
                </div>
                <div>
                  <strong className="text-foreground">Size:</strong>
                  <br />1 Page
                </div>
                <div>
                  <strong className="text-foreground">Updated:</strong>
                  <br />
                  December 2024
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Professional summary and career objectives
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Detailed work experience with achievements
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Education and academic background
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Technical skills and certifications
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Key projects and publications
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Contact information and references
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Years of Experience</span>
                    <span className="font-semibold">6+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects Completed</span>
                    <span className="font-semibold">25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Research Papers</span>
                    <span className="font-semibold">8 Published</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certifications</span>
                    <span className="font-semibold">5 Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Programming Languages</span>
                    <span className="font-semibold">10+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold mb-2">Ready to Connect?</h3>
              <p className="text-muted-foreground mb-4">
                If you&#39;d like to discuss opportunities or learn more about my experience, feel free to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link href="/#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/#projects">View Projects</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
