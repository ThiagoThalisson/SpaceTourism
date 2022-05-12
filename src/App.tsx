import { Home } from './pages/Home'
import { Destination } from './pages/Destination'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// import { Navbar } from './pages/Navbar'

import './styles/main.scss'

export default function App() {
  return (
    <Router> 
      <Routes>

      <Route path="/space-tourism" element={<Home />} />
      <Route path="/space-tourism/destination" element={<Destination />} />

      </Routes>
    </Router>
    
  )
}