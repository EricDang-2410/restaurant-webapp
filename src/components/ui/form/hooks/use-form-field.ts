import { useFormContext } from "react-hook-form"
import React from "react"

import { FormFieldInternalContext } from "../context/form-field-internal-context"
import { FormItemContext } from "../context/form-item-context"

export const useFormField = () => {
  const fieldContext = React.useContext(FormFieldInternalContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}
