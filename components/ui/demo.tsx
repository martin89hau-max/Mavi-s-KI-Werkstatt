'use client'
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[650px] bg-zinc-200/80 relative overflow-hidden border-zinc-300/60">

      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600">
            Mavi&apos;s KI Werkstatt
          </h1>
          <p className="mt-4 text-zinc-700 max-w-lg">
            Wir automatisieren deine Prozesse mit modernster KI-Technologie.
            Intelligente Lösungen für dein Business.
          </p>
        </div>
        {/* Right content — bigger robot */}
        <div className="flex-[1.4] relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
