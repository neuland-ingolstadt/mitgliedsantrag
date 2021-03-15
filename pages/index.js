import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Container from '../components/Container'

const SUBMIT_URL = '/api/submit'
const STATUS_STUDENT = 'student'
const STATUS_NON_STUDENT = 'non-student'

export default function Home () {
  const router = useRouter()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const [course, setCourse] = useState('')
  const [degree, setDegree] = useState('')
  const [university, setUniversity] = useState('')
  const [graduation, setGraduation] = useState('')
  const [acceptStatute, setAcceptStatute] = useState(false)
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [acceptSignal, setAcceptSignal] = useState(false)

  async function submit (e) {
    try {
      e.preventDefault()

      const form = {
        firstName,
        lastName,
        birthDate,
        addressLine1,
        addressLine2,
        phoneNumber,
        email,
        status,
        course,
        degree,
        university,
        graduation,
        acceptStatute,
        acceptPrivacy,
        acceptSignal
      }
      const resp = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      if (resp.status === 200) {
        router.push('/done')
      } else {
        throw new Error(await resp.text())
      }
    } catch (e) {
      console.error(e)
      alert(`Ups, etwas ist schief gelaufen.\n\nProbiere es bitte noch ein Mal oder schreib uns eine E-Mail an info@neuland-ingolstadt.de.\n\n(Fehlermeldung: ${e.message})`)
    }
  }

  return (
    <Container title="Mitgliedsantrag">
      <div className="container">
        <p>
          Füll den Antrag unten aus und wir melden uns so schnell wie möglich. :)
        </p>
        <p>
          Deine Daten werden nur im Rahmen deiner Mitgliedschaft bei Neuland Ingolstadt e.V. verwendet.
        </p>
        <form onSubmit={submit}>
          <fieldset>
            <legend>Persönliche Daten</legend>
            <div className="form-group">
              <label htmlFor="firstname">Vorname:</label>
              <input
                id="firstname"
                type="text"
                autoComplete="given-name"
                required
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Nachname:</label>
              <input
                id="lastname"
                type="text"
                autoComplete="family-name"
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthdate">Geburtsdatum:</label>
              <input
                id="birthdate"
                type="date"
                autoComplete="bday"
                required
                value={birthDate}
                onChange={e => setBirthDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Straße, Hausnummer:</label>
              <input
                id="address"
                name="address1"
                type="text"
                autoComplete="address-line1"
                required value={addressLine1}
                onChange={e => setAddressLine1(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address2">PLZ, Stadt:</label>
              <input
                id="address2"
                type="text"
                autoComplete="address-line2"
                required
                value={addressLine2}
                onChange={e => setAddressLine2(e.target.value)}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Kontaktdaten</legend>
            <div className="form-group">
              <label htmlFor="email">E-Mail:</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cellphone">Mobilfunknummer:</label>
              <input
                id="cellphone"
                type="tel"
                autoComplete="tel"
                required
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Status</legend>
            <div className="form-group">
              <input
                id="status1"
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
                <label htmlFor="course">Studiengang</label>
                <input
                  id="course"
                  type="text"
                  placeholder="z.B. Informatik"
                  value={course}
                  onChange={e => setCourse(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="degree">Angestrebter Abschluss</label>
                <input
                  id="degree"
                  type="text"
                  placeholder="z.B. Bachelor of Science"
                  value={degree}
                  onChange={e => setDegree(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="university">Hochschule</label>
                <input
                  id="university"
                  type="text"
                  placeholder="z.B. Technische Hochschule Ingolstadt"
                  value={university}
                  onChange={e => setUniversity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="graduation">Voraussichtliches Studienende</label>
                <input
                  id="graduation"
                  type="text"
                  placeholder="z.B. WS 22/23"
                  value={graduation}
                  onChange={e => setGraduation(e.target.value)}
                />
              </div>
            </fieldset>
          }

          <fieldset>
            <legend>Einverständnis</legend>
            <div className="form-group">
              <input
                id="rules"
                type="checkbox"
                required
                checked={acceptStatute}
                onChange={e => setAcceptStatute(e.target.checked)}
              />
              <label htmlFor="rules">
                Ich erkenne die <a href="https://pad.informatik.sexy/Satzung" target="_blank" rel="noreferrer">Satzung</a> des Vereins an.
              </label>
            </div>
            <div className="form-group">
              <input
                id="privacy"
                type="checkbox"
                required
                checked={acceptPrivacy}
                onChange={e => setAcceptPrivacy(e.target.checked)}
              />
              <label htmlFor="privacy">
                Ich habe die <a href="https://pad.informatik.sexy/Datenschutzhinweise" target="_blank" rel="noreferrer">Datenschutzhinweise</a> zur Kenntnis genommen und bin mit der <a href="https://pad.informatik.sexy/Datenschutzordnung" target="_blank" rel="noreferrer">Datenschutzordnung</a> des Vereins einverstanden.
              </label>
            </div>
            <div className="form-group">
              <input
                id="signal"
                type="checkbox"
                required
                checked={acceptSignal}
                onChange={e => setAcceptSignal(e.target.checked)}
              />
              <label htmlFor="signal">
                Ich erlaube die Verwendung meiner Mobilfunknummer zur Nutzung der Signal-Gruppe.<sup>2</sup>
              </label>
            </div>
          </fieldset>
          <p>
            <sup>1</sup> Nachweis über Studierendenstatus erforderlich<br />
            <sup>2</sup> Unterliegt <a href="https://signal.org/legal/" target="_blank" rel="noreferrer">zusätzlichen Datenschutzbestimmungen</a>
          </p>
          <button className="btn btn-primary">Abschicken</button>
        </form>
      </div>
    </Container>
  )
}
