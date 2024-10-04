import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
    <body>
      <div className="calc-container">
      <div className="buttons">
      <button>C</button>
        <button >/</button>
        <button >*</button>
        <button >-</button>
        <button >7</button>
        <button >8</button>
        <button >9</button>
        <button >+</button>
        <button >4</button>
        <button >5</button>
        <button >6</button>
        <button >=</button>
        <button >1</button>
        <button >2</button>
        <button >3</button>
        <button >0</button>
      </div>
      <div className="display">
        <input type="text" readOnly />
        
        </div>
      </div>
      </body>
    </>
  )
}

export default App
