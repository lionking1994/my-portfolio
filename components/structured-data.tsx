import Script from "next/script"
import { SITE_CONFIG } from "@/lib/constants"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.author.email,
    sameAs: [SITE_CONFIG.author.github, SITE_CONFIG.author.linkedin, SITE_CONFIG.author.twitter],
    worksFor: {
      "@type": "Organization",
      name: "TechVision AI",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Stanford University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "MIT",
      },
    ],
    knowsAbout: [
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Deep Learning",
      "Artificial Intelligence",
      "Python",
      "TensorFlow",
      "PyTorch",
    ],
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
