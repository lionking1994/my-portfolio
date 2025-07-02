"use client"

import { useCallback } from "react"

export function useResumeDownload() {
  const trackDownload = useCallback(() => {
    // Track download analytics
    if (typeof window !== "undefined") {
      // Google Analytics or other tracking
      console.log("Resume downloaded at:", new Date().toISOString())

      // You can add actual analytics tracking here
      // gtag('event', 'download', {
      //   event_category: 'Resume',
      //   event_label: 'Daniel_Cole_Resume.pdf'
      // })
    }
  }, [])

  const downloadResume = useCallback(() => {
    trackDownload()

    // Create download link
    const link = document.createElement("a")
    link.href = "/resume/Daniel_Cole_Resume.pdf"
    link.download = "Daniel_Cole_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [trackDownload])

  return { downloadResume, trackDownload }
}
