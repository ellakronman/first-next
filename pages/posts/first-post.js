import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>FirstPost</title>
                <script src="https://connect.facebook.net/en_US/sdk.js" />
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    ) 
}