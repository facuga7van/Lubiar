'use client'
import React from 'react'
import Typography from './typography'

interface CardProps {
  titulo: string
  descripcion: string
  objetivo: string
  duracion: string
  detalle: string
  modalidad: string
}

const Card: React.FC<CardProps> = ({
  titulo,
  descripcion,
  objetivo,
  duracion,
  detalle,
  modalidad
}) => {
  return (
    <div
      className="border border-purple-300/35 bg-gray-500/5 rounded-lg p-4
        w-full shadow-lg"
    >
      <Typography
        className="font-bold text-lg"
        variant="h2"
      >
        {titulo}
      </Typography>
      <Typography className="mt-2" variant="p">
        {descripcion}
      </Typography>
      <Typography
        className="mt-4 font-semibold"
        variant="h6"
      >
        Objetivo:
      </Typography>
      <Typography className="mt-1" variant="p">
        {objetivo}
      </Typography>
      <Typography
        className="mt-4 font-semibold"
        variant="h6"
      >
        Duración:
      </Typography>
      <Typography className="mt-1" variant="p">
        {duracion}
      </Typography>
      <Typography
        className="mt-4 font-semibold"
        variant="h6"
      >
        Detalles:
      </Typography>
      <Typography className="mt-1" variant="p">
        {detalle}
      </Typography>
      <Typography
        className="mt-4 font-semibold"
        variant="h6"
      >
        Modalidad:
      </Typography>
      <Typography className="mt-1" variant="p">
        {modalidad}
      </Typography>
    </div>
  )
}

export default Card
