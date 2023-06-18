import { useState } from "react"

import { Authenticator } from "@aws-amplify/ui-react"
import { Amplify } from "aws-amplify"
import "@aws-amplify/ui-react/styles.css"
import awsExports from "src/aws-exports"
import { Tabs } from "src/components/Tabs"
import {
  Header,
  BoardComponentCollection,
  PersonComponentCollection,
} from "src/ui-components"
import type { TabID } from "src/types"

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
              <div className="bg-white">
                <BoardComponentCollection />
                <PersonComponentCollection />
              </div>
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
