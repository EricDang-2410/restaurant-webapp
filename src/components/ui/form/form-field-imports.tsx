import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

const FormInput = dynamic(() => import("./components/form-input"), {
  ssr: true,
  loading: () => <Skeleton className="h-[32px] w-full" />,
})

const FormInputPassword = dynamic(() => import("./components/form-password"), {
  ssr: true,
  loading: () => <Skeleton className="h-[32px] w-full" />,
})

export { FormInput, FormInputPassword }
