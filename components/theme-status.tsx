"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

export function ThemeStatus() {
  const { theme, resolvedTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Badge variant="outline">Loading...</Badge>
  }

  return (
    <div className="fixed top-20 right-4 z-50 space-y-1 text-xs">
      <Badge variant="outline">Theme: {theme}</Badge>
      <Badge variant="outline">Resolved: {resolvedTheme}</Badge>
      <Badge variant="outline">System: {systemTheme}</Badge>
    </div>
  )
}
