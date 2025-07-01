import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, Eye } from "lucide-react"

export function ResumeSection() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto text-center">
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
                <a href="/resume/Alex_Chen_Resume.pdf" download="Alex_Chen_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-slate-950 text-white hover:bg-slate-900"
              >
                <a href="/resume/Alex_Chen_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview Online
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Last updated: December 2024 • PDF Format • 2 pages</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
