import React from 'react'
import { motion } from 'framer-motion'

import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const NotFound = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <img
          src="https://cdn.vladimir-portfolio.com/shared/images/smile.png"
          alt="smile"
          className="md:w-[20%] w-[30%] md:h-[20%] h-[30%] object-contain mx-auto md:my-[5vh] my-[5vh]"
        />
        <p className="md:text-[50px] sm:text-[40px] xs:text-[30px] text-[35px] text-[#232323] text-center uppercase tracking-wider">
          Page Not found
        </p>
        <h1 className="text-[#373737] font-black md:text-[150px] sm:text-[100px] xs:text-[90px] text-[80px] text-center">
          404
        </h1>
        <p className="md:text-[35px] sm:text-[30px] xs:text-[20px] text-[25px] text-[#232323] text-center md:mb-[5vh] mb-[10vh] tracking-wider">
          Ooops, the page you are looking for does not exist
        </p>
      </motion.div>
    </>
  )
}

export default SectionWrapper(NotFound, 'notfound')
