import { Navbar, Tech, StarsCanvas, Footer } from './components'

const Technologies = () => {
  return (
    <div className="relative z-0 white-gradient">
      <div className="my-20">
        <Navbar />
      </div>
      <div className="relative z-0">
        <Tech />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default Technologies
