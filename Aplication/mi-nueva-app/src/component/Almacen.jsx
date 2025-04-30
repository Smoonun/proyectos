import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pie from './Pie'
export default function Almacen ()  {
  const navigate = useNavigate();
  return (
    <div>Almacen
      <button onClick= {()=>{navigate('/')}}>Login </button>
      <Pie/>
    </div>
  )
}
