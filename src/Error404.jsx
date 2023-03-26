import { Navbar, NotFound, StarsCanvas, Footer } from './components'

const Error404 = () => {
  return (
    <div className="relative overflow-y-auto white-gradient">
      <div className="my-20">
        <Navbar />
      </div>
      <div className="relative overflow-y-auto ">
        <NotFound />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default Error404
