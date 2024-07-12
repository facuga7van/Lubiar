import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="mx-auto p-6 w-full max-w-[1280px] h-full bg-color-1">
      <h1 className="text-3xl font-bold mb-4">
        Alcoholismo
      </h1>
      <p className="mb-4">
        Es una enfermedad crónica caracterizada por el
        consumo compulsivo y descontrolado de alcohol, que
        conduce a la dependencia física y emocional de esta
        sustancia. Se considera una adicción grave que
        afecta tanto la salud física como la mental de la
        persona.
      </p>
      <p className="mb-4">
        Las personas con alcoholismo encuentran difícil o
        imposible limitar su consumo de alcohol, a pesar de
        los problemas que este hábito les pueda causar en su
        vida personal, laboral, o de salud. Esta adicción
        puede tener efectos devastadores a largo plazo,
        incluyendo daño hepático, problemas neurológicos,
        trastornos mentales como la depresión, y
        dificultades en las relaciones familiares y
        sociales.
      </p>
      <p className="mb-4">
        El alcoholismo no solo afecta al individuo que lo
        padece, sino también a su entorno cercano, causando
        tensiones familiares, problemas económicos y
        sociales. Es importante buscar tratamiento y apoyo
        profesional para manejar y superar esta enfermedad.
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Abordaje Láser
      </h1>
      <p className="mb-4">
        Es una terapia alternativa que por estimulación
        actúa en el centro de la adicción. Consiste en la
        aplicación de un láser de baja frecuencia en
        distintos puntos de cara y cabeza. El proceso se
        lleva a cabo en el mismo día, dependiendo de la
        sustancia a tratar varia la cantidad de repeticiones
        en la aplicación. El efecto del láser es quitar la
        dependencia física de la sustancia para que con
        mayor tranquilidad comience el proceso de
        deshabituación del consumo.
      </p>
      <p className="mb-4">
        En lo que respecta a abordajes de sustancias
        psicoactivas (cocaína, alcohol, crack, etc..) se
        trabaja con un acompañamiento conductual, donde la
        persona a tratarse tendrá sesiones con psicóloga,
        terapeuta en adicciones y psiquiatra si así lo
        requiriese.
      </p>
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
  )
}
