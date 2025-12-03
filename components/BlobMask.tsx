'use client'

import Image from 'next/image'

interface BlobMaskProps {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
}

/**
 * BlobMask Component
 * 
 * Displays an image inside an organic animated blob mask with smooth morphing motions.
 * Similar to the hero animation used on Lando Norris's official website.
 * 
 * Features:
 * - Smooth, organic blob morphing animation (20s cycle)
 * - Multiple keyframe points for natural movement
 * - Dark border that animates with the blob shape
 * - Hover effect for subtle image zoom
 * - Fully responsive and accessible
 */
export default function BlobMask({ 
  src, 
  alt, 
  className = '', 
  sizes,
  priority = false 
}: BlobMaskProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Animated blob mask container */}
      <div className="blob-mask-container">
        <div className="blob-mask-inner">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover blob-image"
            sizes={sizes}
          />
        </div>
      </div>
    </div>
  )
}

