import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { cdn, git } from '../assets'

import { fadeIn } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_code_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#232323] p-5 rounded-2xl sm:w-[360px] w-[300px] sm:h-[600px] h-[650px] sm:mx-0 mx-4"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
            >
              <div className="white-gradient w-7 h-7 rounded-full flex justify-center items-center cursor-pointer ">
                <img src={cdn} alt="cdn" className="w-5 h-5 object-contain" />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
            <div
              onClick={() => window.open(project_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
            >
              <div className="white-gradient w-7 h-7 rounded-full flex justify-center items-center cursor-pointer ">
                <img src={git} alt="git" className="w-5 h-5 object-contain" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-justify text-[14px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 absolute">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

export default ProjectCard
