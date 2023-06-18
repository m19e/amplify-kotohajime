"use client"

import { useState } from "react"

import { Authenticator } from "@aws-amplify/ui-react"
import { Amplify } from "aws-amplify"
import "@aws-amplify/ui-react/styles.css"
import awsExports from "src/aws-exports"
import { Header } from "src/ui-components"

const TAB_IDS = ["list", "create", "update", "delete"] as const

type TabID = (typeof TAB_IDS)[number]

Amplify.configure(awsExports)

const Auth = () => {
  const [tab, setTab] = useState<TabID>("list")

  return (
    <Authenticator>
      {({ signOut }) => (
        <main className="flex flex-col items-center">
          <div className="space-y-4 py-4">
            <Header className="py-4" />
            <p>※これはUIコンポーネントを利用した表示です。</p>
            <div className="flex flex-col">
              <Tabs currentTab={tab} onSelect={setTab} />
              <div className="h-8 w-full bg-white"></div>
            </div>
            <button className="btn-info btn" onClick={signOut}>
              Sign out
            </button>
          </div>
        </main>
      )}
    </Authenticator>
  )
}

type TabsProps = {
  currentTab: TabID
  onSelect: (id: TabID) => void
}
const Tabs = ({ currentTab, onSelect }: TabsProps) => {
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

export default Auth
