import React from "react"

interface HeaderTitleProps {
  title: string
}

const HeaderTitle = ({ title }: HeaderTitleProps) => {
  return <div className="text-[30px] font-bold uppercase tracking-wider text-center">{title}</div>
}

export default HeaderTitle
