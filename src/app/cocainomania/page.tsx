import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="mx-auto p-6 w-full max-w-[1280px] h-full bg-color-1">
      <h1 className="text-3xl font-bold my-4">
        Adicto a la Cocaína, crack y derivados
      </h1>
      <p className="mb-4">
        Ser adicto a la cocaína significa tener una
        dependencia física y psicológica de esta droga
        estimulante. La adicción a la cocaína se caracteriza
        por el consumo compulsivo y descontrolado de la
        sustancia, a pesar de conocer sus efectos adversos y
        las consecuencias negativas que puede tener en la
        salud y en la vida personal.
      </p>
      <p className="mb-4">
        Los síntomas de la adicción a la cocaína pueden
        incluir:
      </p>
      <ul>
        <li>
          <strong>Compulsión por consumir:</strong> La
          persona siente una urgencia intensa y difícil de
          resistir de consumir cocaína.
        </li>
        <li>
          <strong>Tolerancia:</strong> Necesidad de aumentar
          la dosis para experimentar los mismos efectos
          deseados.
        </li>
        <li>
          <strong>Síntomas de abstinencia:</strong>{' '}
          Experimentar malestar físico y emocional cuando no
          se consume cocaína, lo que puede llevar a buscar
          la sustancia nuevamente para aliviar estos
          síntomas.
        </li>
        <li>
          <strong>Impacto en la vida diaria:</strong>{' '}
          Problemas en el trabajo, en las relaciones
          personales y financieros debido al consumo de
          cocaína.
        </li>
        <li>
          <strong>Deseo persistente:</strong> Pensamientos
          recurrentes sobre el consumo de cocaína y
          dificultad para dejar de usarla a pesar de los
          intentos.
        </li>
      </ul>
      <p className="my-4">
        La adicción a la cocaína es una enfermedad grave que
        requiere intervención. Los tratamientos pueden
        incluir terapia conductual, apoyo psicológico, y en
        algunos casos, medicamentos.
      </p>
      <p className="mb-4">
        El tratamiento temprano puede mejorar las
        posibilidades de recuperación y reducir el impacto
        negativo en la salud y en la vida cotidiana.
      </p>
      <h1 className="text-3xl font-bold my-4">Abordaje</h1>
      <p className="mb-4">
        La terapia láser alternativa funciona por
        estimulación y actúa en el centro de la adicción.
        Consiste en la aplicación de un láser de baja
        frecuencia en distintos puntos de cara y cabeza. El
        proceso se realiza en una sesión de dos aplicaciones
        que se lleva a cabo en el mismo día. Trabajamos con
        dos opciones, la primera es abordaje láser y
        herramientas brindadas por nuestros terapeutas para
        la modificación de la conduta en torno al cigarrillo
        en el mismo día. Como segunda opción ofrecemos,
        abordaje láser y acompañamiento psicológico virtual
        para trabajar el desarme de habito por fuera del
        consultorio. Cada uno de estos abordajes consta de
        diferentes valores. Comuníquese al WhatsApp para
        solicitar más información al respecto.{' '}
      </p>
      <div className="flex w-full justify-end">
        <Link href="/#contacto">
          <Button
            size="lg"
            variant="ghost"
            className="filterHighlight"
          >
            {`Contacto`}
          </Button>
        </Link>
      </div>
    </div>
  )
}
