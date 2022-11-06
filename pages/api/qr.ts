import QRCode from 'qrcode'
import { NextApiRequest, NextApiResponse } from 'next'

// demo vcard data
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Gump;Forrest
FN:Forrest Gump
ORG:Bubba Gump Shrimp Co.
TITLE:Shrimp
TEL;TYPE=WORK,VOICE:(111) 555-1212
TEL;TYPE=HOME,VOICE:(404) 555-1212
ADR;TYPE=WORK:;;100 Waters Edge;Baytown;LA;30314;United States of America
ADR;TYPE=HOME:;;42 Plantation St.;Baytown;LA;30314;United States of America
EMAIL;TYPE=PREF,INTERNET:
LABEL;TYPE=WORK:100 Waters Edge
Baytown, LA 30314
United States of America
LABEL;TYPE=HOME:42 Plantation St.
Baytown, LA 30314
United States of America
END:VCARD`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { text, size } = req.body
  const qr = await QRCode.toDataURL(text || vcard, { width: size || 300 })
  res.status(200).json({ qr })
}
