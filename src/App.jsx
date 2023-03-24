import {
  About,
  Contact,
  Experience,
  School,
  Hero,
  Navbar,
  Projects,
  News,
  StarsCanvas,
  Footer,
} from './components'

const App = () => {
  return (
    <div className="relative z-0 white-gradient">
      <div style={{ paddingBottom: 100 }}>
        <Navbar />
        <Hero />
      </div>
      <About />
      <School />
      <Experience />
      <Projects />
      <News />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default App