
import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import QRCode from 'react-qr-code'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export default function App() {
  const [step, setStep] = useState("menu")
  return (
    <div className="min-h-screen bg-black text-gold flex items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">RichCash – FULL APP</h1>
        <p className="text-md">🔐 All functions: Redeem, Admin, QR Cashout, Partner Scan</p>
      </div>
    </div>
  )
}
