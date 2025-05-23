import React from 'react'
import Pie from './Pie';
import {useNavigate} from 'react-router-dom'
import Gafete from './Gafete'
import TableroAndon from './TableroAndon';
import kevin from '../imagenes/Kevinromero.jpg'
import "./operador.css"
export default function Operador ()  {
  const navigate = useNavigate();
  return (
    <>
    <div class="parent">
    <div class="div1">
      <span className="spangafete">
        <Gafete name="Kevin B. Romero Hernandez" position="Operador de corte" employeeId={1} photo={kevin}/>
        <button  className="btnlg" onClick= {()=>{navigate('/')}}>Login </button>
      </span>
  
      </div>
    <div class="div2">
      *nota todas las unidaades son cm
      <table> 
        <thead>
          <tr>
          <th>Cantidad</th>
          <th>Descripcion</th>
          <th>Ancho</th>
          <th>Alto</th>
          <th>color</th>
          <th>notas</th>
          <th>✔️</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>5</td>
          <td>costado</td>
          <td>50</td>
          <td>100</td>
          <td>Nogal terracota</td>
          <td>Chapa 1L largo</td>
          <td><input type="checkbox" />
          </td>
          </tr>
        </tbody>
      </table>
      <button className="btn">
        <span>
        Finalizar Orden de corte
      </span>
      </button>
      </div>
    <div class="div3">
       <TableroAndon/>
      </div>
    <div class="div4">
    <table>
        <thead>
          <tr>
          <th>#orden</th>
          <th>Ver Tabla </th>
          <th>Completa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 1</td>
            <td><button className="btnvm">Ver mas</button></td>
            <td><input type="checkbox" />
          </td>
          </tr>
        </tbody>
      </table>
     
      </div>
    </div>
    <Pie/>
    </>
  )
}
