import {BrowserRouter, Route, Routes} from 'react-router-dom'
import  Form from '../../Aplication/mi-nueva-app/src/component/Login';
import Gerente from '../../Aplication/mi-nueva-app/src/component/Gerente'
import Almacen from '../../Aplication/mi-nueva-app/src/component/Almacen';
import  Inventario  from '../../Aplication/mi-nueva-app/src/component/Inventario';
import  Jefe from '../../Aplication/mi-nueva-app/src/component/Jefe';
import  Operador  from '../../Aplication/mi-nueva-app/src/component/Operador';
export default function App() {
  return (
    <>
    <Routes>
      <Route path= '/' element={<Form/>}/>
      <Route path= 'Gerente-General' element={<Gerente/>}/>
      <Route path= 'Almacen' element={<Almacen/>}/>
      <Route path= 'Inventario' element={<Inventario/>}/>
      <Route path= 'Jefe-Produccion' element={<Jefe/>}/>
      <Route path= 'Operador' element={<Operador/>}/>
    </Routes>
      <BrowserRouter>
      <Form/>
      <Gerente/>
      <Almacen/>
      <Inventario/>
      <Jefe/>
      <Operador/>
      </BrowserRouter>
    </>
   
  );
}