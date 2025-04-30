import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pie from './Pie'
export default function Gerente() {
  const navigate = useNavigate();
  return (
    <div>Gerente
      <button onClick= {()=>{navigate('/')}}>Login </button>
      <Pie/>
    </div>
  )
}
