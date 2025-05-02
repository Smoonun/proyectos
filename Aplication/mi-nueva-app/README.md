# Login con verificacion
<p>Este proyecto es creado con la finalidad de competir en el concurso de inovacion que tiene el <a href="https://www.tecnm.mx/">Tecnologico Nacional de Mexico</a> en su etapa local la cual sera realizada en el <a href="https://www.tlalnepantla.tecnm.mx/"> Ittla </a>campus centro</p>
<p>Esta aplicacion realiza la verificacion del correo y la contraseña ingresada, estos datos los coteja con una base de datos, el archivo del servidor esta en la carpeta <a href="https://github.com/Smoonun/proyectos/tree/master/BackEnd">BackEnd </a> para con base en la jerarquia que tiene dentro de la base de datos te redirige a la interfaz  correspondiente</p>
## 🛠️ Tecnologías Utilizadas
- [React](https://reactjs.org/) – Biblioteca para construir interfaces de usuario.
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) – Lenguaje de programación principal.
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS) – Estilización de la aplicación.

---
<h2>Estructura del proyecto</h2>
<p>
Aplication/<br>
  ├── public/<br>
  │   └── index.html<br>
  ├── src/<br>
  │   ├── App.css<br>
  │   ├── App.jsx<br>
  │   └── index.js<br>
  ├── package.json<br>
  └── README.md<br>
</p>

---

## ⚙️ Instalación y Ejecución

1. **Clonar el repositorio:**<br>
   git clone https://github.com/Smoonun/proyectos.git
   cd proyectos/Aplication<br>
2. **Instalar dependecias:**<br>
   npm install<br>
3.**Descargar y configuracion la carpeta de BackEnd<br>
*Asegúrate de tener la carpeta BackEnd dentro del mismo proyecto (en el nivel raíz).<br>
*Abre una nueva terminal y navega a la carpeta BackEnd:<br>
cd ../BackEnd<br>
*Luego inicia el servidor del backend con;<br>
npm install<br>
npm start -y<br>
*Esto levantará el acceso a la base de datos o la API local.<br>
4. **Volver al frontend y ejecutar la app React:**<br>
cd ../Aplication<br>
npm start<br>
*La aplicación se abrirá automáticamente en tu navegador en http://localhost:3000.
**nota**
Para la base de datos se uso la herramienta de XAMPP
donde se activo la base de datos en sql y apache para poder hacer las consultas
## 🖼️ Capturas de Pantalla

![image](https://github.com/user-attachments/assets/da0c0fd3-fd45-4c62-8b7d-0a37eea84cae)
<h3>Asi luce el login</h3>

![image](https://github.com/user-attachments/assets/13a95314-6364-40bc-bcbd-dd1fe5945cba)
<h3>Asi luce cuando no se introduce nada en los campos</h3>

![image](https://github.com/user-attachments/assets/62bd719c-90e1-4961-a540-f44ece9ebdde)
<h3>Se observa de esta manera cuando el correo y la contraseña son incorrectas </h3>

![image](https://github.com/user-attachments/assets/dded97a6-4336-44ea-8f50-f43dc7706a3d)
<h3>Asi se observa cuando los datos colocado son correctos y estan en la base de datos</h3>

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si deseas mejorar la aplicación o agregar nuevas funcionalidades, por favor sigue estos pasos:

Haz un fork del repositorio.

Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y haz commits descriptivos.

Envía un pull request detallando los cambios realizados.
