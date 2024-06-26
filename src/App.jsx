import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/home'
import ProductPage from './pages/product'
import Cart from './pages/Cart'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes 
          path="/*">
            <Route path="/*" element={<>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/*" element={<ProductPage />} />
              <Route path="/cart" element={<Cart/>} />
            </Routes>            
          </>} />
          
        </Routes>    
      </BrowserRouter>
    </>
  )
}

export default App
