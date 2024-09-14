import { Controller, ControllerProps, FieldPath, FieldValues } from "react-hook-form"
import { FormFieldInternalContext } from "./context/form-field-internal-context"
import { useMemo } from "react"

const FormFieldInternal = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  const values = useMemo(
    () => ({
      name: props.name,
    }),
    [props.name],
  )
  return (
    <FormFieldInternalContext.Provider value={values}>
      <Controller {...props} />
    </FormFieldInternalContext.Provider>
  )
}

export default FormFieldInternal
