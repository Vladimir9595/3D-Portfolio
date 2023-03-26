import {
  About,
  Contact,
  Experience,
  School,
  Hero,
  Navbar,
  StarsCanvas,
  Footer,
} from './components'

const App = () => {
  return (
    <div className="relative z-0 white-gradient">
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <School />
      <Experience />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default App
