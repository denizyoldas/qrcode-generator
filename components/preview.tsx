import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { qrcode } from '../store'
import Button from './UI/button'

const Preview = () => {
  const [result, setResult] = useAtom(qrcode)

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    canvas.width = 300
    canvas.height = 300
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = result
    img.onload = () => {
      ctx?.drawImage(img, 0, 0)
    }

    // qr code center logo
    // const logo = new Image()
    // logo.src = 'https://avatars.githubusercontent.com/u/1178825?v=4'
    // logo.onload = () => {
    //   ctx?.drawImage(logo, 100, 100, 50, 50)
    // }

    return () => {
      ctx?.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [result])

  // download for result image
  const downloadHandler = () => {
    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = result
    link.click()
  }

  return (
    <div>
      {/* <img src={result} alt="" /> */}
      <canvas id="canvas"></canvas>
      {/* download png or jpeg or svg */}
      <div className="pt-4">
        <Button type="button" onClick={downloadHandler}>
          Indir
        </Button>
      </div>
    </div>
  )
}

export default Preview
