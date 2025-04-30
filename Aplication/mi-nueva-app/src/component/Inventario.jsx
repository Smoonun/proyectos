import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pie from './Pie'
export default function Inventario ()  {
  const navigate = useNavigate();
  return (
    <div>Inventario
      <button onClick= {()=>{navigate('/')}}>Login </button>
      <Pie/>
    </div>
    
  )
}
