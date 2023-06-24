import useSWR from "swr"

const ENDPOINT =
  "https://kxnshqwisi.execute-api.ap-northeast-1.amazonaws.com/default/Kotohajime-staging"

const Lambda = () => {
  return <Content />
}

const fetcher = async () => {
  const res = await fetch(ENDPOINT)
  return (await res.json()) as string
}

const Content = () => {
  const { data, isLoading } = useSWR(ENDPOINT, fetcher)

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex flex-col items-center border-2">
      <h5 className="text-lg font-semibold">[Lambda result]</h5>
      <div>{data}</div>
    </div>
  )
}

export default Lambda
