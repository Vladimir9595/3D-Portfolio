import { Navbar, Mention, Footer } from './components'

const Mentions = () => {
  return (
    <div className="relative z-0 white-gradient">
      <div style={{ paddingBottom: 100 }}>
        <Navbar />
      </div>
      <Mention />
      <Footer />
    </div>
  )
}

export default Mentions
