import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pie from './Pie'
import april from "../imagenes/Aprilgonzales.jpg"
import './inventario.css'
import Gafete from './Gafete'
export default function Inventario ()  {
  const navigate = useNavigate();
  return (<> 
    <div class="parenti">
        <div class="div1i">
          <span className="spangafete">
            <Gafete name="April Y. Gonzalez" position="jefa de inventario" employeeId="280902" photo={april}/>
            <button className='btnlg' onClick= {()=>{navigate('/')}}>Login </button>
          </span>
        </div>

        <div class="div2i"><span className="nueva-orden">
          <input type="number" placeholder="Nombre" className="nptorden"/>
          <button className="btninventario">Mandar orden de corte</button>
          </span>
          <span className="buscar-orden">
          <input type="number" placeholder="Buscar" className="nptorden"/>
          <button className="btninventario">Buscar</button>
          </span>
          <span>
            <h3>Editar
            <input type="checkbox"/></h3>
          </span>
        </div>
        <div class="div3i">
        <table className="tablecorte"> 
        <thead>
          <tr>
          <th>Cantidad</th>
          <th>Descripcion</th>
          <th>Ancho</th>
          <th>Alto</th>
          <th>color</th>
          <th>notas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td><input type="number" placeholder="cantidad" className='nptcorte' /></td>
          <td><input type="text" placeholder="Descripcion" className='nptcorte'/></td>
          <td><input type="number" placeholder="Ancho"className='nptcorte' /></td>
          <td><input type="number" placeholder="Alto" className='nptcorte'/></td>
          <td><input type="text" placeholder='Color' className='nptcorte'/></td>
          <td><input type="text" placeholder="Notas"className='nptcorte'/></td>
          </tr>
          <tr>
          <td><input type="number" placeholder="cantidad"className='nptcorte' /></td>
          <td><input type="text" placeholder="Descripcion"className='nptcorte' /></td>
          <td><input type="number" placeholder="Ancho" className='nptcorte'/></td>
          <td><input type="number" placeholder="Alto" className='nptcorte'/></td>
          <td><input type="text" placeholder='Color' className='nptcorte'/></td>
          <td><input type="text" placeholder="Notas"className='nptcorte'/></td>
          </tr>
        </tbody>
      </table> 
      <button className='masfila'>+</button>
        </div>
        <div class="div4i">
          <table>
            <thead>
              <tr>

                <th>Cantidad</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Stock</th>
                <th>Entrada</th>
                <th>Salida</th>
                <th>Aceptar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100</td>
                <td>Hojas de comprimido</td>
                <td>Color turquesa</td>
                <td>100</td>
                <td><input type="number" placeholder="Entrada" /></td>
                <td><input type="number" placeholder='Salida' /></td>
                <td><button>Aceptar</button></td>
              </tr>
              <tr>
              <td>100</td>
                <td>Hojas de comprimido</td>
                <td>Color turquesa</td>
                <td>100</td>
                <td><input type="number" placeholder="Entrada" /></td>
                <td><input type="number" placeholder='Salida' /></td>
                <td><button>Aceptar</button></td>
              </tr>
              </tbody>
          </table>
        </div>
    </div>
    <Pie/>
    </>

  )
}
