import React from "react"
import { Input, InputProps } from "@/components/ui/input"

export interface FormInputProps extends InputProps {}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, ...props }, ref) => <Input {...props} className={className} ref={ref} />,
)

FormInput.displayName = "FormInput"

export default FormInput
