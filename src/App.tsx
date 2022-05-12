import { Home } from './pages/Home'
import { Destination } from './pages/Destination'
import { 
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// import { Navbar } from './pages/Navbar'

import './styles/main.scss'

export default function App() {
  return (
    <Router> 
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />

      </Routes>
    </Router>
    
  )
}