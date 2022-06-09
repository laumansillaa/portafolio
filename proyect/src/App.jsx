import './App.css'
// import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/home'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Home/>
        {/* <Route path='/' element={<Home/>} /> */}

    </div>
  )
}

export default App
