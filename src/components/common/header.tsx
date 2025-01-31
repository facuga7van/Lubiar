'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Typography from '@/components/ui/typography'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '@/components/ui/drawer'
import { MenuIcon, X } from 'lucide-react'

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className }: SidebarProps) {
  const pathname = usePathname()
  const items = [
    {
      href: '/#abordamos',
      title: 'Abordaje',
      openInNewTab: false
    },
    {
      href: '/#aboutus',
      title: 'Sobre nosotros',
      openInNewTab: false
    },
    {
      href: '/#talleres',
      title: 'Talleres',
      openInNewTab: false
    },
    {
      href: '/#reseñas',
      title: 'Reseñas',
      openInNewTab: false
    },
    {
      href: '/#contacto',
      title: 'Contacto',
      openInNewTab: false
    }
  ]

  const getLogo = () => (
    <Link
      href="/"
      className="pointer flex items-center transition duration-300
        ease-in-out"
    >
      <img
        src="/logo.svg"
        className="mr-2"
        width={50}
        height={50}
      />
      <Typography className="!text-base font-medium ">
        Lubiar
      </Typography>
    </Link>
  )

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href ||
            pathname.includes(item.href)
          return (
            <Link
              href={item.href}
              className="pointer font-medium block w-fit hover:drop-shadow-lg
                transition duration-300 ease-in-out"
              target={item.openInNewTab ? '_blank' : ''}
              key={item.title}
            >
              <Typography
                variant="p"
                className={cn(selected && 'text-primary')}
              >
                {item.title}
              </Typography>
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <div
      className={cn(
        `flex md:h-12 h-14 items-center justify-center w-full
          shadow-md header border-b bg-color-1`,
        className
      )}
    >
      <div className="w-full max-w-[1280px] md:px-8 px-4">
        {/* Desktop */}
        <div className="flex items-center gap-x-8 w-full">
          <div className="md:flex-0 min-w-fit flex-1">
            {getLogo()}
          </div>
          <div className="hidden md:flex flex items-center w-full">
            <div className="flex items-center gap-x-8 flex-1"></div>
            <div className="flex items-center gap-x-8">
              {getHeaderItems()}
            </div>
          </div>
          {/* Mobile */}
          <div className="md:hidden flex gap-x-4 items-center">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="w-full flex items-end justify-end">
                        <X />
                      </div>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4">
                    {getHeaderItems()}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  )
}
