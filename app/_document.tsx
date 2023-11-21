import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='favicon.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <link
            rel='stylesheet'
            href='https://unpkg.com/flowbite@1.3.3/dist/flowbite.min.css'
          />
          <link rel='stylesheet' href='/public/fonts/Univers-Body.ttf' />
        </Head>

        <body className='w-full'>

          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
