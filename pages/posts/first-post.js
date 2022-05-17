import Link from 'next/link';
import Head from 'next/head';

export default function FirstPost() {
  return (
  <div>
    <Head>
      <title>First Post</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>First Post</h1>
    <Link href="/">
      <a>Back to home</a>
    </Link>
  </div>
  ) 
}