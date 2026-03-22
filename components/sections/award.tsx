import { Trophy } from 'lucide-react'

export function Award() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-zinc-300/60 to-zinc-200/40 border border-zinc-300/60 rounded-2xl px-8 py-10">
          <div className="flex-shrink-0 bg-zinc-100 rounded-full p-5 border border-zinc-300/60">
            <Trophy className="w-10 h-10 text-yellow-600" />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-1">
              Auszeichnung
            </p>
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">
              1. Preis — KI Hackathon
            </h3>
            <p className="text-zinc-600 text-sm max-w-lg">
              Unter allen Teilnehmern ausgezeichnet für die innovativste KI-Lösung.
              Praxisnah, schnell umgesetzt und direkt einsatzbereit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
