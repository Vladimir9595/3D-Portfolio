import { Navbar, Tech, Footer } from './components'

const Technologies = () => {
  return (
    <div className="relative z-0 white-gradient">
      <div style={{ paddingBottom: 100 }}>
        <Navbar />
      </div>
      <Tech />
      <Footer />
    </div>
  )
}

export default Technologies
