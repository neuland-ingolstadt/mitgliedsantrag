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

Vorname:
${form.firstName}

Nachname:
${form.lastName}

Geburtsdatum:
${form.birthDate}

Straße, Hausnummer:
${form.addressLine1}

PLZ, Stadt:
${form.addressLine2}

E-Mail:
${form.email}

Mobilfunknummer:
${form.phoneNumber}

Status:
${form.status}

Studiengang:
${form.course}

Angestrebter Abschluss:
${form.degree}

Hochschule:
${form.university}

Voraussichtliches Studienende:
${form.graduation}

Satzung akzeptiert:
${form.acceptStatute ? 'Ja' : 'Nein'}

Datenschutz akzeptiert:
${form.acceptPrivacy ? 'Ja' : 'Nein'}

Signal akzeptiert:
${form.acceptSignal ? 'Ja' : 'Nein'}

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
    res.redirect('/done')
  } catch (e) {
    console.error(e)
    res.redirect('/error?message=' + encodeURIComponent(e.message))
  }
}
