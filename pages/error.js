import React from 'react'
import { useRouter } from 'next/router'
import Container from '../components/Container'

export default function Error () {
  const router = useRouter()

  return (
    <Container title="Fehler">
      <div className="container">
        <p>
          Uff, es ist ein Fehler aufgetreten.
        </p>
        <p>
          Bitte probiere es noch ein Mal. Wenn es dann immer noch nicht funktioniert, schreib uns bitte ein E-Mail an <a href="mailto:info@neuland-ingolstadt.de">info@neuland-ingolstadt.de</a>.
        </p>
        <p>
          {router.query.message}
        </p>
      </div>
    </Container>
  )
}
