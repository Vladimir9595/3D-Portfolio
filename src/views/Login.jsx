import { Navbar, LoginCard, StarsCanvas, Footer } from '/src/components'

const Login = () => {
  return (
    <div className="relative overflow-y-auto white-gradient">
      <div className="my-20">
        <Navbar />
      </div>
      <div className="relative overflow-y-auto sm:h-full h-[688px]">
        <LoginCard />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default Login
