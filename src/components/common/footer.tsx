'use client'
import Link from 'next/link'
import Typography from '@components/ui/typography'

export function Footer() {
  return (
    <footer className="flex h-12 items-center justify-center w-full border-t">
      <div className="w-full max-w-[1280px] md:px-8 px-4 flex place-content-center">
        <div className="gap-x-11 md:flex flex-1 hidden">
          <Link
            href="/"
            className="pointer flex items-center"
          >
            <img
              src="/loguito.png"
              className="mr-3"
              width="40px"
            />
            <Typography className="!text-white !text-base font-medium ">
              Lubiar
            </Typography>
          </Link>
        </div>
        <div className="flex max-w-fit items-center gap-x-4">
          <Link
            href="#"
            target="_blank"
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              Contáctanos
            </Typography>
          </Link>
          <Link
            href="#"
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              lubiar@gmail.com
            </Typography>
          </Link>
          <Link href="#" className="pointer block w-fit">
            <Typography variant="p">
              +54 9 11 1234-1234
            </Typography>
          </Link>
        </div>
      </div>
    </footer>
  )
}
