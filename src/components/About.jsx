import React from 'react'
import cv from '../assets/logo_cv.png'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <>
      <img
        src={cv}
        alt="logo_cv"
        className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] object-contain cursor-pointer sm:mt-5 mt-2 sm:mb-[-4rem] mb-[-3rem] ml-[17rem] sm:ml-[70rem]"
        onClick={() =>
          handleIconClick(
            'https://cdn.vladimir-portfolio.com/shared/pdf/CV_VLADIMIR_SACCHETTO.pdf',
          )
        }
      />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-5 text-[#373737] text-justify sm:text-[18px] text-[13px] max-w-3xl leading-[30px]"
      >
        I am a serious and invested person, ready to assume missions as a web
        developer for the maintenance and management of sites. <br />
        In July 2023, I obtained my BTS SIO at the CCI Campus in Strasbourg,
        thanks to a work-study programme with CCS - SAT Clients, part of the
        Crédit Mutuel Alliance Fédérale group. <br /> In September 2023, I
        joined the CNAM in Strasbourg to continue my studies for the Diplôme
        d'Ingénieur Informatique, specialising in Information Systems. This
        course is run in partnership with ITII Alsace and is a sandwich course
        at Alcatel-Lucent Enterprise.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, 'about')
