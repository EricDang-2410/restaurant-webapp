import Link from "next/link"
import React from "react"

interface HeaderSocialProps {}

const socials: string[] = ["Facebook", "Instagram", "X"]

const HeaderSocial = ({}: HeaderSocialProps) => {
  return (
    <div className="flex justify-end">
      <div className="flex">
        {socials.map((social, idx) => (
          <div key={`${social}_${idx}`} className="flex">
            <Link
              key={`${social}_${idx}`}
              href={"#"}
              className="hover:underline text-[14px] text-center"
            >
              {social}
            </Link>
            {idx !== socials.length - 1 && <div className="px-2"> | </div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeaderSocial
