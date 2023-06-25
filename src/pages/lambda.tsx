import useSWR from "swr"

import type { LazyBoard } from "src/models"

const ENDPOINT =
  "https://kxnshqwisi.execute-api.ap-northeast-1.amazonaws.com/default/Kotohajime-staging"

const Lambda = () => {
  return <Content />
}

const fetcher = async () => {
  const res = await fetch(ENDPOINT)
  const { Items } = (await res.json()) as { Items: LazyBoard[] }

  return (
    <ul className="join-vertical join w-full rounded bg-white shadow">
      {Items.map(b => (
        <li key={b.id} className="join-item border px-4 py-2">
          {b.message} ({b.name})
        </li>
      ))}
    </ul>
  )
}

const Content = () => {
  const { data, isLoading } = useSWR(ENDPOINT, fetcher)

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex flex-col items-center gap-2 border-2 p-4">
      <h5 className="text-lg font-semibold">[Lambda result]</h5>
      <div>{data}</div>
    </div>
  )
}

export default Lambda
