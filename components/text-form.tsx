import { useAtom } from 'jotai'
import React from 'react'
import { useForm } from 'react-hook-form'
import { getQrCode } from '../service/get-qr-code'
import { qrcode } from '../store'
import Button from './UI/button'
import Input from './UI/input'

interface Props {
  type: string
}

const TextForm: React.FC<Props> = ({ type }) => {
  const [result, setResult] = useAtom(qrcode)
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: any) => {
    const { text } = data
    let payload = ''
    switch (type) {
      case 'text':
        payload = text
        break
      case 'url':
        payload = text
        break
      case 'email':
        payload = `mailto:${text}`
        break
      case 'phone':
        payload = `tel:${text}`
        break
      case 'sms':
        payload = `sms:${text}`
        break
      case 'geo':
        payload = `geo:${text}`
        break
      case 'wifi':
        payload = `WIFI:S:${text};T:WPA;P:;H:false;;`
        break
      default:
        payload = text
    }

    const res = await getQrCode({ text: payload })
    setResult(res)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col pb-4">
        <label className="text-gray-500 text-sm mb-1">{type}</label>
        <Input label={type} {...register('text')} />
      </div>
      <Button type="submit">Generate</Button>
    </form>
  )
}

export default TextForm
