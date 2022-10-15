import './App.css'
// import {Route, Routes} from "react-router-dom"
import About from './components/About/About'
import Home from './components/Home/home'
import Nav from './components/Nav/Nav'
import Project from './components/Project/Project'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Project/>
    </div>
  )
}

export default App
