import { Button } from "@/components/ui/button";
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
