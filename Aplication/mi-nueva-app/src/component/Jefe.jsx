import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pie from './Pie'
export default function Jefe  ()  {
  const navigate =useNavigate();
  return (
    <div>Jefe
      <button onClick= {()=>{navigate('/')}}>Login </button>
      <Pie/>
    </div>
  )
}
