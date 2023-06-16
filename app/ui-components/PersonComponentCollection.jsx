/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react"
import { Person } from "../models"
import { SortDirection } from "@aws-amplify/datastore"
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal"
import PersonComponent from "./PersonComponent"
import { Collection } from "@aws-amplify/ui-react"
export default function PersonComponentCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props
  const itemsPagination = { sort: s => s.createdAt(SortDirection.ASCENDING) }
  const [items, setItems] = React.useState(undefined)
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Person,
    pagination: itemsPagination,
  }).items
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp)
      return
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async item => ({
          ...item,
          Boards: await item.Boards.toArray(),
        })),
      )
      setItems(loaded)
    }
    setItemsFromDataStore()
  }, [itemsProp, itemsDataStore])
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={3}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "PersonComponentCollection")}
      {...rest}
    >
      {(item, index) => (
        <PersonComponent
          person={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PersonComponent>
      )}
    </Collection>
  )
}
