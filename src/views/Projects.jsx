import { Navbar, ProjectCard, StarsCanvas, Footer } from '../components'
import { schoolProjects, workProjects, personalProjects } from '../constants'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'


const Projects = () => {
  const projects = [
    {
      title: 'School Projects',
      items: schoolProjects,
    },
    {
      title: 'Work Projects',
      items: workProjects,
    },
    {
      title: 'Personal Projects',
      items: personalProjects,
    },
  ]

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
            <p className={styles.sectionSubText}>what i made</p>
            <h2 className={styles.sectionHeadText}>Projects</h2>
          </motion.div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn('', '', 0.1, 1)}
              className="mt-3 text-[#373737] text-justify sm:text-[18px] text-[13px] max-w-3xl leading-[30px]"
            >
              The following projects highlight my skills and experience through
              concrete examples of my work. <br /> Each project is briefly
              described with links to code repositories and documents. <br /> It
              reflects my ability to solve complex problems, work with different
              technologies and to manage projects efficiently.
            </motion.p>
          </div>

          {projects.map((project) => (
            <div key={project.title} className="mt-10">
              <motion.p
                className={`${styles.sectionSubText} font-semibold sm:text-[25px] text-[20px] leading-[30px] mb-10`}
              >
                {project.title}
              </motion.p>

              <div className="flex flex-wrap gap-7">
                {project.items.map((item, index) => (
                  <ProjectCard key={`item-${index}`} index={index} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default Projects
