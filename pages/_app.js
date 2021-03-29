/* eslint-disable react/prop-types */
import React from 'react'
import GlobalStyles from 'styles/Global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
