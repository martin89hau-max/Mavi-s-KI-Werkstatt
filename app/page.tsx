import { Navbar } from '@/components/ui/navbar'
import { SplineSceneBasic } from '@/components/ui/demo'
import { Services } from '@/components/sections/services'
import { Award } from '@/components/sections/award'
import { Projects } from '@/components/sections/projects'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero */}
        <section id="hero" className="py-10 md:py-16 px-4 md:px-8">
          <div className="max-w-5xl mx-auto flex flex-col gap-4">
            <p className="text-xs md:text-sm tracking-widest text-foreground/50 uppercase font-medium">
              KI Agentur · Automatisierung · Innovation
            </p>
            <SplineSceneBasic />
          </div>
        </section>

        <Services />
        <Award />
        <Projects />
        <About />
        <Contact />

        {/* Footer */}
        <footer className="border-t border-zinc-300/50 py-8 px-4 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Mavi&apos;s KI Werkstatt — Alle Rechte vorbehalten
        </footer>
      </main>
    </>
  )
}
