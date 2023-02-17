import React, { useState } from 'react'
import Container from '../components/Container'

const STATUS_STUDENT = 'student'
const STATUS_NON_STUDENT = 'non-student'

export default function Home () {
  const [status, setStatus] = useState(null)

  return (
    <Container title="Mitgliedsantrag">
      <div className="container">
        <p>
          Füll den Antrag unten aus und wir melden uns so schnell wie möglich. :)
        </p>
        <p>
          Deine Daten werden nur im Rahmen deiner Mitgliedschaft bei Neuland Ingolstadt e.V. verwendet.
        </p>
        <form method="post" action="/api/submit">
          <fieldset>
            <legend>Persönliche Daten</legend>
            <div className="form-group">
              <label htmlFor="firstName">Vorname*</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Nachname*</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthDate">Geburtsdatum*</label>
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                autoComplete="bday"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="street">Straße und Hausnummer*</label>
              <input
                id="street"
                name="street"
                type="text"
                autoComplete="street-address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">PLZ*</label>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                autoComplete="postal-code"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Stadt*</label>
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
                required
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Kontaktdaten</legend>
            <div className="form-group">
              <label htmlFor="email">E-Mail*</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Mobilfunknummer*</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                autoComplete="tel"
                required
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Status</legend>
            <div className="form-group">
              <input
                id="status1"
                name="status"
                value={STATUS_STUDENT}
                type="radio"
                required
                checked={status === STATUS_STUDENT}
                onChange={e => setStatus(e.target.value)}
              />
              <label htmlFor="status1">Student<sup>1</sup> (Kein Mitgliedsbeitrag)</label>
            </div>
            <div className="form-group">
              <input
                id="status2"
                name="status"
                value={STATUS_NON_STUDENT}
                type="radio"
                required
                checked={status === STATUS_NON_STUDENT}
                onChange={e => setStatus(e.target.value)}
              />
              <label htmlFor="status2">Nicht Student (Mitgliedsbeitrag in Höhe von 20 € pro Jahr)</label>
            </div>
          </fieldset>

          {status === STATUS_STUDENT &&
            <fieldset>
              <legend>Studium</legend>
              <div className="form-group">
                <label htmlFor="course">Studiengang*</label>
                <input
                  id="course"
                  name="course"
                  type="text"
                  placeholder="z.B. Informatik"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="degree">Angestrebter Abschluss*</label>
                <input
                  id="degree"
                  name="degree"
                  type="text"
                  placeholder="z.B. Bachelor of Science"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="university">Hochschule*</label>
                <input
                  id="university"
                  name="university"
                  type="text"
                  placeholder="z.B. Technische Hochschule Ingolstadt"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="graduation">Voraussichtliches Studienende*</label>
                <input
                  id="graduation"
                  name="graduation"
                  type="text"
                  placeholder="z.B. WS 24/25"
                  required
                />
              </div>
            </fieldset>
          }

          <fieldset>
            <legend>Einverständnis</legend>
            <div className="form-group">
              <input
                id="acceptStatute"
                name="acceptStatute"
                type="checkbox"
                required
              />
              <label htmlFor="acceptStatute">
                Ich erkenne die <a href="https://pad.informatik.sexy/Satzung" target="_blank" rel="noreferrer">Satzung</a> des Vereins an.*
              </label>
            </div>
            <div className="form-group">
              <input
                id="acceptPrivacy"
                name="acceptPrivacy"
                type="checkbox"
                required
              />
              <label htmlFor="acceptPrivacy">
                Ich habe die <a href="https://pad.informatik.sexy/Datenschutzhinweise" target="_blank" rel="noreferrer">Datenschutzhinweise</a> zur Kenntnis genommen und bin mit der <a href="https://pad.informatik.sexy/Datenschutzordnung" target="_blank" rel="noreferrer">Datenschutzordnung</a> des Vereins einverstanden.*
              </label>
            </div>
            <div className="form-group">
              <input
                id="acceptSignal"
                name="acceptSignal"
                type="checkbox"
              />
              <label htmlFor="acceptSignal">
                Ich erlaube die Verwendung meiner Mobilfunknummer zur Nutzung der Signal-Gruppe.<sup>2</sup>
              </label>
            </div>
          </fieldset>
          <p>
            * Pflichtfeld<br />
            <sup>1</sup> Nachweis über Studierendenstatus erforderlich<br />
            <sup>2</sup> Unterliegt <a href="https://signal.org/legal/" target="_blank" rel="noreferrer">zusätzlichen Datenschutzbestimmungen</a>
          </p>
          <button className="btn btn-primary">Abschicken</button>
        </form>
      </div>
    </Container>
  )
}
