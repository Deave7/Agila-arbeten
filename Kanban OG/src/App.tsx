
import './App.css'
import useMath from './custom hooks/useMath'

function App() {
 
  const result = useMath(1, 5, '-')

  return (
    <>
    <p>{result}</p>
    </>
  )
}

export default App
