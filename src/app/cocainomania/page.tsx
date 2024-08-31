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
        Es una terapia alternativa que por estimulación
        actúa en el centro de la adicción. Consiste en la
        aplicación de un láser de baja frecuencia en
        distintos puntos de cara, cabeza, oreja y mano. El
        proceso se lleva a cabo en el mismo día, dependiendo
        del grado de adicción varía la cantidad de
        repeticiones. El efecto del láser es generar
        endorfina endogena por estimulación para que con
        mayor tranquilidad comience el proceso de
        deshabituación del consumo. La persona tendrá la
        posibilidad de comenzar terapia floral con el
        seguimiento de de psicólogos cognitivo conductual.
      </p>
      <p className="mb-4">
        El abordaje para sustancias lleva un acompañamiento
        psicológico y psiquiátrico si fuese necesario.
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
