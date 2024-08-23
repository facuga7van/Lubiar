'use client'
import Link from 'next/link'
import Typography from '@/components/ui/typography'
import { useState } from 'react'

export function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const whatsappMessage = `Hola, soy ${name}. ${message}`
    const whatsappUrl = `https://wa.me/5491112341234?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="flex flex-col gap-4 max-w-2xl items-center">
      <Typography variant="p">
        Si tienes alguna pregunta o necesitas más
        información, no dudes en ponerte en contacto con
        nosotros.
      </Typography>
      <form
        className="flex flex-col gap-4 w-full filterHighlight"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Nombre"
          className="border p-2 rounded w-full"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          required
        />
        <textarea
          placeholder="Mensaje"
          className="border p-2 rounded w-full"
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          required
        />
        <button
          type="submit"
          className="filterHighlight w-full buttonLub"
        >
          {`Enviar`}
        </button>
      </form>
      <Typography variant="p">
        También puedes llamarnos al{' '}
        <Link href="#" className="text-blue-800">
          +54 9 11 1234-1234
        </Link>{' '}
        o enviarnos un correo a{' '}
        <Link
          href="mailto:lubiar@lubiar.com.ar"
          className="text-blue-800"
        >
          lubiar@lubiar.com.ar
        </Link>
        .
      </Typography>
    </div>
  )
}
