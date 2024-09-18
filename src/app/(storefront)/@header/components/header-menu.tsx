"use client"

import { PAGE_URL } from "@/constants/page-url"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

interface Menu {
  text: string
  link: string
}

const menu: Menu[] = [
  {
    text: "Home",
    link: PAGE_URL.HOME,
  },
  {
    text: "Restaurants",
    link: PAGE_URL.RESTAURANTS,
  },
  {
    text: "Favorites",
    link: PAGE_URL.FAVORITES,
  },
]
interface HeaderMenuProps {}

const HeaderMenu = ({}: HeaderMenuProps) => {
  const pathName = usePathname()
  return (
    <div className={clsx("flex justify-evenly w-1/2 items-center py-5")}>
      {menu.map((item, idx) => (
        <Link href={item.link} key={`${item}_${idx}`} className="group uppercase text-[13px]">
          {item.text}
          <div
            className={clsx(
              "h-1 w-full rounded-sm group-hover:bg-primary",
              pathName !== item.link ? "bg-white" : "bg-primary",
            )}
          />
        </Link>
      ))}
    </div>
  )
}

export default HeaderMenu
