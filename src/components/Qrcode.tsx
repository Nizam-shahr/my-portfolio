import QRCode from 'qrcode.react';
import React, { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';

function Qrcode() {
    const [inputValue, setInputValue] = useState<any>('');
  const [qrValue, setQrValue] = useState('');
  const qrRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleGenerateQR = () => {
    setQrValue(inputValue);
  };

  const handlePrint = useReactToPrint({
    content: () => qrRef.current,
  });
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>QR Code Generator</h1>
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="https://schools.distinction.app/quizathon"
      style={{ padding: '10px', width: '300px' }}
    />
    <button onClick={handleGenerateQR} style={{ padding: '10px', marginLeft: '10px' }}>
      Generate QR Code
    </button>
    <div className='bg-white flex items-center justify-center' style={{ marginTop: '20px' }} ref={qrRef}>
      {qrValue && (
        <div className='flex flex-col items-center gap-4'>
        <h1 className='font-bold'>Please kindly scan the Qr code to sign in or use the link to register for the FLEXISAF quizathon</h1>
<QRCode value={qrValue} size={256} />
<h2>For further information, contact : </h2>
<div>
<h3>+2349066777502</h3>
<h2>Shahruddeen <br /> Nizamuddeen  <br /> Vice President NACOSS </h2>
</div>

        </div>
        
      )}
    </div>
    <button onClick={handlePrint} style={{ padding: '10px', marginTop: '20px' }}>
      Print as PDF
    </button>
  </div>
  )
}

export default Qrcode
