import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Operador ()  {
  const navigate = useNavigate();
  return (
    
    <div>Operador
      <button onClick= {()=>{navigate('/')}}>Login </button>
    </div>
  )
}
