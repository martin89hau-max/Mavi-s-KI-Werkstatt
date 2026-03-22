'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 w-full bg-zinc-200/70 backdrop-blur-md border-b border-zinc-300/50">
      <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
        <span className="font-bold text-zinc-900 text-lg">Mavi&apos;s KI Werkstatt</span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-zinc-900 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-700"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col px-8 pb-4 gap-4 text-sm font-medium text-zinc-700 bg-zinc-200/90">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="hover:text-zinc-900">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
