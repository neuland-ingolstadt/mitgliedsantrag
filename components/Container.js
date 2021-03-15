import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

export default function Container ({ title, children }) {
  return (
    <div className="terminal">
      <Head>
        <title>{title}</title>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="terminal-nav">
          <header className="terminal-logo">
            <div className="logo terminal-prompt">
              {title}
            </div>
          </header>
        </div>
        {children}
        <hr />
        <div className="container">
          <nav>
            <ul>
              <li><a href="https://neuland-ingolstadt.de/" rel="noreferrer" target="_blank">Neuland Ingolstadt</a></li>
              <li><a href="https://neuland-ingolstadt.de/impressum.htm" rel="noreferrer" target="_blank">Impressum und Datenschutzerkl&auml;rung</a></li>
            </ul>
          </nav>
        </div>
        <br />
      </div>
    </div>
  )
}
Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}
