import About from './About.jsx'
import Home from './Home.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (<>
    <h1>Hello App</h1>
    <Router>
      <Link to='/home'>Home</Link> |
      <Link to='/about'>About</Link> |
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  </>)
}
export default App