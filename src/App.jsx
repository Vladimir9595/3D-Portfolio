import { BrowserRouter } from 'react-router-dom'

import {
  About,
  Contact,
  Experience,
  School,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 white-gradient">
        <div style={{ paddingBottom: 100 }}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <School />
        <Experience />
        <Tech />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
