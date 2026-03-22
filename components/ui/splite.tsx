'use client'
import { Suspense, lazy, useRef, useCallback, useEffect } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const dispatchMouseMove = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return
    const canvas = containerRef.current.querySelector('canvas')
    if (!canvas) return
    canvas.dispatchEvent(new MouseEvent('mousemove', {
      clientX,
      clientY,
      bubbles: true,
      cancelable: true,
    }))
  }, [])

  const handleTouch = useCallback((e: TouchEvent) => {
    const touch = e.touches[0]
    if (touch) dispatchMouseMove(touch.clientX, touch.clientY)
  }, [dispatchMouseMove])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.addEventListener('touchstart', handleTouch, { passive: true })
    el.addEventListener('touchmove', handleTouch, { passive: true })
    return () => {
      el.removeEventListener('touchstart', handleTouch)
      el.removeEventListener('touchmove', handleTouch)
    }
  }, [handleTouch])

  return (
    <div ref={containerRef} className={className} style={{ touchAction: 'none' }}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader" />
          </div>
        }
      >
        <Spline scene={scene} className="w-full h-full" />
      </Suspense>
    </div>
  )
}
