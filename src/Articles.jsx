import { Navbar, News, StarsCanvas, Footer } from './components'

const Articles = () => {
  return (
    <div className="relative z-0 white-gradient">
      <div className="my-20">
        <Navbar />
      </div>
      <div className="relative z-0">
        <News />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default Articles
