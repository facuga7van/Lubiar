import Typography from '@/components/ui/typography'
import Feature from './feature'
import ImageCarousel from '@/components/common/Carrousel'
import { Contact } from '@/components/common/contact'
import {
  Martini,
  Pill,
  Cigarette,
  Weight
} from 'lucide-react'
import Link from 'next/link'
import Whatsapp from '@/components/common/Whatsapp'
import Card from '@/components/ui/card'
const images = [
  '/carousel1.jpg',
  '/carousel2.jpg',
  '/carousel4.jpg'
]

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-12 md:px-36 pt-12 pb-24 px-8
        w-full items-center text-center gap-12 bg-color-1"
    >
      <Whatsapp />
      <div className="flex flex-col gap-6 items-center">
        <img
          width={268}
          height={206}
          alt="Lubiar logo image"
          src="/logo.jpg"
        />
        <Typography
          className="max-w-2xl hidden"
          variant="h1"
        >
          Lubiar
        </Typography>
        <div className="w-[40%] h-px bg-gray-300 my-2"></div>
        <Typography className="max-w-2xl" variant="h2">
          Entendemos de renacer
        </Typography>
        <Typography className="max-w-2xl" variant="h3">
          Abordajes psicológicos y alternativos para dejar de consumir
        </Typography>
        <Typography className="max-w-2xl" variant="h6">
          Realizamos tratamientos cognitivos conductuales,
          tratamientos láser de baja intensidad para la
          remisión de consumo y terapia floral. Nos
          caracterizamos por interrelacionar abordajes
          alternativos y convencionales.
        </Typography>
        <Link href="#contacto">
          <div className="filterHighlight buttonLub">
            {`Contacto`}
          </div>
        </Link>

        <div className="border-4 border-purple-300/35">
          <ImageCarousel images={images} interval={5000} />
        </div>
      </div>
      <div className="flex flex-col md:pt-24 gap-24 items-center">
        <section id="abordamos">
          <div className="flex flex-col gap-12 items-center">
            <Typography className="max-w-2xl" variant="h1">
              Abordamos
            </Typography>
            <div className="flex md:flex-row flex-col gap-12">
              <Link
                className="transform hover:scale-105 transition duration-300
                  ease-in-out"
                href="/descensodepeso"
              >
                <Feature
                  icon={<Weight size={24} />}
                  headline="Descenso de Peso"
                  description="El sobrepeso afecta la salud física y emocional, aumentando el riesgo de enfermedades y disminuyendo la calidad de vida."
                />
              </Link>
              <Link
                className="transform hover:scale-105 transition duration-300
                  ease-in-out"
                href="/tabaquismo"
              >
                <Feature
                  icon={<Cigarette size={24} />}
                  headline="Tabaquismo"
                  description="El tabaquismo es una enfermedad crónica que causa dependencia al tabaco, afectando gravemente la salud con enfermedades como cáncer de pulmón y problemas cardíacos."
                />
              </Link>
              <Link
                className="transform hover:scale-105 transition duration-300
                  ease-in-out"
                href="/alcoholismo"
              >
                <Feature
                  icon={<Martini size={24} />}
                  headline="Alcoholismo"
                  description="El alcoholismo es una enfermedad crónica que causa dependencia al alcohol, afectando la salud física, mental y el entorno social."
                />
              </Link>
              <Link
                className="transform hover:scale-105 transition duration-300
                  ease-in-out"
                href="/cocainomania"
              >
                <Feature
                  icon={<Pill size={24} />}
                  headline="Cocainomania"
                  description="La adicción a la cocaína es una enfermedad crónica que genera dependencia física y emocional a esta droga. Afecta gravemente la salud, causando problemas cardíacos, neurológicos y mentales."
                />
              </Link>
            </div>
          </div>
        </section>
        <section id="aboutus">
          <div className="flex flex-col gap-6 max-w-2xl items-center">
            <Typography className="max-w-2xl" variant="h1">
              ¿Quiénes somos?
            </Typography>
            <Typography className="max-w-2xl" variant="h6">
              Lubiar se caracteriza por tener en su equipo
              técnicos en adicciones, técnicos en
              programación neurolingüística, terapeutas
              florales, psicólogos y psiquiatras. Buscamos
              acompañar a las personas que padecen consumo
              problemático de sustancias en su recorrido de
              recuperación centrándonos en el bienestar y en
              los requerimientos de cada paciente en
              particular.
            </Typography>
            <div className="border-4 border-purple-300/35">
              <img
                width={805}
                height={405}
                alt="team image"
                src="/pic2.jpg"
                className="p-2"
              />
            </div>
          </div>
        </section>
        <section id="talleres">
          <div className="flex flex-col gap-12 items-center">
            <Typography className="max-w-2xl" variant="h1">
              Talleres
            </Typography>
            <Typography className="max-w-2xl" variant="h6">
              <div className="max-w-2xl">
                Realizamos talleres grupales o individuales.
                Los grupales requieren un cupo mínimo. Los
                talleres individuales se llevarán a cabo
                dependiendo de las necesidades de cada
                persona.
                <div className="flex flex-wrap gap-6">
                  <div className="min-w-xl py-6">
                    <Card
                      titulo={'Taller Focusing'}
                      descripcion={
                        'Descubre tus objetivos desde el corazón y lográ el cambio con Focusing.'
                      }
                      objetivo={
                        'Enseñar a los participantes a escuchar sus sensaciones corporales como guía para comprender y resolver situaciones personales o emocionales.'
                      }
                      duracion={
                        '1 sesión semanal de 1.5 a 2 horas aproximadamente'
                      }
                      detalle={
                        'El Focusing es una técnica centrada en la sensación física. Ayuda a acceder a la percepción interna y externa. Ideal para quienes desean trabajar desde el cuerpo y abordar situaciones personales.'
                      }
                      modalidad={'Grupal e individual'}
                    ></Card>
                  </div>
                  <div className="min-w-xl py-6">
                    <Card
                      titulo={'Inteligencia Emocional'}
                      descripcion={
                        'Descubre cómo tus emociones pueden transformar tu vida.'
                      }
                      objetivo={
                        'Brindar herramientas prácticas para desarrollar y fortalecer las habilidades de inteligencia emocional.'
                      }
                      duracion={
                        '1 sesión semanal de 1.5 horas aproximadamente'
                      }
                      detalle={
                        'Explorar cómo entender, gestionar y responder adecuadamente a las emociones en diferentes contextos. Ideal para mejorar la autogestión y relaciones personales.'
                      }
                      modalidad={
                        'Grupal o individual (grupos reducidos)'
                      }
                    ></Card>
                  </div>
                  <div className="min-w-xl py-6">
                    <Card
                      titulo={
                        'Equilibrio entre mente y cuerpo'
                      }
                      descripcion={
                        'Aprende a manejar el estrés y mejorar tu bienestar integral.'
                      }
                      objetivo={
                        'Brindar herramientas prácticas para manejar el estrés, mejorar la salud emocional y fortalecer el cuerpo.'
                      }
                      duracion={
                        '1 sesión semanal de 1.5 a 2 horas aproximadamente'
                      }
                      detalle={
                        'Combina mindfulness, relajación, movimiento físico consciente y educación emocional. Ideal para quienes buscan una experiencia integral.'
                      }
                      modalidad={'Grupal e individual'}
                    ></Card>
                  </div>
                </div>
              </div>
            </Typography>
          </div>
        </section>
        <section id="contacto">
          <div className="flex flex-col gap-6 items-center">
            <Typography className="max-w-2xl" variant="h1">
              Contáctanos
            </Typography>
            <Contact />
          </div>
        </section>
      </div>
    </div>
  )
}
