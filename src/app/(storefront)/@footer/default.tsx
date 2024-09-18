import FooterInfo from "./components/footer-info"
import FooterLink from "./components/footer-link"
import FooterSocial from "./components/footer-social"

export interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <div className="w-full py-2 flex justify-center items-center h-[60vh] bg-[#20272F]">
      <div className="grid grid-cols-4 w-full max-w-[70%]">
        <div className="text-[30px] font-bold uppercase text-white">Restaurant</div>
        <FooterLink />
        <FooterSocial />
        <FooterInfo />
      </div>
    </div>
  )
}

export default Footer
