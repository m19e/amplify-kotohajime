import { TAB_IDS } from "src/consts"
import type { TabID } from "src/types"

type TabsProps = {
  currentTab: TabID
  onSelect: (id: TabID) => void
}

export const Tabs = ({ currentTab, onSelect }: TabsProps) => {
  const tabs = TAB_IDS.map(id => (
    <Tab
      key={id}
      id={id}
      onSelect={() => onSelect(id)}
      selected={currentTab === id}
    />
  ))

  return <div className="tabs">{tabs}</div>
}

type TabProps = {
  id: TabID
  selected: boolean
  onSelect: () => void
}

const Tab = ({ id, selected, onSelect }: TabProps) => {
  const active = selected ? "tab-active" : ""

  return (
    <a className={"tab-lifted tab capitalize " + active} onClick={onSelect}>
      {id}
    </a>
  )
}
