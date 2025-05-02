import React from 'react'
import './tableroandon.css'
export default function TableroAndon() {
  return (
    <div className="cards">
    <button className="btnta" id="green">
    Sin Fallas
    </button><br></br>
    <button className="btnta" id="yellow">
      Fallo no Critico 
    </button><br></br>
    <button className="btnta" id="red">
      Fallo critico
    </button>
</div>
  )
}
