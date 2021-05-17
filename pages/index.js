import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | Surabhi Todi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>My name is Surabhi Todi.</p>
      <p>This is my website.</p>
      <p>Learn more <a href="/about">about me</a>.</p>
      <p>Check out my <a href="/posts">posts</a>.</p>
    </div>
  )
}
