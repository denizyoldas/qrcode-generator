import React from 'react'
import { useForm } from 'react-hook-form'
import { getQrCode } from '../service/get-qr-code'
import Button from './UI/button'
import Input from './UI/input'
import { useAtom } from 'jotai'
import { qrcode } from '../store'

type VCardValue = {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  address: string
}

const VCardForm = () => {
  const [result, setResult] = useAtom(qrcode)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data: any) => {
    const { firstName, lastName, email, phone, address } = data
    const vCard = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${firstName} ${lastName}
EMAIL;TYPE=INTERNET;TYPE=WORK;TYPE=pref:${email}
TEL;TYPE=CELL;TYPE=VOICE;TYPE=pref:${phone}
ADR;TYPE=WORK;TYPE=pref:;;${address};;;;
END:VCARD`

    console.log(vCard)

    const result = await getQrCode({ text: vCard })
    setResult(result)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
      <Input {...register('firstName')} label="First Name" />
      {errors.firstName && <span>This field is required</span>}

      <Input {...register('lastName')} label="Last Name" />
      {errors.lastName && <span>This field is required</span>}

      <Input {...register('email')} label="Email" />
      {errors.lastName && <span>This field is required</span>}

      <Input {...register('phone')} label="Phone" />
      {errors.lastName && <span>This field is required</span>}

      <Input {...register('address')} label="Address" />
      {errors.lastName && <span>This field is required</span>}

      <Button type="submit">Submit</Button>
    </form>
  )
}

export default VCardForm
