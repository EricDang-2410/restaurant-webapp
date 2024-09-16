import HeaderTitle from "./components/header-title"
import HeaderSocial from "./components/header-social"
import clsx from "clsx"
import { Separator } from "@/components/ui/separator"
import HeaderPhone from "./components/header-phone"

export interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={clsx("bg-neutral-white flex justify-center items-center", "w-full z-20 px-1")}
      >
        <div className={clsx("w-full py-2 max-w-[80%]", " grid grid-cols-3")}>
          <HeaderPhone />
          <HeaderTitle title="Restaurant" />
          <HeaderSocial />
        </div>
      </div>
      <Separator className="mt-3 max-w-[80%]" />
    </div>
  )
}

export default Header
