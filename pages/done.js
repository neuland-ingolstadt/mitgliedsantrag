import React from 'react'
import Container from '../components/Container'

export default function Done () {
  return (
    <Container title="Mitgliedsantrag">
      <div className="container">
        <p>
          Dein Mitgliedsantrag ist bei uns eingegangen!<br />
          Wir werden uns so schnell wie möglich bei dir melden. :)
        </p>
        <p>
          In der Zwischenzeit kannst du uns in unserem Voice-Chat besuchen:
        </p>
        <p>
          <a href="https://voice.informatik.sexy" target="_blank" rel="noreferrer">
            <button className="btn btn-primary btn-ghost">voice.informatik.sexy</button>
          </a>
        </p>
      </div>
    </Container>
  )
}
