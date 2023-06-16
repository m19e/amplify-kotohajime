/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import type * as React from "react"
import type { Person } from "../models"
import type { TextProps, ViewProps } from "@aws-amplify/ui-react"
import type { EscapeHatchProps } from "@aws-amplify/ui-react/internal"
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>
export declare type PersonComponentOverridesProps = {
  PersonComponent?: PrimitiveOverrideProps<ViewProps>
  tel?: PrimitiveOverrideProps<TextProps>
  email?: PrimitiveOverrideProps<TextProps>
  age?: PrimitiveOverrideProps<TextProps>
  name?: PrimitiveOverrideProps<TextProps>
} & EscapeHatchProps
export declare type PersonComponentProps = React.PropsWithChildren<
  Partial<ViewProps> & {
    person?: Person
  } & {
    overrides?: PersonComponentOverridesProps | undefined | null
  }
>
export default function PersonComponent(
  props: PersonComponentProps,
): React.ReactElement
