import { LayoutProps } from "@/types/globals"
import { ReactNode } from "react"

export interface AdminLayoutProps extends LayoutProps {
  sidebar: ReactNode
}

const AdminLayout = ({ sidebar, children }: AdminLayoutProps) => {
  return (
    <div className="flex flex-row h-screen justify-start">
      {sidebar}
      {children}
    </div>
  )
}

export default AdminLayout
