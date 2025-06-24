import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import QRCode from 'react-qr-code'

const supabase = createClient(
  'https://jkchphrbvjqcheufeiti.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
)

export default function App() {
  return <div className="text-white p-4">RichCash App Live</div>
}
