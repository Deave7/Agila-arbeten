
import './App.css'
import calculate from './utils/calculate'


function App() {
 
  const result = calculate(1,2,'+')

  return (
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
        <p>{result}</p>
        <input type="text" readOnly />
        
        </div>
      </div>
  )
}

export default App
