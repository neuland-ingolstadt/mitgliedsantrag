import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import Container from '../components/Container'

export default function Home () {
  return (
    <Container>
      <Form method="post" action="/api/submit">
        <Row>
          <h4>Persönliche Daten</h4>
        </Row>
        <Row>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="firstName">Vorname</Form.Label>
              <Form.Control
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
              />
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="lastName">Nachname</Form.Label>
              <Form.Control
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Form.Label htmlFor="begin">Telefonnummer</Form.Label>
            <Form.Control
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
            />
          </Col>
          <Col sm>
            <Form.Label htmlFor="begin">Geburtsdatum</Form.Label>
            <Form.Control
              id="birthDate"
              name="birthDate"
              type="date"
              autoComplete="bday"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Form.Label htmlFor="begin">Private E-Mail-Adresse</Form.Label>
            <Form.Control
              id="privateEmail"
              name="privateEmail"
              type="email"
            />
          </Col>
          <Col sm>
            <Form.Label htmlFor="begin">Hochschul-E-Mail-Adresse</Form.Label>
            <Form.Control
              id="uniEmail"
              name="uniEmail"
              type="email"
              pattern=".+@thi\.de"
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <h4>Semesteranschrift</h4>
        </Row>
        <Row>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="uniStreet">Straße (Semesteranschrift)</Form.Label>
              <Form.Control
                id="uniStreet"
                name="uniStreet"
                type="text"
              />
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="uniCity">PLZ, Ort (Semesteranschrift)</Form.Label>
              <Form.Control
                id="uniCity"
                name="uniCity"
                type="text"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <h4>Wohnsitz</h4>
        </Row>
        <Row>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="homeStreet">Straße (Wohnsitz)</Form.Label>
              <Form.Control
                id="homeStreet"
                name="homeStreet"
                type="text"
              />
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="homeCity">PLZ, Ort (Wohnsitz)</Form.Label>
              <Form.Control
                id="homeCity"
                name="homeCity"
                type="text"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <h4>Studium</h4>
        </Row>
        <Row>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="faculty">Fakultät</Form.Label>
              <Form.Select name="faculty" required>
                <option value="BS">Business School</option>
                <option value="E">Elektro- und Informatikstechnik</option>
                <option value="I">Informatik</option>
                <option value="IAW">Institut für Akademische Weiterbildung</option>
                <option value="M">Maschinenbau</option>
                <option value="NI">Nachhaltige Infrastruktur</option>
                <option value="WI">Wirtschaftsingenieurwesen</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Label htmlFor="begin">Studienbeginn</Form.Label>
            <Form.Control
              id="uniStart"
              name="uniStart"
              type="text"
              placeholder="WS / SS YYYY"
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h4>SEPA-Lastschriftmandat</h4>
            <p>
              <strong>Gläubiger-ID:</strong> DE69ZZZ00002056000
            </p>
            <p>
              <strong>Mandatsreferenz:</strong> Die Mandatsreferenz wird separat mitgeteilt
            </p>
            <p>
              <small>
                Ich ermächtige Students' Life e. V., Zahlungen von meinem Konto mittels Lastschrift einzuziehen. Zugleich weise ich mein Kreditinstitut an, die von Students' Life e. V. auf mein Konto gezogene Lastschrift einzulösen. Hinweis: Ich kann innerhalb von acht Wochen, beginnend mit dem Belastungsdatum, die Erstattung des belasteten Betrages verlangen. Es gelten dabei die mit meinem Kreditinstitut vereinbarten Bedingungen.
              </small>
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="sepaFirstName">Vorname</Form.Label>
              <Form.Control
                id="sepaFirstName"
                name="sepaFirstName"
                type="text"
                autoComplete="given-name"
                required
              />
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="sepaLastName">Nachname</Form.Label>
              <Form.Control
                id="sepaLastName"
                name="sepaLastName"
                type="text"
                autoComplete="family-name"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="sepaStreet">Straße</Form.Label>
              <Form.Control
                id="sepaStreet"
                name="sepaStreet"
                type="text"
              />
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="sepaCity">PLZ, Ort</Form.Label>
              <Form.Control
                id="sepaCity"
                name="sepaCity"
                type="text"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="bank">Kreditinstitut</Form.Label>
              <Form.Control
                id="bank"
                name="bank"
                type="text"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="iban">IBAN</Form.Label>
              <Form.Control
                id="iban"
                name="iban"
                type="text"
                pattern="[A-Z]{2}[0-9A-Z ]{3,}"
              />
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group>
              <Form.Label htmlFor="bic">BIC</Form.Label>
              <Form.Control
                id="bic"
                name="bic"
                type="text"
                autoComplete
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <small>
                Durch Erteilung des SEPA-Lastschriftmandats habe ich zuvor die Zusatzvereinbarung bzw. den Mitgliedsantrag von Students‘ Life e. V. akzeptiert. Somit bin ich damit einverstanden, dass Students‘ Life e. V. einen Mitgliedsbeitrag in Höhe von 15€ pro Semester erhebt, welcher durch dieses SEPA-Lastschriftmandat am Ende jeden Semesters eingezogen wird. Sollte ich damit nicht einverstanden sein oder innerhalb von 8 Wochen nach Belastungsdatum Erstattung des belasteten Betrages verlangen, ist es Students‘ Life e. V. vorbehalten meine Mitgliedschaft gemäß der aktuellen Vereinssatzung zu kündigen.
              </small>
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h4>Präambel</h4>
            <p>
              Diese Zusatzvereinbarung regelt den Mitgliederbeitrag und wurde vom Vorstand am 11. September 2017 einstimmig beschlossen. Sie wird jedem Mitglied ausgehändigt. Die Höhe des Mitgliederbeitrages wurde in der Mitgliederversammlung vom 20.07.2017 einstimmig beschlossen und ist daher laut Paragraf 7 Absatz 9 d der aktuellen Satzung von Students‘ Life e. V. gültig.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Vereinbarung</h4>
            <p>
              Hiermit erkläre ich mich damit einverstanden an Students‘ Life e. V. einen Mitgliederbeitrag von 15 Euro pro Semester zu entrichten. 
            </p>
            <p>
              Dieser Beitrag wird per SEPA-Lastschriftmandat am Ende des jeweiligen Semesters eingezogen (Stichtag: ordentliche Mitgliederversammlung am Ende jeden Semesters).
            </p>
            <p>
              Zusätzlich habe ich die Möglichkeit, einen Antrag auf Mitgliedsausweis zu stellen. Dieser kann ab sofort von jedem Mitglied, welches die Zusatzvereinbarung akzeptiert, beantragt werden. 
            </p>
            <p>
              Das Ausfüllen des Antrags berechtigt das Mitglied zum Besitz des Mitgliedsausweises und setzt voraus, dass bei dreimaliger Mithilfe an festgelegten Veranstaltungen von Students‘ Life der Mitgliederbeitrag verringert werden oder komplett entfallen kann. 
            </p>
            <p>
              Sollte ich mich nicht bereit erklären, den Mitgliederbeitrag zu entrichten, werde ich als Mitglied laut Paragraf 5 Absatz 6 der aktuellen Satzung aus dem Verein ausgeschlossen.
            </p>
          </Col>
        </Row>
        <button className="btn btn-primary">Abschicken</button>
      </Form>
    </Container>
  )
}
