import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { fadeIn } from '../utils/motion'

const NewCard = ({
  index,
  name,
  description,
  image,
  source_link,
  published_at,
  read,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#232323] p-5 rounded-2xl sm:w-[360px] w-[300px] sm:h-[500px] h-[550px] sm:mx-0 mx-4"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-justify text-[14px]">
            {description}
          </p>
          <div className="flex gap-5">
            <p className="mt-4 text-white text-[12px]">{published_at}</p>
            <p
              onClick={() => window.open(source_link, '_blank')}
              className="mt-4 text-secondary hover:text-white text-[12px] ml-auto cursor-pointer"
            >
              {read}
            </p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

export default NewCard