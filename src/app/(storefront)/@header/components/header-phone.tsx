import Link from "next/link"
import React from "react"

interface HeaderPhoneProps {}

const HeaderPhone = ({}: HeaderPhoneProps) => {
  return (
    <Link href={"#"} className="hover:underline text-[14px]">
      01-800-123-456
    </Link>
  )
}

export default HeaderPhone
