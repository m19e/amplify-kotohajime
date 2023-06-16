/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react"
import { Board } from "../models"
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal"
import { SortDirection } from "@aws-amplify/datastore"
import BoardComponent from "./BoardComponent"
import { Collection } from "@aws-amplify/ui-react"
export default function BoardComponentCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props
  const itemsFilterObj = {
    field: "name",
    operator: "eq",
    operand: "test name",
  }
  const itemsFilter = createDataStorePredicate(itemsFilterObj)
  const itemsPagination = {
    sort: s => s.createdAt(SortDirection.DESCENDING),
  }
  const [items, setItems] = React.useState(undefined)
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Board,
    criteria: itemsFilter,
    pagination: itemsPagination,
  }).items
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp)
      return
    }
    setItems(itemsDataStore)
  }, [itemsProp, itemsDataStore])
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      itemsPerPage={3}
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "BoardComponentCollection")}
      {...rest}
    >
      {(item, index) => (
        <BoardComponent
          board={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></BoardComponent>
      )}
    </Collection>
  )
}
