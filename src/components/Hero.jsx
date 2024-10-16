import gearwheel from '../assets/gearwheel.svg'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas/'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  const handleIconClick = () => {
    navigate('/login')
  }

  return (
    <section className="relative w-full h-screen mx-auto overflow-x-hidden">
      <div
        className={`${styles.paddingX} absolute top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <img
          src={gearwheel}
          alt="gearwheel"
          className="absolute top-4 right-4 sm:w-7 w-5 sm:h-7 h-5 cursor-pointer"
          onClick={handleIconClick}
        />
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#1E90FF]" />
          <div className="w-1 sm:h-80 h-40 dodgerblue-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadTitle}`}>
            Hi, I'm <span className="text-[#1E90FF]">Vladimir</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            I'm junior web developer with a fervent passion for crafting web
            applications. <br className="sm:block hidden" /> Concurrently, I'm
            engaged in studies to attain a degree in computer engineering.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  )
}

export default Hero
