import { ForwardedRef, forwardRef } from "react"
import { FormControl, FormFieldInternal, FormItem, FormLabel } from "."
import { FORM_VARIANT_TYPE } from "./constants/form-variant"
import { FormInput, FormInputPassword } from "./form-field-imports"
import { FormInputProps } from "./components/form-input"
import { cn } from "@/lib/utils"

export interface BaseFormFieldProps {
  name: string
  label?: string
  variant: string

  className?: string
  wrapperClassName?: string
}
const FORM_VARIANT_LOADER = {
  [FORM_VARIANT_TYPE.TEXT]: FormInput,
  [FORM_VARIANT_TYPE.PASSWORD]: FormInputPassword,
}

export interface FormFieldTextVariantProps extends FormInputProps {
  variant: "TEXT"
}

export interface FormFieldPasswordVariantProps extends FormInputProps {
  variant: "PASSWORD"
}

export type FormFieldVariantBaseProps = FormFieldTextVariantProps | FormFieldPasswordVariantProps
const FormField = (
  {
    name,
    label,
    variant,
    className,
    wrapperClassName,
    ...baseProps
  }: BaseFormFieldProps & FormFieldVariantBaseProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const InputComponent = FORM_VARIANT_LOADER[variant] as any
  return (
    <FormFieldInternal
      name={name}
      render={({ field }) => {
        return (
          <FormItem ref={ref} className={wrapperClassName}>
            {label ? <FormLabel>{label}</FormLabel> : null}
            <FormControl>
              <InputComponent {...field} {...baseProps} className={cn(className)} />
            </FormControl>
          </FormItem>
        )
      }}
    />
  )
}

FormField.displayName = "FormField"

export default forwardRef(FormField)
