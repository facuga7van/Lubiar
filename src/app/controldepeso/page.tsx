import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="mx-auto p-6 w-full max-w-[1280px] h-full bg-color-1">
      <h1 className="text-3xl font-bold mb-4">
        Tratamiento de Descenso de Peso
      </h1>
      <p className="mb-4">
      El objetivo está centrado en ayudar a las personas a alcanzar un peso saludable mediante un
      enfoque integral que combine terapia con láser de baja frecuencia, orientación nutricional, apoyo
      psicológico y ejercicio físico.
      Nuestro plan inicial es de 6 meses y se divide en dos fases.
      </p>
      <h1 className="text-3xl font-bold mb-4">Fase 1: Adaptación y establecimiento de hábitos</h1>
      <p className="mb-4">
      
      La duración de esta fase es de 3 meses.
      En esta fase se creará un entorno favorable para el cambio, promoviendo la adherencia a
      nuevas rutinas, educación alimenticia y abordajes psicológicos para afrontar y reaprender las
      conductas para reducir el peso de manera efectiva.
      Los componentes del tratamiento en fase 1 son:
      <ul>
        <li>
        Pesaje y aplicación laser de baja frecuencia en la primera consulta presencial.
        </li>
        <li>
        Nutricionista de forma virtual, donde se diseñara un plan de alimentación personalizado,
        sostenible y equilibrado. Además se le brindará educación nutricional.
        </li>
        <li>
        Psicóloga de forma virtual, para poder identificar y trabajar patrones emocionales y
        comportamentales asociados con la alimentación.
        </li>
        <li>
        Actividad física.
        </li>
      </ul>
      </p>
      <p className="mb-4">
        El alcoholismo no solo afecta al individuo que lo
        padece, sino también a su entorno cercano, causando
        tensiones familiares, problemas económicos y
        sociales. Es importante buscar tratamiento y apoyo
        profesional para manejar y superar esta enfermedad.
      </p>
      <p className="mb-4">
      Se realizaran nuevos pesajes por el equipo cada vez que se vayan a aplicar el láser, considerando
      este tiempo estimado en una vez por mes.
      </p>
      <h1 className="text-3xl font-bold mb-4">Fase 2: Consolidación, disminución y/o mantenimiento del peso.</h1>
      <p className="mb-4">
      La duración de esta fase es de 3 meses.
      Objetivo Principal es asegurar la sostenibilidad de los hábitos adquiridos, promoviendo la
      autonomía del paciente y previniendo el efecto rebote, la continuidad de la pérdida de peso, si así
      lo requiera.
      Los componentes del tratamiento en fase 2 son:
      <ul>
        <li>
        Aplicación láser mensual para mantenimiento del metabolismo y control del apetito.
        </li>
        <li>
        En Nutrición habrá una revisión quincenal con enfoque en autonomía alimentaria.
        </li>
        <li>
        En Psicología se realizaran sesiones quincenales para generar prevención de recaídas,
        trabajo en autoestima y autoimagen y refuerzo de estrategias de manejo emocional.
        </li>
        <li>
        En lo que respecta a lo físico continuar con las sesiones guiadas o seguimiento de rutinas
        establecidas.
        </li>
      </ul>
      </p>
      <p className="mb-4">
      El éxito del programa dependerá del compromiso del paciente y del trabajo colaborativo del
      equipo interdisciplinario. Es esencial que se respeten normas y pautas establecidas. El equipo
      siempre apuesta a que la información que brinda el paciente sobre sus hábitos y conducta es
      verídica.
      Desde el equipo informamos que el plan de 2 fases es lo mínimo que se necesita para comenzar a
      ver cambios, recomendamos realizar tratamientos prolongados para poder ver mejores
      resultados.
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
