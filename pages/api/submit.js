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

Straße und Hausnummer:
${form.street}

PLZ:
${form.zipCode}

Stadt:
${form.city}

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

Akzeptieren:
https://membership.informatik.sexy/create-member?firstName=${encodeURIComponent(form.firstName)}&lastName=${encodeURIComponent(form.lastName)}&email=${encodeURIComponent(form.email)}
`
}

function getCsv (form) {
  const headers = [
    'firstName',
    'lastName',
    'birthDate',
    'street',
    'zipCode',
    'city',
    'phoneNumber',
    'email',
    'status',
    'course',
    'degree',
    'university',
    'graduation',
    'acceptStatute',
    'acceptPrivacy',
    'acceptSignal',
    'joinDate'
  ]
  const data = [
    form.firstName,
    form.lastName,
    form.birthDate,
    form.street,
    form.zipCode,
    form.city,
    form.email,
    form.phoneNumber,
    form.status === 'student' ? 'Student' : 'Nicht Student',
    form.course,
    form.degree,
    form.university,
    form.graduation,
    form.acceptStatute ? '1' : '0',
    form.acceptPrivacy ? '1' : '0',
    form.acceptSignal ? '1' : '0',
    new Date().toISOString().substring(0, 10)
  ]
  return headers.join(';') + '\n' + data.join(';')
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
    for (const key in form) {
      form[key] = form[key].trim()
    }

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
        },
        {
          filename: sanitize(`${form.firstName.toLowerCase()}-${form.lastName.toLowerCase()}.csv`),
          content: getCsv(form)
        }
      ]
    })
    res.redirect(303, '/done')
  } catch (e) {
    console.error(e)
    res.redirect(303, '/error?message=' + encodeURIComponent(e.message))
  }
}
