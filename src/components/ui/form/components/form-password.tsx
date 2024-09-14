import React, { useState } from "react"
import { Input, InputProps } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOff } from "lucide-react"

export interface FormInputPasswordProps extends InputProps {}

const FormInputPassword = React.forwardRef<HTMLInputElement, FormInputPasswordProps>(
  (props, ref) => {
    const [isHidden, setIsHidden] = useState(true)

    return (
      <div className="relative group">
        <Input {...props} ref={ref} type={isHidden ? "password" : "text"} />
        <Button
          type="button"
          size="sm"
          onClick={() => setIsHidden((prev) => !prev)}
          className="bg-transparent hover:bg-transparent absolute top-1/2 right-3 transform -translate-y-1/2"
        >
          {isHidden ? (
            <EyeOff className="text-gray-500 hover:text-gray-300" size="20px" />
          ) : (
            <EyeIcon className="text-gray-500 hover:text-gray-300" size="20px" />
          )}
        </Button>
      </div>
    )
  },
)

FormInputPassword.displayName = "FormInputPassword"

export default FormInputPassword
