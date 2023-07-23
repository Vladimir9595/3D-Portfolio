import { Navbar, NotFound, StarsCanvas, Footer } from '/src/components'

const Error404 = () => {
  return (
    <div className="relative overflow-y-auto white-gradient">
      <div className="my-20">
        <Navbar />
      </div>
      <div className="relative overflow-y-auto sm:h-full h-[688px]">
        <NotFound />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default Error404
