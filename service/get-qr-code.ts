import axios from 'axios'

interface QrCodeProps {
  text: string
  size?: number
}

export const getQrCode = async (props: QrCodeProps): Promise<string> => {
  const { text, size } = props

  const response = await axios.post('api/qr', {
    text,
    size
  })

  return response.data.qr
}
