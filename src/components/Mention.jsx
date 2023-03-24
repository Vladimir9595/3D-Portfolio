import { motion } from 'framer-motion'
import { styles } from '../styles'

import { SectionWrapper } from '../hoc'
import { mentions } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const Mention = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mb-3`}>Legal Mentions</h2>
      </motion.div>

      {mentions.map((mention) => (
        <div key={mention.title}>
          <motion.p
            className={`${styles.sectionSubText} font-bold sm:text-[25px] text-[19px] leading-[30px]`}
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
              className="my-5 text-[#232323] sm:text-[18px] leading-[30px]"
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default SectionWrapper(Mention)
