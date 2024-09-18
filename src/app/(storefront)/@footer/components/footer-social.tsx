import React from "react"

const FooterSocial = () => {
  return (
    <div>
      <div className="text-[14px] text-primary uppercase font-bold">Socials</div>
      {["Facebook", "Instagram", "X"].map((link, idx) => (
        <div
          key={`${link}_${idx}`}
          className="my-3 text-[14px] text-white cursor-pointer hover:underline"
        >
          {link}
        </div>
      ))}
    </div>
  )
}

export default FooterSocial
