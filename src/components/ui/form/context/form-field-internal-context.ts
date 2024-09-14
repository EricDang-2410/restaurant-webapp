import React from "react"
import { FieldPath, FieldValues } from "react-hook-form"

type FormFieldInternalContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

export const FormFieldInternalContext = React.createContext<FormFieldInternalContextValue>(
  {} as FormFieldInternalContextValue,
)
