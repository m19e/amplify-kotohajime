/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import type * as React from "react"
import type { BoardComponentProps } from "./BoardComponent"
import type { CollectionProps } from "@aws-amplify/ui-react"
import type { EscapeHatchProps } from "@aws-amplify/ui-react/internal"
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>
export declare type BoardComponentCollectionOverridesProps = {
  BoardComponentCollection?: PrimitiveOverrideProps<CollectionProps>
  BoardComponent?: BoardComponentProps
} & EscapeHatchProps
export declare type BoardComponentCollectionProps = React.PropsWithChildren<
  Partial<CollectionProps<any>> & {
    items?: any[]
    overrideItems?: (collectionItem: {
      item: any
      index: number
    }) => BoardComponentProps
  } & {
    overrides?: BoardComponentCollectionOverridesProps | undefined | null
  }
>
export default function BoardComponentCollection(
  props: BoardComponentCollectionProps,
): React.ReactElement
