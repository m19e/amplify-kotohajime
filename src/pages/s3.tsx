import { Authenticator } from "@aws-amplify/ui-react"
import { Storage, Amplify } from "aws-amplify"
import useSWR from "swr"
import "@aws-amplify/ui-react/styles.css"
import awsExports from "src/aws-exports"
import { Header } from "src/ui-components"

Amplify.configure({ ...awsExports })

const S3 = () => {
  return (
    <Authenticator>
      {() => (
        <div className="p-4">
          <Header className="my-4" />
          <p>※これは新たに利用した表示です。</p>
          <div className="border border-primary px-3 py-2">
            <Sample />
          </div>
        </div>
      )}
    </Authenticator>
  )
}

const fetcher = async () => {
  return await Storage.get("kuroneko.png", { level: "public" })
}

const Sample = () => {
  const { data, isLoading } = useSWR("/sample", fetcher)
  if (isLoading) {
    return <p>Loading...</p>
  }

  return <img src={data} alt="" />
}

export default S3
