'use client'

import { useEffect, useRef, useCallback } from 'react'

const CODE_SNIPPETS = [
  'const', 'function', 'return', 'import', 'export',
  'async', 'await', 'class', 'interface', 'type',
  '( )=>', '{ }', '[ ]', 'true', 'false',
  'React', 'useState', 'useEffect', 'props', 'state',
  '<div>', '</>', 'null', 'map( )', 'filter( )',
  'npm', 'git', 'push', 'pull', 'merge',
  '===', '!==', '&&', '||', '...',
  'flex', 'grid', 'component', 'render', 'build',
]

interface Column {
  x: number
  chars: { text: string; y: number; opacity: number }[]
  speed: number
  nextSpawn: number
}

export default function AnimatedCodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const columnsRef = useRef<Column[]>([])
  const animationRef = useRef<number>()

  const initColumns = useCallback(() => {
    const width = window.innerWidth
    const columnWidth = 100
    const columnCount = Math.ceil(width / columnWidth)
    
    columnsRef.current = Array.from({ length: columnCount }, (_, i) => ({
      x: i * columnWidth + columnWidth / 2 + (Math.random() - 0.5) * 30,
      chars: [],
      speed: 0.5 + Math.random() * 1,
      nextSpawn: Math.random() * 200,
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initColumns()
    }

    resize()
    window.addEventListener('resize', resize)

    let frameCount = 0

    const animate = () => {
      frameCount++
      
      // Clear with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      columnsRef.current.forEach(column => {
        // Spawn new character
        if (frameCount >= column.nextSpawn) {
          column.chars.push({
            text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
            y: -20,
            opacity: 0.08 + Math.random() * 0.07, // 8-15% opacity
          })
          column.nextSpawn = frameCount + 80 + Math.random() * 120
        }

        // Update and draw characters
        column.chars = column.chars.filter(char => {
          char.y += column.speed
          
          // Fade out as it goes down
          const progress = char.y / canvas.height
          const currentOpacity = char.opacity * (1 - progress * 0.5)
          
          if (char.y > canvas.height + 50) return false

          // Draw text
          ctx.font = '14px "Fira Code", "JetBrains Mono", monospace'
          ctx.fillStyle = `rgba(16, 185, 129, ${currentOpacity})`
          ctx.shadowColor = 'rgba(16, 185, 129, 0.4)'
          ctx.shadowBlur = 8
          ctx.textAlign = 'center'
          ctx.fillText(char.text, column.x, char.y)
          ctx.shadowBlur = 0

          return true
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [initColumns])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{ opacity: 0.8 }}
    />
  )
}

