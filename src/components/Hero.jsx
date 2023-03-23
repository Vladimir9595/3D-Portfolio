import { motion } from 'framer-motion'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[100px] max-w-7xl mx-auto flex flex-row itenms-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#1E90FF]" />
          <div className="w-1 sm:h-80 h-40 dodgerblue-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-blue`}>
            Hi, I'm <span className="text-[#1E90FF]">Vladimir</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-grey-100`}>
            I am a junior web developer. My passion is to develop web
            applications. <br className="sm:block hidden" /> Actually I'm
            studying to become a computer engineer
          </p>
        </div>
      </div>

      <EarthCanvas />

      <div
        className="absolute xs:bottom-10 w-full flex justify-center items-center
      "
        style={{
          marginBottom: '-135px',
        }}
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#373737] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-[#373737] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
