/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import type * as React from "react"
import type { Board } from "../models"
import type {
  IconProps,
  ImageProps,
  TextProps,
  ViewProps,
} from "@aws-amplify/ui-react"
import type { EscapeHatchProps } from "@aws-amplify/ui-react/internal"
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>
export declare type BoardComponentOverridesProps = {
  BoardComponent?: PrimitiveOverrideProps<ViewProps>
  createdAt?: PrimitiveOverrideProps<TextProps>
  name?: PrimitiveOverrideProps<TextProps>
  message?: PrimitiveOverrideProps<TextProps>
  "Line 1"?: PrimitiveOverrideProps<IconProps>
  image?: PrimitiveOverrideProps<ImageProps>
} & EscapeHatchProps
export declare type BoardComponentProps = React.PropsWithChildren<
  Partial<ViewProps> & {
    board?: Board
  } & {
    overrides?: BoardComponentOverridesProps | undefined | null
  }
>
export default function BoardComponent(
  props: BoardComponentProps,
): React.ReactElement
