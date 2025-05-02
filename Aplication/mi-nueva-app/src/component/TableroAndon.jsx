import React from 'react'
import './tableroandon.css'
export default function TableroAndon() {
  return (
    <div class="container">
    <div class="pane">
        <label class="label">
            <span>Yes</span>
            <input
             id="left"
              class="input" 
              name="radio" 
              type="radio"/>
        </label>
        <label class="label">
            <span>No</span>
            <input 
            id="middle"
             class="input"
              checked="checked"
               name="radio" 
               type="radio"/>
        </label>
        <label class="label">
            <span>Idk</span>
            <input id="right"
             class="input" 
             name="radio" 
             type="radio"/>
        </label>
        <span class="selection"></span>
    </div>
</div>
    
  )
}
