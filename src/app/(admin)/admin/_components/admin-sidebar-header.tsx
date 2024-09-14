import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ChevronsLeft, ChevronsRight } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

export interface AdminSideBarHeaderProps {
  onToggle: Dispatch<SetStateAction<boolean>>
  collapsed: boolean
}

const AdminSideBarHeader = ({ collapsed, onToggle }: AdminSideBarHeaderProps) => {
  return (
    <div className="h-[10%] min-h-fit max-h-[250px] items-center flex w-full justify-between p-2">
      {!collapsed && <Label className="text-[20px]">Logo</Label>}
      <Button size="sm" variant="outline" onClick={() => onToggle((prev) => !prev)}>
        {collapsed ? <ChevronsRight /> : <ChevronsLeft />}
      </Button>
    </div>
  )
}

export default AdminSideBarHeader
