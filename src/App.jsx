
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './componet/Home'
import Menu from './componet/Menu'
import Blog from './componet/Blog'
import Aboutus from './componet/About-us'
import Contactus from './componet/Contact-us'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './componet/Navbar'


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<Aboutus/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/contact-us' element={<Contactus/>}/>
      <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
