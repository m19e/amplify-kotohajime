import { useState } from "react"

import { Authenticator } from "@aws-amplify/ui-react"
import { Amplify, DataStore, Predicates, SortDirection } from "aws-amplify"
import useSWR from "swr"
import "@aws-amplify/ui-react/styles.css"
import awsExports from "src/aws-exports"
import { Tabs } from "src/components/Tabs"
import { Board } from "src/models"
import { Header } from "src/ui-components"
import type { TabID } from "src/types"

const fetchBoards = async () => {
  return await DataStore.query(Board, Predicates.ALL, {
    sort: ob =>
      ob.name(SortDirection.DESCENDING).createdAt(SortDirection.ASCENDING),
  }).then(values =>
    values.map(b => (
      <li key={b.id}>
        {b.message}({b.name})
      </li>
    )),
  )
}
const Boards = () => {
  const { data: boards, isLoading } = useSWR("/boards", fetchBoards, {
    suspense: true,
    fallbackData: [],
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  return <ol className="my-3">{boards}</ol>
}

const contents: Record<TabID, JSX.Element | null> = {
  list: <Boards />,
  create: null,
  update: null,
  delete: null,
}

Amplify.configure({ ...awsExports })

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
              <div className="min-h-[8rem] bg-white">{contents[tab]}</div>
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

export default Auth
