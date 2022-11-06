import { useState } from 'react'
import Header from '../components/header'
import VCardForm from '../components/v-card-form'
import TextForm from '../components/text-form'
import Preview from '../components/preview'
import cx from 'classnames'

const TYPES = ['text', 'url', 'email', 'phone', 'sms', 'geo', 'wifi', 'vcard']

export default function Home() {
  const [type, setType] = useState('text')

  return (
    <>
      <Header />
      <div className="p-10 h-screen text-center">
        <div>
          <p className="text-2xl font-bold">
            QR Code oluşturmak için aşağıdaki formu doldurun. ve{' '}
            <code>QR Code Oluştur</code> butonuna tıklayın.
          </p>
        </div>
        <main className="grid grid-cols-2 pt-10">
          <div className="flex flex-col">
            <div className="grid grid-cols-4">
              {TYPES.map((item, index) => (
                <div key={index}>
                  <button
                    className={cx(
                      'w-full h-full p-4',
                      type === item ? 'bg-gray-200' : 'bg-gray-100'
                    )}
                    onClick={() => setType(item)}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
            <div className="">
              {type === 'vcard' && <VCardForm />}
              {type !== 'vcard' && <TextForm type={type} />}
            </div>
          </div>
          <Preview />
        </main>
      </div>
    </>
  )
}
