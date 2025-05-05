import React from 'react'
import { useNavigate } from 'react-router-dom'
import './almacen.css'
import Pie from './Pie'
import Gafete  from './Gafete'
export default function Almacen ()  {
  const navigate = useNavigate();
  return (
    <>
      <div class="parenta">
        <div class="div1a">1
          <span className='spangafete'>
            <Gafete/>
            <button onClick= {()=>{navigate('/')}}>Login </button>
          </span>
        </div>
        <div class="div2a">
          <span>  
            Refecia de la estacion acorde al numero 
            <table>
              <thead>
                <tr>
                  <th>Estacion</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Procesamiento de pago</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Diseño</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Fabricacion</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Embarque</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Entrega</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
            refencia del estatus acorde a la estacion
            <table>
              <thead>
                <tr>
                  <th>Estatus</th>
                  <th>Estacion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Inicio</td>
                  <td>Estacion 1</td>
                </tr>
                <tr>
                  <td>Proceso</td>
                  <td>Estacion 2 a 4</td>
                </tr>
                <tr>
                  <td>Finalizado</td>
                  <td>Estacion 5 </td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
        <div class="div3a">3
          <span>
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
                  <td>Proceso</td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
        <div class="div4a">4
          <span>
            <table>
              <thead>
                <tr>
                  <th># Pedido</th>
                  <th>Estacion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
      </div>
    
      
      <Pie/>
    </>
  )
}
