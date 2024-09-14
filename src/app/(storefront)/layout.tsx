import { LayoutProps } from "@/types/globals"
import { ReactNode } from "react"

export interface StoreFrontLayoutProps extends LayoutProps {
  header: ReactNode
  footer: ReactNode
}

const StoreFrontLayout = ({ header, footer, children }: StoreFrontLayoutProps) => {
  return (
    <div>
      {header}
      {children}
      {footer}
    </div>
  )
}

export default StoreFrontLayout
