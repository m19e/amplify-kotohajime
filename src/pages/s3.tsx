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
  const data = await Storage.get("kuroneko.png", { level: "public" })
  return <img src={data} alt="kuroneko" />
}

const fetcherText = async () => {
  const data = await Storage.get("memories-of-kindness.txt", {
    level: "public",
    download: true,
  })

  const lines = (await (data.Body as Blob).text()).split("\n").map((l, i) => (
    <li key={i} className="min-h-[1rem] whitespace-nowrap">
      {l}
    </li>
  ))

  return <ul>{lines}</ul>
}

const Sample = () => {
  const { data, isLoading } = useSWR("/sample", fetcherText)
  if (isLoading) {
    return <p>Loading...</p>
  }

  return <>{data}</>
}

export default S3
