"use client"

import { useState, useEffect } from "react"

export function Robot2D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl bg-background">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse text-primary text-lg">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-cyan-300 dark:border-primary/20 shadow-2xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:bg-background">
      {/* Clean animated background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute w-64 h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-cyan-200/60 dark:border-primary/10 rounded-full animate-spin"
          style={{ animationDuration: "25s" }}
        />
        <div
          className="absolute w-48 h-48 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-cyan-100/40 dark:border-primary/5 rounded-full animate-spin"
          style={{ animationDuration: "20s", animationDirection: "reverse" }}
        />
      </div>

      {/* Robot SVG - Custom illustration */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <svg
          width="240"
          height="240"
          viewBox="0 0 240 240"
          className="z-10 hover:scale-105 transition-transform duration-500 ease-out drop-shadow-lg"
        >
          {/* Desk/Table */}
          <ellipse cx="120" cy="200" rx="80" ry="12" fill="#8B4513" opacity="0.6" />
          <rect x="40" y="188" width="160" height="12" rx="6" fill="#A0522D" />

          {/* Computer Monitor */}
          <rect x="150" y="140" width="60" height="40" rx="4" fill="#2a2a2a" />
          <rect x="154" y="144" width="52" height="32" rx="2" fill="#000000" />

          {/* Monitor Screen with colorful code */}
          <rect x="156" y="146" width="48" height="2" rx="1" fill="#00ff41" opacity="0.9" />
          <rect x="156" y="150" width="42" height="2" rx="1" fill="#ff6b35" opacity="0.8" />
          <rect x="156" y="154" width="45" height="2" rx="1" fill="#4ecdc4" opacity="0.7" />
          <rect x="156" y="158" width="38" height="2" rx="1" fill="#45b7d1" opacity="0.8" />
          <rect x="156" y="162" width="50" height="2" rx="1" fill="#f9ca24" opacity="0.6" />
          <rect x="156" y="166" width="35" height="2" rx="1" fill="#6c5ce7" opacity="0.9" />
          <rect x="156" y="170" width="47" height="2" rx="1" fill="#a29bfe" opacity="0.7" />

          {/* Monitor Stand */}
          <rect x="177" y="180" width="6" height="10" rx="3" fill="#666666" />
          <ellipse cx="180" cy="190" rx="15" ry="3" fill="#666666" />

          {/* Keyboard */}
          <rect x="130" y="185" width="45" height="10" rx="3" fill="#f5f5f5" />
          <rect x="132" y="187" width="41" height="6" rx="2" fill="#e8e8e8" />

          {/* Robot Head - Large and rounded */}
          <circle cx="120" cy="100" r="28" fill="#f8f8f8" stroke="#e0e0e0" strokeWidth="2" />

          {/* Head highlight */}
          <ellipse cx="115" cy="90" rx="12" ry="8" fill="#ffffff" opacity="0.4" />

          {/* Large cute eyes */}
          <circle cx="110" cy="98" r="8" fill="#ffffff" />
          <circle cx="130" cy="98" r="8" fill="#ffffff" />

          {/* Eye borders */}
          <circle cx="110" cy="98" r="8" fill="none" stroke="#e0e0e0" strokeWidth="1" />
          <circle cx="130" cy="98" r="8" fill="none" stroke="#e0e0e0" strokeWidth="1" />

          {/* Eye pupils with animation */}
          <circle cx="110" cy="98" r="5" fill="#0099ff">
            <animate attributeName="r" values="5;2;5" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="130" cy="98" r="5" fill="#0099ff">
            <animate attributeName="r" values="5;2;5" dur="4s" repeatCount="indefinite" />
          </circle>

          {/* Eye shine */}
          <circle cx="108" cy="95" r="2" fill="#ffffff" opacity="0.8" />
          <circle cx="128" cy="95" r="2" fill="#ffffff" opacity="0.8" />

          {/* Robot Body */}
          <ellipse cx="120" cy="150" rx="25" ry="30" fill="#f8f8f8" stroke="#e0e0e0" strokeWidth="2" />

          {/* Chest panel */}
          <rect x="105" y="135" width="30" height="25" rx="6" fill="#0080cc" opacity="0.8" />

          {/* Chest details */}
          <rect x="110" y="140" width="20" height="2" rx="1" fill="#ffffff" opacity="0.9" />
          <rect x="110" y="144" width="18" height="2" rx="1" fill="#ffffff" opacity="0.7" />
          <rect x="110" y="148" width="22" height="2" rx="1" fill="#ffffff" opacity="0.8" />

          {/* Status light */}
          <circle cx="120" cy="125" r="3" fill="#00ff88">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Arms */}
          <ellipse cx="90" cy="145" rx="8" ry="18" fill="#f8f8f8" stroke="#e0e0e0" strokeWidth="1.5" />
          <ellipse cx="150" cy="145" rx="8" ry="18" fill="#f8f8f8" stroke="#e0e0e0" strokeWidth="1.5" />

          {/* Forearms */}
          <ellipse cx="80" cy="170" rx="6" ry="15" fill="#f8f8f8" stroke="#e0e0e0" strokeWidth="1.5" />
          <ellipse cx="160" cy="170" rx="6" ry="15" fill="#f8f8f8" stroke="#e0e0e0" strokeWidth="1.5" />

          {/* Hands */}
          <circle cx="75" cy="185" r="6" fill="#f8f8f8" stroke="#e0e0e0" strokeWidth="1.5" />
          <circle cx="165" cy="185" r="6" fill="#f8f8f8" stroke="#e0e0e0" strokeWidth="1.5" />

          {/* Antenna */}
          <line x1="120" y1="72" x2="120" y2="55" stroke="#0080cc" strokeWidth="3" />
          <circle cx="120" cy="50" r="4" fill="#ff4757">
            <animate attributeName="opacity" values="1;0.5;1" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Floating tech elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-8 left-6 text-cyan-600 dark:text-primary font-mono text-xs opacity-70 font-semibold"
          style={{ animation: "float 5s ease-in-out infinite" }}
        >
          import tensorflow
        </div>

        <div
          className="absolute top-16 right-8 text-cyan-600 dark:text-primary font-mono text-xs opacity-60"
          style={{ animation: "float 4s ease-in-out infinite reverse", animationDelay: "1s" }}
        >
          {"<AI/>"}
        </div>

        <div
          className="absolute bottom-20 right-6 text-cyan-600 dark:text-primary font-mono text-xs opacity-65"
          style={{ animation: "float 4.5s ease-in-out infinite reverse", animationDelay: "0.5s" }}
        >
          {"ML"}
        </div>

        <div
          className="absolute bottom-32 left-8 text-cyan-600 dark:text-primary font-mono text-xs opacity-55"
          style={{ animation: "float 5.5s ease-in-out infinite", animationDelay: "1.5s" }}
        >
          {"{}"}
        </div>
      </div>

      {/* Activity indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
        <div className="w-2 h-2 bg-green-400 rounded-full" style={{ animation: "pulse 1.5s ease-in-out infinite" }} />
        <div
          className="w-2 h-2 bg-blue-400 rounded-full"
          style={{ animation: "pulse 1.5s ease-in-out infinite", animationDelay: "0.5s" }}
        />
        <div
          className="w-2 h-2 bg-purple-400 rounded-full"
          style={{ animation: "pulse 1.5s ease-in-out infinite", animationDelay: "1s" }}
        />
      </div>

      {/* Outer glow ring */}
      <div className="absolute -inset-6 rounded-3xl border border-cyan-200/60 dark:border-primary/20 animate-pulse pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400/60 dark:border-primary/40 rounded-tr-lg" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400/60 dark:border-primary/40 rounded-bl-lg" />
    </div>
  )
}
