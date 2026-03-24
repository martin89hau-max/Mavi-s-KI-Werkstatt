'use client'
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"

export function SplineSceneBasic() {
  return (
    <Card className="w-full bg-zinc-200/80 relative overflow-hidden border-zinc-300/60">
      <div className="flex flex-col md:flex-row md:h-[650px]">

        {/* Text — oben auf Mobile, links auf Desktop */}
        <div className="flex-1 p-6 md:p-10 relative z-10 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600">
            Mavi&apos;s KI Werkstatt
          </h1>
          <p className="mt-4 text-zinc-700 text-sm md:text-base max-w-lg">
            Wir automatisieren deine Prozesse mit modernster KI-Technologie.
            Intelligente Lösungen für dein Business.
          </p>
          <a
            href="#kontakt"
            className="mt-6 inline-flex self-start items-center gap-2 bg-zinc-900 hover:bg-zinc-700 text-white text-sm font-medium px-5 py-3 rounded-lg transition-colors"
          >
            Projekt starten →
          </a>
        </div>

        {/* Roboter — unten auf Mobile (feste Höhe), rechts auf Desktop */}
        <div className="flex-[1.4] relative h-[800px] md:h-auto">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

      </div>
    </Card>
  )
}
