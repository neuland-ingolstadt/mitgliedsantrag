import nodemailer from 'nodemailer'
import sanitize from 'sanitize-filename'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT),
  secure: process.env.MAIL_TLS !== undefined,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
})

function getSubject (form) {
  return `Mitgliedsantrag von ${form.firstName} ${form.lastName}`
}

function getBody (form) {
  return `Es ist ein neuer Mitgliedsantrag eingangen.

== Persönliche Daten ==

Vorname:
${form.firstName}

Nachname:
${form.lastName}

Telefonnummer:
${form.phone}

Geburtsdatum:
${form.birthDate}

Private E-Mail-Adresse:
${form.privateEmail}

Hochschul-E-Mail-Adresse:
${form.uniEmail}

Straße (Semesteranschrift):
${form.uniStreet}

PLZ, Ort (Semesteranschrift):
${form.uniCity}

Straße (Wohnsitz):
${form.homeStreet}

PLZ, Ort (Wohnsitz):
${form.homeCity}

Fakultät:
${form.faculty}

Studienbeginn:
${form.uniStart}

== Lastschriftmandat ==

Vorname:
${form.sepaFirstName}

Nachname:
${form.sepaLastName}

Straße:
${form.sepaStreet}

PLZ, Ort:
${form.sepaCity}

Kreditinstitut:
${form.bank}

IBAN:
${form.iban}

BIC:
${form.bic}

== Metadaten ==

Zeitstempel:
${new Date().toLocaleString('de-DE')}
`
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb'
    }
  }
}

export default async (req, res) => {
  try {
    const form = req.body
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: form.email,
      subject: getSubject(form),
      text: getBody(form),
      attachments: [
        {
          filename: sanitize(`${form.firstName.toLowerCase()}-${form.lastName.toLowerCase()}.json`),
          content: JSON.stringify(form, null, 2)
        }
      ]
    })
    res.redirect(303, '/done')
  } catch (e) {
    console.error(e)
    res.redirect(303, '/error?message=' + encodeURIComponent(e.message))
  }
}
