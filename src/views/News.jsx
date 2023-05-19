import { Navbar, NewCard, StarsCanvas, Footer } from '../components'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { news } from '../constants/index.js'

const News = () => {
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
    <div className="relative z-0 white-gradient">
      <div className="my-20">
        <Navbar />
      </div>
      <div className="relative z-0">
        <div
          className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-10 flex flex-wrap gap-7`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>what I consulted</p>
            <h2 className={styles.sectionHeadText}>News</h2>
          </motion.div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn('', '', 0.1, 1)}
              className="mt-3 text-[#373737] text-justify sm:text-[18px] text-[13px] max-w-3xl leading-[30px]"
            >
              In this section, I present you some articles that have contributed
              to the formation of my technical baggage. <br /> Some of these
              articles have helped me acquire key skills in my field of
              expertise.
            </motion.p>
          </div>

          <div className="mt-10 flex flex-wrap gap-7">
            {news.map((article, index) => (
              <NewCard key={`article-${index}`} index={index} {...article} />
            ))}
          </div>
          <StarsCanvas />
        </div>
        <div className="absolute sm:bottom-[15px] bottom-[10px] sm:right-10 right-5">
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
      </div>
      <Footer />
    </div>
  )
}

export default News
