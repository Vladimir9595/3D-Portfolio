import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-5 text-[#373737] text-[17px] max-w-3xl leading-[30px]"
      >
        I am a serious and invested person, ready to assume missions as a web
        developer for the maintenance and management of sites. I'm currently
        working for a BTS SIO within the CCS - SAT Clients belonging to the
        Crédit Mutuel Alliance Fédérale group, I continue my professional and
        professional and personal development through self-training on
        programming languages on programming languages and new technologies.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, 'about')
