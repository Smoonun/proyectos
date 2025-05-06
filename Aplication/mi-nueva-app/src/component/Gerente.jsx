import React from 'react'
import { useNavigate } from 'react-router-dom'
import './gerente.css'
import ingrid from "../imagenes/Ingridromero.jpg"
import Pie from './Pie'
import Gafete from './Gafete'
import SenialAndon from './SenialAndon'
export default function Gerente() {
  const navigate = useNavigate();
  return (
    <> 
      <div className="parentg">
        <div className="div1g">
          <span className="spangafete">
          <Gafete name="Ingrid C. Romero Hernandez" position="Gerente general" employeeId="211005" photo={ingrid}/>
          <button onClick= {()=>{navigate('/')}}>Login </button>
          </span>
        </div>
        <div class="div2g">
          <span className="gerenteNav">
            <button className="btngerente">Jefe</button>
            <button className="btngerente">Inventario</button>
            <button className="btngerente">Almacen</button>
          </span>
        </div>
        <div class="div3g">
          <table>
            <thead>
              <tr>
                <th># Pedido</th>
                <th>Estatus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>En proceso</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="div4g">
          <table>
            <thead>
              Sin existencias
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Madera comprimida</td>
                <td>Color turquesa</td>
              </tr>
              <tr>
                <td>Madera comprimida</td>
                <td>Color caoba</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="div5g">
          <table>
            <thead>
              <tr>
                <th>#Pedido</th>
                <th>Estacion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Corte</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="div6g">
          <table>
            <thead>
              <tr>
                <th># Operador</th>
                <th>Estatus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><SenialAndon/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Pie/>
    </>
  )
}
