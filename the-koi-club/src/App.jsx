import { Routes, Route, Link } from 'react-router-dom'
import Home from './routes/Home.jsx'
import WaterOverview from './routes/WaterOverview.jsx'
import ParasiteGuide from './routes/ParasiteGuide.jsx'
import Cart from './routes/Cart.jsx'
import Login from './routes/Login.jsx'

export default function App() {
  return (
    <div className="max-w-md mx-auto p-4 space-y-3">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-bold">The Koi Club</h1>
        <nav className="text-sm space-x-3">
          <Link to="/">Home</Link>
          <Link to="/water">Water</Link>
          <Link to="/parasites">Parasites</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/water" element={<WaterOverview />} />
        <Route path="/parasites" element={<ParasiteGuide />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}
