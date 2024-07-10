import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { Martini, Pill, Cigarette } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Lubiar
        </Typography>
        <Typography className="max-w-2xl" variant="h2">
          Abordaje Psicologico
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco
        </Typography>
        <Link href="#" target="_blank">
          <Button size="tiny" variant="ghost">
            {`Contacto`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Pandem.dev hero image"
          src="/pic2.jpg"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Abordamos
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Cigarette size={24} />}
              headline="Tabaquismo"
              description="El tabaquismo es una enfermedad crónica que causa dependencia al tabaco, afectando gravemente la salud con enfermedades como cáncer de pulmón y problemas cardíacos. También impacta negativamente a quienes rodean al fumador."
            />
            <Feature
              icon={<Martini size={24} />}
              headline="Alcoholismo"
              description="El alcoholismo es una enfermedad crónica que causa dependencia al alcohol, afectando la salud física, mental y el entorno social."
            />
            <Feature
              icon={<Pill size={24} />}
              headline="Cocainomania"
              description="La adicción a la cocaína es una enfermedad crónica que genera dependencia física y emocional a esta droga. Afecta gravemente la salud, causando problemas cardíacos, neurológicos y mentales. También impacta negativamente en la vida personal y social del individuo. "
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            ¿Quiénes somos?
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Lubiar se caracteriza por tener un equipo
            conformado por Terapeutas en Adicciones,
            Técnicos en Neurolingüistica, Psicólogos y
            Psiquiatras. Buscamos acompañar a las personas
            que padecen consumo problemático de sustancias
            en su recorrido de recuperación centrándonos en
            el bienestar y en los requerimientos de cada
            paciente en particular.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/pic3.jpg"
          />
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Talleres
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Realizamos talleres grupales o individuales. Los
            grupales requieren un cupo mínimo. Los talleres
            individuales se llevarán a cabo dependiendo de
            las necesidades de cada persona.
            <br />. Logro de objetivos (individual)
            <br />. Inteligencia emocional
            <br />. Psicodrama (grupal)
            <br />. Comunicación efectiva (grupal)
            <br />. Grupos de charla de madres de hijos en
            consumo
          </Typography>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Contáctanos
          </Typography>
          <div>
            Envianos un mail o un mensaje por Whatsapp
          </div>
          <Link
            href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Contacto`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
