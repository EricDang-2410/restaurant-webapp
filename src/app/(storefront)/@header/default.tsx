import { Button } from "@/components/ui/button"

export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <div className="w-full sticky top-0 z-20 bg-neutral-white px-1 shadow-md">
      <div className="w-full flex justify-center py-2">
        <Button>~header~</Button>
      </div>
    </div>
  )
}

export default Header
