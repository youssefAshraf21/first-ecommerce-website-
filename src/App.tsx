import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
