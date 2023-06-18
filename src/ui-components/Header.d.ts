/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import type * as React from "react"
import type { FlexProps, TextProps } from "@aws-amplify/ui-react"
import type { EscapeHatchProps } from "@aws-amplify/ui-react/internal"
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>
export declare type HeaderOverridesProps = {
  Header?: PrimitiveOverrideProps<FlexProps>
  Title?: PrimitiveOverrideProps<TextProps>
  "This is sample component"?: PrimitiveOverrideProps<TextProps>
} & EscapeHatchProps
export declare type HeaderProps = React.PropsWithChildren<
  Partial<FlexProps> & {
    label?: string
  } & {
    overrides?: HeaderOverridesProps | undefined | null
  }
>
export default function Header(props: HeaderProps): React.ReactElement
