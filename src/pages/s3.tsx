import { useState } from "react"

import { Authenticator } from "@aws-amplify/ui-react"
import { Storage, Amplify } from "aws-amplify"
import type { S3ProviderListOutputItem } from "@aws-amplify/storage"
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
          <div className="rounded border-2 border-slate-400 px-3 py-2">
            <List />
          </div>
        </div>
      )}
    </Authenticator>
  )
}

const fetcherList = async () => {
  const data = await Storage.list("", { level: "protected" })

  return data
}

const File = ({ file }: { file: S3ProviderListOutputItem }) => {
  const handleDelete = () => {
    Storage.remove(file.key ?? "", { level: "protected" }).then(() =>
      alert(file.key + " を削除しました。"),
    )
  }

  return (
    <li className="join-item flex items-center justify-between border p-2">
      <span>
        {file.key} (size: {file.size})
      </span>
      <button className="btn-sm btn-circle btn" onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  )
}

const List = () => {
  const { data } = useSWR("/list", fetcherList)
  const items = data?.results.map(file => <File key={file.eTag} file={file} />)

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <h5 className="text-xl">
        files at <span className="font-semibold">/protected/</span>
      </h5>
      <ul className="join-vertical join w-full rounded bg-white shadow">
        {items}
      </ul>
    </div>
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
        className="textarea-bordered textarea rounded-lg"
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
