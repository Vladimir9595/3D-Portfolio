import { Navbar, SignupCard, StarsCanvas, Footer } from '/src/components'

const Signup = () => {
  return (
    <div className="relative overflow-y-auto white-gradient">
      <div className="my-20">
        <Navbar />
      </div>
      <div className="relative overflow-y-auto sm:h-full h-[688px]">
        <SignupCard />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default Signup
