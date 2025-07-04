"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="relative py-20 bg-muted/30 overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <Card className="bg-card border-gray-400 dark:border-gray-700 shadow-sm flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-primary">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex-1">
              <p className="text-muted-foreground">
                I'm always open to discussing new opportunities, innovative projects, or potential collaborations in
                AI/ML. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:danielc19940105@email.com" className="text-card-foreground hover:underline focus:underline outline-none">
                    danielc19940105@email.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+15551234567" className="text-card-foreground hover:underline focus:underline outline-none">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-card-foreground">San Francisco, CA</span>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-semibold mb-4 text-card-foreground">Areas of Interest</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AI/ML Consulting & Development</li>
                  <li>• Research Collaborations</li>
                  <li>• Speaking Engagements</li>
                  <li>• Open Source Contributions</li>
                  <li>• Mentoring & Education</li>
                </ul>
              </div>
            </CardContent>
            <div className="flex w-full px-6 pb-1 mt-auto">
              <Button
                variant="default"
                className="w-full bg-primary text-black hover:bg-primary/90 border-none"
                asChild
              >
                <a href="mailto:danielc19940105@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
            </div>
          </Card>

          <Card className="bg-card border-gray-400 dark:border-gray-700 shadow-sm flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex-1">
              <p className="text-muted-foreground">
                Have a specific question or project in mind? Send me a message and I'll get back to you as soon as
                possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="bg-muted/50 border-2 border-gray-300 dark:border-gray-600 text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-muted/50 border-2 border-gray-300 dark:border-gray-600 text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={8}
                    required
                    className="bg-muted/50 border-2 border-gray-300 dark:border-gray-600 text-foreground placeholder:text-muted-foreground resize-none focus:border-primary min-h-[200px]"
                  />
                </div>
              </form>
            </CardContent>
            <div className="flex w-full px-6 pb-1 mt-auto">
              <Button
                type="submit"
                form="contact-form"
                className="w-full bg-primary text-black hover:bg-primary/90 border-none"
                variant="default"
                onClick={handleSubmit}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
