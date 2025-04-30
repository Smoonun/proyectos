import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pie from './Pie';
import Gafete from './Gafete'
export default function Operador ()  {
  const navigate = useNavigate();
  return (
    
    <div>
      <Gafete/>
      <button  className ='Logout'onClick= {()=>{navigate('/')}}>Logout </button>
      <Pie/>
    </div>
  )
}
