import { Navbar, Projects, StarsCanvas, Footer } from './components'

const Projs = () => {
  return (
    <div className="relative z-0 white-gradient">
      <div className="my-20">
        <Navbar />
      </div>
      <div className="relative z-0">
        <Projects />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default Projs
