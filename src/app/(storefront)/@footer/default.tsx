import { Button } from "@/components/ui/button"

export interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <div className="w-full py-2 flex justify-center">
      <Button>~footer~</Button>
    </div>
  )
}

export default Footer
