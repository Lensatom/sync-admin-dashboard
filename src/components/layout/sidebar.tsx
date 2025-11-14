"use client"

import LogoImage from "@/assets/images/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon, IIcons } from '../ui/icon'

export const sidebarWidth = "240px"

export interface INav {
  iconName: IIcons
  title: string
  path: string
}

export function Sidebar() {
  const pathname = usePathname()

  const navs:INav[] = [
    {
      iconName: "dashboard",
      title: "Dashboard",
      path: "/"
    },
    {
      iconName: "atm",
      title: "ATMs",
      path: "/atms"
    },
    {
      iconName: "dispatches",
      title: "Dispatches",
      path: "/dispatches"
    },
    {
      iconName: "account",
      title: "Account",
      path: "/account"
    }
  ]

  const isActive = (path: string) => {
    if (path === "/") return pathname === path
    return pathname?.includes(path)
  }

  return (
    <div style={{width: sidebarWidth}} className='fixed top-0 left-0 h-screen border-r border-gray.4 bg-white'>
      <div className='w-full py-8 px-6 flex'>
        <Image src={LogoImage} alt="Logo"  />
      </div>
      <nav>
        <ul className='flex flex-col space-y-2'>
          {navs.map((nav) => {
            const icon:IIcons = isActive(nav.path) ? `${nav.iconName}_active` : `${nav.iconName}`
            return (
              <li key={nav.title}>
                <Link
                  href={nav.path}
                  className={`
                    text-sm pl-6 h-12 flex items-center gap-2 border-l-[6px]
                    ${isActive(nav.path) ?
                      'text-main font-semibold bg-orange.2 border-main' :
                      'text-gray.12 font-medium bg-transparent border-transparent'
                    }
                  `}
                >
                  <Icon size={16} name={icon} padding={0} />
                  {nav.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}