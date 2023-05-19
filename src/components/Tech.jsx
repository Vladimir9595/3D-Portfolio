import { motion } from 'framer-motion'
import { styles } from '../styles'
import React, { useEffect, useState } from 'react'

import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { programming, framework, back, devops, softwares } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const Tech = () => {
  const technologies = [
    {
      title: 'Programming Languages',
      items: programming,
    },
    {
      title: 'Framework',
      items: framework,
    },
    {
      title: 'Backend',
      items: back,
    },
    // {
    //   title: 'DevOps',
    //   items: devops,
    // },
    {
      title: 'Softwares',
      items: softwares,
    },
  ]

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)')

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>what i learnt</p>
        <h2 className={styles.sectionHeadText}>Tech</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mb-5 text-[#373737] text-justify sm:text-[18px] text-[13px] leading-[30px]"
      >
        In this section, I will present the technologies that I acquired during
        my BTS training, as well as those that I learned on my own. <br /> To
        make it easier to understand, I have organized these technologies into
        different categories.
      </motion.p>

      {technologies.map((technology) => (
        <div key={technology.title}>
          <motion.p
            className={`${styles.sectionSubText} font-semibold sm:text-[22px] text-[18px] leading-[30px]`}
          >
            {technology.title}
          </motion.p>

          <div className="flex flex-row flex-wrap justify-center gap-10">
            {technology.items.map((item) => (
              <div className="w-28 h-28 my-5" key={item.name}>
                <BallCanvas icon={item.icon} />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="absolute sm:bottom-5 sm:mr-[-120px] sm:right-10 right-5">
        <a href="#">
          <div className="w-[25px] sm:w-[50px] sm:h-[50px] h-[25px] sm:rounded-3xl rounded-full sm:border-4 border-2 border-[#373737] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: isMobile ? [0, 3, 0] : [0, 15, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className="sm:w-3 sm:h-3 w-1 h-1 rounded-full bg-[#373737] mb-1"
            />
          </div>
        </a>
      </div>
    </>
  )
}

export default SectionWrapper(Tech)
