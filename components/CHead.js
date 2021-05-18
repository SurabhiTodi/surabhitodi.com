import Head from 'next/head'

export default function FirstArticle (props) {
  return (
    <Head>
      <title>{props.title} | Surabhi Todi</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
