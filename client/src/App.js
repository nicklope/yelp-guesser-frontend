import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SelectGame from './pages/SelectGame'
import QuickPlay from './pages/QuickPlay'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectgame" element={<SelectGame />} />
        <Route path="/quickplay" element={<QuickPlay />} />
      </Routes>
    </div>
  )
}

export default App
