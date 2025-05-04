import React, { useState } from 'react';
import './App.css';

function App() {
  const [tarea, setTarea] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');


  function handleInputChange(event) {
    setNuevaTarea(event.target.value);
  }


  const nuevaActividad = (event) => {
    event.preventDefault(); 

    if (nuevaTarea.trim() === '') return;

    const tareaNueva = {
      text: nuevaTarea.trim(), 
      id: crypto.randomUUID()
    };

    setTarea([...tarea, tareaNueva]);
    setNuevaTarea('');
  };


  function BorrarTarea(id) {
    const nuevasTareas = tarea.filter(t => t.id !== id);
    setTarea(nuevasTareas);
  }

  
  return (
    <div className="container">
      <header className="header">
        <h1 className="h1">To do List</h1>
        <h2 className="h2">By: Kevin Romero</h2>
      </header>

      <main className="main">
        <aside>
          <form onSubmit={nuevaActividad}> 
            <label>
              <p className="des">Tareas pendientes:</p>
              <input
                className="entrada"
                required
                type="text"
                placeholder="Tarea"
                value={nuevaTarea}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit" className="aniadir">
              Agregar a la lista
            </button>
          </form>
        </aside>

        <section>
          <h3 className="h3">Lista de tareas</h3>
          <ul className="des">
            {tarea.map(item => (
              <li key={item.id}>
                {item.text}
                <button onClick={() => BorrarTarea(item.id)} className="btn">
                  ¿Finalizada?
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
