import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProjectsHandler = () => {
  const [projects, setProjects] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://172.17.166.31:5000/api/projects')
      setProjects(response.data)
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
  }

  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(`http://172.17.166.31:5000/api/projects/${projectId}`)
      fetchProjects()
    } catch (error) {
      console.error('Error deleting project:', error)
    }
  }

  return (
    <div className="container pl-[20px] mt-10">
      <div className="md:block flex gap-4">
        <h1 className="text-[#373737] font-black md:text-[2.5rem] sm:text-[2rem] xs:text-[1rem] text-[1rem] uppercase">
          Projects
        </h1>
        <div className="mb-4">
          <button
            onClick={() => navigate('/add-project')}
            className="bg-[#ffffffee] md:py-3 sm:py-2 py-2 md:px-8 sm:px-5 px-3 rounded-xl outline-none md:text-[1rem] sm:text-[0.75rem] text-[0.50rem] text-[#373737] font-bold shadow-md shadow-primary hover:bg-[#373737] hover:text-[#ffffffee]"
          >
            Add Project
          </button>
        </div>
      </div>
      <ul className="list-disc list-none">
        {projects.map((project) => (
          <li key={project.id} className="mb-2">
            <div className="flex items-center gap-5">
              <span className="text-[#373737] font-black md:text-[1.2rem] sm:text-[1rem] xs:text-[0.5rem] text-[0.5rem]">
                {project.name}
              </span>
              <button
                onClick={() => navigate(`/edit-project/${project.id}`)}
                className="bg-[#ffffffee] md:py-3 sm:py-2 py-2 md:px-8 sm:px-5 px-3 rounded-xl outline-none md:text-[1rem] sm:text-[0.75rem] text-[0.50rem] text-[#373737] font-bold shadow-md shadow-primary hover:bg-[#373737] hover:text-[#ffffffee]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProject(project.id)}
                className="bg-[#ffffffee] md:py-3 sm:py-2 py-2 md:px-8 sm:px-5 px-3 rounded-xl outline-none md:text-[1rem] sm:text-[0.75rem] text-[0.50rem] text-[#373737] font-bold shadow-md shadow-primary hover:bg-[#373737] hover:text-[#ffffffee]"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectsHandler
