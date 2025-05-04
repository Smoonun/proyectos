import React from 'react'
import './header.css'
export default function Header() {
  return (
    <div>
    <span>
    <img src="https://bodywrapmx.com/gallery_gen/345a51e82bd0c5969bf9ea220593e381_360x360.png" alt="Body Wrap"/>
    </span>
    <span>
    <h1>BODY WRAP</h1>
    <h2>Multiplaza Arboledas</h2>
    </span>
    <span className="nav">
        <a href="/">
        Inicio
        </a>
        <a href="/Contacto">
        Contacto
        </a>
        <a href="/Tienda">
        Tienda
        </a>
        </span>
    </div>
  )
}
