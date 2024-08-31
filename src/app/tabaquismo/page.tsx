import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="mx-auto p-6 w-full max-w-[1280px] h-full bg-color-1">
      <h1 className="text-3xl font-bold mb-4">
        Tabaquismo
      </h1>
      <p className="mb-4">
        El tabaquismo es una adicción crónica provocada por
        el consumo habitual y compulsivo de tabaco,
        específicamente a través de cigarrillos u otras
        formas de consumo de tabaco como pipas, puros o
        cigarrillos electrónicos. Esta adicción se
        caracteriza por la dependencia física y psicológica
        del consumo de nicotina, que es la sustancia
        adictiva presente en el tabaco.
      </p>
      <p className="mb-4">
        Las personas que padecen tabaquismo encuentran
        difícil o imposible dejar de fumar o de consumir
        tabaco, a pesar de conocer los riesgos para la salud
        que conlleva este hábito. El tabaquismo es una de
        las principales causas de enfermedades graves como
        cáncer de pulmón, enfermedades cardíacas y
        respiratorias crónicas.{' '}
      </p>
      <p className="mb-4">
        Además de los efectos directos en la salud física,
        el tabaquismo también puede tener consecuencias
        negativas en la calidad de vida, incluyendo
        problemas económicos, dificultades en las relaciones
        interpersonales y problemas laborales.{' '}
      </p>
      <h1 className="text-3xl font-bold mb-4">Abordaje</h1>
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
