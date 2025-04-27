import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Almacen ()  {
  const navigate = useNavigate();
  return (
    <div>Almacen
      <button onClick= {()=>{navigate('/')}}>Login </button>
    </div>
  )
}
