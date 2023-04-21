import { Navbar, NewCard, StarsCanvas, Footer } from '../components'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { news } from '../constants/index.js'

const News = () => {
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
      </div>
      <Footer />
    </div>
  )
}

export default News
