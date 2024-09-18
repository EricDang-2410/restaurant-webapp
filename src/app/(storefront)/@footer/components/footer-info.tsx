import React from "react"

const FooterInfoItem = ({ title, desc }: FooterInfoItemProps) => {
  return (
    <div>
      <div className="text-[14px] text-primary uppercase font-bold">{title}</div>
      <div className="my-3 text-[14px] text-white">{desc}</div>
    </div>
  )
}

interface FooterInfoItemProps {
  title: string
  desc: string
}

interface FooterInfoProps {}
const FooterInfo = ({}: FooterInfoProps) => {
  return (
    <div>
      {[
        { text: "Address", desc: "123 3/2, District 7. HCM city" },
        { text: "Phone", desc: "01-800-123-456" },
      ].map((item) => (
        <FooterInfoItem title={item.text} key={item.text} desc={item.desc} />
      ))}
    </div>
  )
}

export default FooterInfo
