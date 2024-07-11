'use client'
import Link from 'next/link'
import Typography from '@/components/ui/typography'

export function Contact() {
  return (
    <div className="flex flex-col gap-4 max-w-2xl items-center">
      <Typography variant="p">
        Si tienes alguna pregunta o necesitas más
        información, no dudes en ponerte en contacto con
        nosotros.
      </Typography>
      <form className="flex flex-col gap-4 w-full filterHighlight">
        <input
          type="text"
          placeholder="Nombre"
          className="border p-2 rounded w-full"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="border p-2 rounded w-full"
        />
        <textarea
          placeholder="Mensaje"
          className="border p-2 rounded w-full"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Enviar
        </button>
      </form>
      <Typography variant="p">
        También puedes llamarnos al{' '}
        <Link href="#" className="text-blue-800">
          +54 9 11 1234-1234
        </Link>{' '}
        o enviarnos un correo a{' '}
        <Link
          href="mailto:info@lubiar.com"
          className="text-blue-800"
        >
          lubiar.salud@gmail.com
        </Link>
        .
      </Typography>
    </div>
  )
}
