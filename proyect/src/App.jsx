import './App.css'
// import {Route, Routes} from "react-router-dom"
import About from './components/About/About'
import Home from './components/Home/home'
import Nav from './components/Nav/Nav'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      {/* <Project/>
      <Contact/>
      <Footer/> */}
    </div>
  )
}

export default App
