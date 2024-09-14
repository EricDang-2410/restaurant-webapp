import { Label } from "@/components/ui/label"
import { PAGE_URL } from "@/constants/page-url"
import { cn } from "@/lib/utils"
import { Home, LayoutGrid, UserRound } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export interface AdminSidebarMenuProps {
  collapsed: boolean
}

const menuItems = [
  {
    name: "Home",
    icon: <Home />,
    page: PAGE_URL.ADMIN_OVERVIEW,
  },
  {
    name: "Products",
    icon: <LayoutGrid />,
    page: PAGE_URL.ADMIN_PRODUCTS,
  },
  {
    name: "Customers",
    icon: <UserRound />,
    page: PAGE_URL.ADMIN_CUSTOMERS,
  },
]
const AdminSidebarMenu = ({ collapsed }: AdminSidebarMenuProps) => {
  const pathName = usePathname()
  return (
    <>
      {menuItems.map((item, idx) => (
        <Link
          className={cn(
            "w-full py-4 pl-4 flex justify-start hover:bg-gray-200",
            pathName === item.page && "bg-gray-200",
            collapsed && "pl-0",
          )}
          href={item.page}
          key={idx}
        >
          <div
            className={cn(
              "flex items-center",
              !collapsed ? "gap-5 w-1/2" : "w-full justify-center",
            )}
          >
            {item.icon}
            {!collapsed && <Label>{item.name}</Label>}
          </div>
        </Link>
      ))}
    </>
  )
}

export default AdminSidebarMenu
