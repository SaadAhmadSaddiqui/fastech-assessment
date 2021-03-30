/* eslint-disable react/prop-types */
import React from 'react'
import GlobalStyles from 'styles/Global'
import 'react-datepicker/dist/react-datepicker.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
