import { motion } from 'framer-motion'
import { styles } from '../styles'

import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { programming, front, back, devops, softwares } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const Tech = () => {
  const technologies = [
    {
      title: 'Programming Languages',
      items: programming,
    },
    {
      title: 'Frontend',
      items: front,
    },
    {
      title: 'Backend',
      items: back,
    },
    {
      title: 'DevOps',
      items: devops,
    },
    {
      title: 'Softwares',
      items: softwares,
    },
  ]

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>what i learnt</p>
        <h2 className={styles.sectionHeadText}>Tech</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mb-5 text-[#373737] text-[18px] leading-[30px]"
      >
        In this section, I will present the technologies that I acquired during
        my BTS training, as well as those that I learned on my own. <br /> To
        make it easier to understand, I have organized these technologies into
        different categories.
      </motion.p>

      {technologies.map((technology) => (
        <div key={technology.title}>
          <motion.p className={styles.sectionSubText}>
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
    </>
  )
}

export default SectionWrapper(Tech)