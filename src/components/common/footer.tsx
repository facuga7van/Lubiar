'use client'
import Link from 'next/link'
import Typography from '@components/ui/typography'

export function Footer() {
  return (
    <footer
      className="flex h-12 items-center justify-center w-full border-t
        bg-color-1"
    >
      <div className="w-full max-w-[1280px] md:px-8 px-4 flex place-content-center">
        <div className="gap-x-11 md:flex flex-1 hidden">
          <Link
            href="/"
            className="pointer flex items-center"
          >
            <img
              src="/logo.svg"
              className="mr-3"
              width="40px"
            />
            <Typography className="!text-base font-medium ">
              Lubiar
            </Typography>
          </Link>
        </div>
        <div className="flex max-w-fit items-center gap-x-6">
          <Link
            href="https://www.facebook.com/profile.php?id=61559673185832"
            className="pointer block w-fit"
          >
            <Typography variant="p">Facebook</Typography>
          </Link>
          <Link
            href="#"
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              lubiar.salud@gmail.com
            </Typography>
          </Link>
          <Link href="#" className="pointer block w-fit">
            <Typography variant="p">
              54 9 11 7206-2121
            </Typography>
          </Link>
        </div>
      </div>
    </footer>
  )
}
