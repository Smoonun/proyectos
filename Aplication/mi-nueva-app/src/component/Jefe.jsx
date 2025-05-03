import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pie from './Pie'
import Gafete from "./Gafete"
import './jefe.css'
import SenialAndon from "./SenialAndon"
import alda from '../imagenes/Aldahirhernandez.jpg'
export default function Jefe  ()  {
  const navigate =useNavigate();
  return (
      <> 
        <div class="parent_jefe">
          <div class="div1_jefe"><Gafete name="Erick A. Hernandez Aguirre" positon="Jefe de Produccion" employeeId="Bob Elegante" photo={alda}/> </div>
          <div class="div2_jefe">
            <table>
              <thead>
                <tr>
                  <th>
                    # Empleado
                  </th>
                  <th>
                    Estatus
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 1</td>
                  <td><SenialAndon/></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="div3_jefe">
          <table>
              <thead>
                <tr>
                  <th>
                    Actividad a realizar
                  </th>
                  <th>
                    Estatus
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> Recorrido general por el area</td>
                  <td><input type="checkbox"></input></td>
                </tr>
              </tbody>
            </table>
          <button onClick= {()=>{navigate('/')}}>Login </button>
          </div>
</div>
      <Pie/>
    </>
  )
}
