import { Database, Code2, PlusCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'

const projects = [
  {
    icon: Database,
    title: 'Hausmeister-Datenbank',
    tag: 'Referenzprojekt',
    description:
      'KI-gestützte Verwaltungssoftware für einen Hausmeisterservice — Aufträge, Kunden und Abrechnung auf einen Blick.',
  },
  {
    icon: Code2,
    title: 'Private KI-Apps',
    tag: 'Eigenentwicklung',
    description:
      'Mehrere eigene Anwendungen entwickelt, die KI-Modelle direkt in den Alltag integrieren — von Automatisierungen bis zu smarten Tools.',
  },
  {
    icon: PlusCircle,
    title: 'Dein Projekt',
    tag: 'Nächstes Projekt',
    description:
      'Du hast eine Idee? Ich setze sie um — egal ob App, Website oder Automatisierung. Melde dich einfach.',
    cta: true,
  },
]

export function Projects() {
  return (
    <section id="projekte" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 mb-2">Projekte</h2>
        <p className="text-zinc-500 mb-12">Was bereits entstanden ist — und was als nächstes kommen könnte.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {projects.map(({ icon: Icon, title, tag, description, cta }) => (
            <Card
              key={title}
              className={`p-6 border-zinc-300/60 flex flex-col gap-4 ${
                cta
                  ? 'bg-zinc-900 text-white border-zinc-700'
                  : 'bg-zinc-200/80 hover:bg-zinc-100/90 transition-colors'
              }`}
            >
              <div className="flex items-start justify-between">
                <Icon className={`w-6 h-6 ${cta ? 'text-zinc-300' : 'text-zinc-700'}`} />
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    cta ? 'bg-zinc-700 text-zinc-300' : 'bg-zinc-300/60 text-zinc-600'
                  }`}
                >
                  {tag}
                </span>
              </div>
              <div>
                <h3 className={`font-semibold text-lg mb-2 ${cta ? 'text-white' : 'text-zinc-900'}`}>
                  {title}
                </h3>
                <p className={`text-sm leading-relaxed ${cta ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {description}
                </p>
              </div>
              {cta && (
                <a
                  href="#kontakt"
                  className="mt-auto text-sm font-medium text-zinc-200 underline underline-offset-4 hover:text-white"
                >
                  Projekt starten →
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
