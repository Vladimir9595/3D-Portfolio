import { Navbar, NewsHandler, ProjectsHandler, Footer } from '../components'

const Handler = () => {
  return (
    <div className="relative z-0 white-gradient">
      <div className="my-20">
        <Navbar />
      </div>
      <NewsHandler />
      <ProjectsHandler />
      <Footer />
    </div>
  )
}

export default Handler
