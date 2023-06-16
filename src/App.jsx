import './Styles/App.css'
import Hero from './Components/Home/Hero/Hero'
import About from './Components/Home/About/About'
import MyProjects from './Components/Home/MyProjects/MyProjects'
import Contact from './Components/Home/Contact/Contact'
import Footer from './Components/Layout/Footer'

function App() {
  return (
    <>
      <Hero/>
      <About/>
      <MyProjects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
