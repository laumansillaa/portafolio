import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path='/homehome' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
