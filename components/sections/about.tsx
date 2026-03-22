import { Trophy, Cpu, Users } from 'lucide-react'

const facts = [
  { icon: Trophy, text: '1. Preis KI Hackathon' },
  { icon: Cpu, text: 'KI-Entwickler & Automatisierungsexperte' },
  { icon: Users, text: 'Lösungen für KMUs & Selbstständige' },
]

export function About() {
  return (
    <section id="ueber-mich" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Über mich</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Ich bin Mavi — KI-Enthusiast, Entwickler und Gründer der KI Werkstatt.
              Mein Ziel ist es, moderne KI-Technologie für jeden zugänglich zu machen:
              verständlich erklärt, praxisnah umgesetzt.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Ob Website, App oder automatisierter Workflow — ich baue Lösungen,
              die wirklich funktionieren. Keine Theorie, sondern echte Ergebnisse.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {facts.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-4 bg-zinc-200/80 border border-zinc-300/60 rounded-xl px-5 py-4"
              >
                <Icon className="w-5 h-5 text-zinc-700 flex-shrink-0" />
                <span className="text-zinc-800 text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
