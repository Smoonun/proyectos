import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Gerente() {
  const navigate = useNavigate();
  return (
    <div>Gerente
      <button onClick= {()=>{navigate('/')}}>Login </button>
    </div>
  )
}
