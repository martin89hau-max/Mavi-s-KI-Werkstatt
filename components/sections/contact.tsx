'use client'
import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

const EMAIL = 'martin89hau@gmail.com'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string

    const subject = encodeURIComponent(`Projektanfrage von ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="kontakt" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 mb-2">Kontakt</h2>
        <p className="text-zinc-500 mb-8 md:mb-12">Hast du ein Projekt? Schreib mir einfach.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Form */}
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-4 bg-zinc-200/80 border border-zinc-300/60 rounded-2xl p-8 text-center">
              <Send className="w-10 h-10 text-zinc-600" />
              <p className="font-semibold text-zinc-900 text-lg">Fast geschafft!</p>
              <p className="text-zinc-600 text-sm">
                Dein E-Mail-Programm öffnet sich mit der fertigen Nachricht — einfach absenden.
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-sm font-medium text-zinc-700 underline underline-offset-4 hover:text-zinc-900"
              >
                Neue Nachricht schreiben
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 bg-zinc-200/80 border border-zinc-300/60 rounded-2xl p-8"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-name" className="text-sm font-medium text-zinc-700">
                  Name
                </label>
                <input
                  required
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Dein Name"
                  className="rounded-lg border border-zinc-300 bg-zinc-100 px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-email" className="text-sm font-medium text-zinc-700">
                  E-Mail
                </label>
                <input
                  required
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="deine@email.de"
                  className="rounded-lg border border-zinc-300 bg-zinc-100 px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-message" className="text-sm font-medium text-zinc-700">
                  Nachricht
                </label>
                <textarea
                  required
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Worum geht's?"
                  className="rounded-lg border border-zinc-300 bg-zinc-100 px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 bg-zinc-900 hover:bg-zinc-700 text-white font-medium text-sm px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Absenden
              </button>
            </form>
          )}

          {/* E-Mail link */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h3 className="font-semibold text-zinc-900 text-lg mb-2">Lieber per E-Mail?</h3>
              <p className="text-zinc-600 text-sm mb-4">
                Kein Problem — schreib mir direkt, ich antworte meistens innerhalb eines Tages.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 border border-zinc-400 rounded-lg px-5 py-3 hover:bg-zinc-300/50 transition-colors"
              >
                <Mail className="w-4 h-4" />
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
