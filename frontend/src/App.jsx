import './App.css'
import Shop from './Pages/Shop'
import Shopcategory from './Pages/Shopcategory'
import Footer from './components/Footer/Footer'
import Nav from './components/Navbar/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'
import Login from './Pages/Login'
import Product from './Pages/Product'
import Cart from './Pages/Cart'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/men' element={<Shopcategory banner={men_banner} category="men" />}></Route>
          <Route path='/women' element={<Shopcategory banner={women_banner} category="women" />}></Route>
          <Route path='/kids' element={<Shopcategory banner={kid_banner} category="kid" />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}></Route>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
