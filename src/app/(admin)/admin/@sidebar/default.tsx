"use client"

import { useState } from "react"
import AdminSideBarHeader from "../_components/admin-sidebar-header"
import AdminSidebarMenu from "../_components/admin-sidebar-menu"
import { cn } from "@/lib/utils"

export interface AdminSideBarProps {}

const AdminSideBar = () => {
  const [toggleCollapsed, SetToggleCollapsed] = useState(false)
  return (
    <div
      className={cn(
        "h-screen max-w-[250px] shadow-lg border border-r-1",
        toggleCollapsed ? "w-fit" : "w-[15%]",
      )}
    >
      <AdminSideBarHeader collapsed={toggleCollapsed} onToggle={SetToggleCollapsed} />
      <AdminSidebarMenu collapsed={toggleCollapsed} />
    </div>
  )
}

export default AdminSideBar
