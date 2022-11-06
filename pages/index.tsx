import { useState } from 'react'
import Header from '../components/header'
import VCardForm from '../components/v-card-form'
import Select from '../components/UI/select'
import TextForm from '../components/text-form'
import Preview from '../components/preview'

export default function Home() {
  const [type, setType] = useState('text')

  return (
    <>
      <Header />
      <div className="bg-slate-500 p-10 h-screen">
        <div className="w-1/2">
          <Select
            label="Type"
            options={[
              'text',
              'url',
              'email',
              'phone',
              'sms',
              'geo',
              'wifi',
              'vcard'
            ]}
            value={type}
            onChange={function (value: string): void {
              setType(value)
            }}
          />
        </div>
        <main className="pt-10 flex items-center justify-between">
          <div className="">
            {type === 'vcard' && <VCardForm />}
            {type !== 'vcard' && <TextForm type={type} />}
          </div>
          <Preview />
        </main>
      </div>
    </>
  )
}
