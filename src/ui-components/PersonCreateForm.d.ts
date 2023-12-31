/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import type * as React from "react"
import type { GridProps, TextFieldProps } from "@aws-amplify/ui-react"
import type { EscapeHatchProps } from "@aws-amplify/ui-react/internal"
export declare type ValidationResponse = {
  hasError: boolean
  errorMessage?: string
}
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse,
) => ValidationResponse | Promise<ValidationResponse>
export declare type PersonCreateFormInputValues = {
  name?: string
  email?: string
  age?: number
  tel?: string
}
export declare type PersonCreateFormValidationValues = {
  name?: ValidationFunction<string>
  email?: ValidationFunction<string>
  age?: ValidationFunction<number>
  tel?: ValidationFunction<string>
}
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>
export declare type PersonCreateFormOverridesProps = {
  PersonCreateFormGrid?: PrimitiveOverrideProps<GridProps>
  name?: PrimitiveOverrideProps<TextFieldProps>
  email?: PrimitiveOverrideProps<TextFieldProps>
  age?: PrimitiveOverrideProps<TextFieldProps>
  tel?: PrimitiveOverrideProps<TextFieldProps>
} & EscapeHatchProps
export declare type PersonCreateFormProps = React.PropsWithChildren<
  {
    overrides?: PersonCreateFormOverridesProps | undefined | null
  } & {
    clearOnSuccess?: boolean
    onSubmit?: (
      fields: PersonCreateFormInputValues,
    ) => PersonCreateFormInputValues
    onSuccess?: (fields: PersonCreateFormInputValues) => void
    onError?: (
      fields: PersonCreateFormInputValues,
      errorMessage: string,
    ) => void
    onChange?: (
      fields: PersonCreateFormInputValues,
    ) => PersonCreateFormInputValues
    onValidate?: PersonCreateFormValidationValues
  } & React.CSSProperties
>
export default function PersonCreateForm(
  props: PersonCreateFormProps,
): React.ReactElement
