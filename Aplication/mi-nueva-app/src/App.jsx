import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Form from './component/Login'
import Gerente from './component/Gerente'
import Almacen from './component/Almacen';
import  Inventario  from './component/Inventario';
import  Jefe from './component/Jefe';
import  Operador  from './component/Operador';
import Card from './component/Card'
export default function App() {
  return (
    <>
<BrowserRouter>
     <Routes>
      <Route path= '/' element={<Form/>}/>
      <Route path= 'Gerente-General' element={<Gerente/>}/>
      <Route path= 'Almacen' element={<Almacen/>}/>
      <Route path= 'Inventario' element={<Inventario/>}/>
      <Route path= 'Jefe-Produccion' element={<Jefe/>}/>
      <Route path= 'Operador' element={<Operador/>}/>
      <Route path= 'Card' element={<Card/>}/>
    </Routes> 
      
     
      </BrowserRouter>
    </>
   
  );
}