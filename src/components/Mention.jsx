import { motion } from 'framer-motion'
import { styles } from '../styles'
import React, { useEffect, useState } from 'react'

import { SectionWrapper } from '../hoc'
import { mentions } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const Mention = () => {
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
        <h2 className={`${styles.sectionHeadText} mb-3`}>Legal Mentions</h2>
      </motion.div>

      {mentions.map((mention) => (
        <div key={mention.title}>
          <motion.p
            className={`${styles.sectionSubText} font-semibold sm:text-[24px] text-[18px] leading-[30px]`}
          >
            {' '}
            {mention.title}{' '}
          </motion.p>

          <div>
            <motion.p
              dangerouslySetInnerHTML={{
                __html: mention.content.replace(/\n/g, '<br />'),
              }}
              variants={fadeIn('', '', 0.1, 1)}
              className="my-5 text-[#232323] text-justify sm:text-[18px] text-[13px] leading-[30px]"
            />
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

export default SectionWrapper(Mention)
