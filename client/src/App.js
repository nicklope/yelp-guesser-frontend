import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SelectGame from './pages/SelectGame'
import QuickPlay from './pages/QuickPlay'
import Login from './pages/Login'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectgame" element={<SelectGame />} />
        <Route path="/quickplay" element={<QuickPlay />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
