import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { schools } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const SchoolCard = ({ school }) => (
  <VerticalTimelineElement
    contentstyle={{ background: '#373737', color: '#373737' }}
    contentArrowStyle={{ borderRight: '7px solid  #373737' }}
    date={school.date}
    style={{ color: '#373737' }}
    iconStyle={{ background: '#ffffff' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={school.icon}
          alt={school.company_name}
          className="w-[60%] h-[60%] object-contain"
        ></img>
      </div>
    }
  >
    <div>
      <h3 className="text-[#373737] text-[24px] font-bold">{school.title}</h3>
      <p
        className="text-[#373737] text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {school.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {school.points.map((point, index) => (
        <li
          key={`school-point-${index}`}
          className="text-[#373737] sm:text-justify text-start text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const School = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>All i have studied</p>
        <h2 className={styles.sectionHeadText}>Academic Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {schools.map((school, index) => (
            <SchoolCard key={index} school={school} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(School)
