import { styles } from '../styles'
import { EarthCanvas } from './canvas/'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-x-hidden">
      <div
        className={`${styles.paddingX} absolute top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#1E90FF]" />
          <div className="w-1 sm:h-80 h-40 dodgerblue-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadTitle}`}>
            Hi, I'm <span className="text-[#1E90FF]">Vladimir</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            I am a junior web developer. My passion is to develop web
            applications. <br className="sm:block hidden" /> Actually I'm
            studying to become a computer engineer
          </p>
        </div>
      </div>

      <EarthCanvas />
    </section>
  )
}

export default Hero
