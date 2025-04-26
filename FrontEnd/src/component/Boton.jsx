import './boton.css';
export default function Boton (){
  return (
    <div class="container">   
<button class="cta">
  <span>Generador  de ordenes de corte</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
</div>
)
}