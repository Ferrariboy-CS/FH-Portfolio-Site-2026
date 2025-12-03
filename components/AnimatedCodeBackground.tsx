'use client'

import { useEffect, useState, useRef } from 'react'

interface CodeSnippet {
  id: number
  text: string
  x: number
  y: number
  opacity: number
  fontSize: number
  color: string
  createdAt: number
}

const CODE_SNIPPETS = [
  'const portfolio = () => {',
  'function create() {',
  'import React from "react"',
  'export default function',
  'const [state, setState]',
  'useEffect(() => {',
  'className="flex"',
  'return <div>',
  'interface Props {',
  'type Component = {',
  'async function fetch()',
  'const data = await',
  'useState<Type>',
  'className="grid"',
  'export const',
  'import { useState }',
  'const handleClick =',
  'onClick={() => {',
  'useCallback(() =>',
  'useMemo(() =>',
  'const theme =',
  'className="bg-"',
  'const response =',
  'try { await',
  'catch (error)',
  'const Component =',
  'export type',
  'interface User {',
  'const api = {',
  'fetch("/api")',
  'const config =',
  'type Status =',
  'const result =',
  'if (condition)',
  'return null',
  'const styles =',
  'className="text-"',
]

const COLORS = [
  'text-accent/10',
  'text-accent-strong/8',
  'text-text-subtle/6',
  'text-accent/8',
]

let globalSnippetId = 0

const generateSnippet = (x: number, y: number): CodeSnippet => {
  const text = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)]
  // Add random offset from cursor position
  const offsetX = (Math.random() - 0.5) * 200 // -100px to +100px
  const offsetY = (Math.random() - 0.5) * 200 // -100px to +100px
  const opacity = 0.15 + Math.random() * 0.2 // 0.15-0.35
  const fontSize = 0.75 + Math.random() * 0.5 // 0.75rem - 1.25rem
  const color = COLORS[Math.floor(Math.random() * COLORS.length)]

  return {
    id: globalSnippetId++,
    text,
    x: x + offsetX,
    y: y + offsetY,
    opacity,
    fontSize,
    color,
    createdAt: Date.now(),
  }
}

export default function AnimatedCodeBackground() {
  const [snippets, setSnippets] = useState<CodeSnippet[]>([])
  const lastSnippetTime = useRef(0)
  const snippetInterval = 300 // Create new snippet every 300ms when mouse moves

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      
      // Add new snippet near cursor position
      const now = Date.now()
      if (now - lastSnippetTime.current > snippetInterval) {
        lastSnippetTime.current = now
        setSnippets((prev) => {
          // Remove old snippets (older than 3 seconds)
          const filtered = prev.filter((s) => Date.now() - s.createdAt < 3000)
          // Add new snippet near cursor
          return [...filtered, generateSnippet(e.clientX, e.clientY)]
        })
      }
    }

    // Cleanup old snippets and trigger re-render for fade effect
    const cleanupInterval = setInterval(() => {
      setSnippets((prev) => {
        const now = Date.now()
        // Remove snippets older than 3 seconds
        return prev.filter((s) => now - s.createdAt < 3000)
      })
    }, 100) // Update every 100ms for smooth fade

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(cleanupInterval)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {snippets.map((snippet) => {
        const age = Date.now() - snippet.createdAt
        const fadeProgress = Math.min(age / 3000, 1) // Fade out over 3 seconds
        const currentOpacity = snippet.opacity * (1 - fadeProgress)
        const scale = 0.8 + (fadeProgress * 0.2) // Scale from 0.8 to 1.0

        return (
          <div
            key={snippet.id}
            className={`absolute ${snippet.color} font-mono select-none whitespace-nowrap transition-opacity duration-300`}
            style={{
              left: `${snippet.x}px`,
              top: `${snippet.y}px`,
              fontSize: `${snippet.fontSize}rem`,
              opacity: currentOpacity,
              transform: `translate(-50%, -50%) scale(${scale})`,
              pointerEvents: 'none',
            }}
          >
            {snippet.text}
          </div>
        )
      })}
    </div>
  )
}

