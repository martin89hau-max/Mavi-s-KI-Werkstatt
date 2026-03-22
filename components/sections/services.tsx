import { Globe, Smartphone, Lightbulb, Workflow } from 'lucide-react'
import { Card } from '@/components/ui/card'

const services = [
  {
    icon: Globe,
    title: 'Webseiten',
    description: 'Moderne, KI-gestützte Websites — von der Landingpage bis zum kompletten Unternehmensauftritt.',
  },
  {
    icon: Smartphone,
    title: 'Apps',
    description: 'Web- und Mobile-Apps, die echte Probleme lösen — entwickelt schnell und präzise mit KI.',
  },
  {
    icon: Lightbulb,
    title: 'Beratung',
    description: 'Ich zeige dir, wo KI in deinem Betrieb Zeit und Geld spart — konkret und umsetzbar.',
  },
  {
    icon: Workflow,
    title: 'Automatisierung',
    description: 'Workflows, die von selbst laufen: E-Mails, Daten, Berichte — automatisiert statt manuell.',
  },
]

export function Services() {
  return (
    <section id="leistungen" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 mb-2">Leistungen</h2>
        <p className="text-zinc-500 mb-12">Was ich für dein Business tun kann.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="p-6 bg-zinc-200/80 border-zinc-300/60 hover:bg-zinc-100/90 transition-colors"
            >
              <Icon className="w-7 h-7 text-zinc-700 mb-4" />
              <h3 className="font-semibold text-zinc-900 text-lg mb-2">{title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
