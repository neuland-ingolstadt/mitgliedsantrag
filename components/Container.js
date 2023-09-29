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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container">
        <h2 className='heading'>
          Mitgliedsantrag
        </h2>
        <img className='logo' src="/logo.svg" alt="Students' Life" />
        <div className='clear' />
        {children}
        <hr />
        <p>
          <small>
            Von <a href="https://students-life.de/" rel="noreferrer" target="_blank">Students&apos; Life e.V.</a>
            <> &ndash; </>
            bereitgestellt durch <a href="https://neuland-ingolstadt.de/" rel="noreferrer" target="_blank">Neuland Ingolstadt e.V.</a>
            <> &ndash; </>
            <a href="https://assets.neuland.app/students-life/imprint.pdf" rel="noreferrer" target="_blank">Impressum</a>
            <> &ndash; </>
            <a href="https://assets.neuland.app/students-life/privacy.pdf" rel="noreferrer" target="_blank">Datenschutzerkl&auml;rung</a>
          </small>
        </p>
        <br />
      </div>
    </div>
  )
}
Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}
