import Main from 'components/main'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>digg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
}
