import { Label } from "@/components/ui/label"
import { ReactNode } from "react"

export interface AdminContentsLayoutProps {
  children?: ReactNode
  title: string
}

const AdminContentsLayout = ({ title, children }: AdminContentsLayoutProps) => {
  return (
    <div>
      <div className="py-4 px-3">
        <Label className="text-lg">{title}</Label>
        {children}
      </div>
    </div>
  )
}

export default AdminContentsLayout
