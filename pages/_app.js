import React from 'react'
import PropTypes from 'prop-types'
import 'terminal.css'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}
MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.any
}

export default MyApp
