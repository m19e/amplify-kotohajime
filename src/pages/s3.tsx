import { useState } from "react"

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
          <div className="rounded border border-primary px-3 py-2">
            <Upload />
          </div>
        </div>
      )}
    </Authenticator>
  )
}

const Upload = () => {
  const [fileName, setFileName] = useState("")
  const [content, setContent] = useState("")

  const handleUpload = async () => {
    const name = fileName.includes(".") ? fileName : `${fileName}.txt`
    await Storage.put(name, content, { level: "protected" })
    alert(name + " を保存しました。")
  }

  return (
    <div className="form-control space-y-2 py-2 pb-0">
      <input
        className="input"
        type="text"
        onChange={e => setFileName(e.currentTarget.value)}
      />
      <textarea
        className="rounded-lg p-4"
        rows={3}
        onChange={e => setContent(e.currentTarget.value)}
      />
      <div className="flex justify-end">
        <button className="btn-primary btn" onClick={handleUpload}>
          upload
        </button>
      </div>
    </div>
  )
}

const _fetcher = async () => {
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
