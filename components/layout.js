import React from 'react'
import Head from 'next/head'

import { GlobalStyle, TypographicContext } from '../components/design'
import { GA_TRACKING_ID } from '../lib/gtag'
import { Favicon, Social } from '../components/meta'

const Analytics = React.memo(() => (
  <React.Fragment>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}');
`
      }}
    />
  </React.Fragment>
))

export const Layout = React.memo(props => (
  <React.Fragment>
    <Head>
      <Analytics />
      <Favicon />
      <Social />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <title>Triam Udom Open House</title>
    </Head>
    <GlobalStyle />
    {props.mdx ? (
      <div style={{ margin: '40px 40px' }}>
        <TypographicContext>{props.children}</TypographicContext>
      </div>
    ) : (
      props.children
    )}
  </React.Fragment>
))
