import { Navbar, Footer } from '../'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EditProject = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    tags: '',
    image: '',
    sourceCodeLink: '',
    projectCodeLink: '',
    isSchoolProject: false,
    isWorkProject: false,
    isPersonalProject: false,
  })

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `http://172.17.166.31:5000/api/projects/${id}`,
        )
        console.log(response.data)
        setFormData(response.data)
      } catch (error) {
        console.error('Error fetching project:', error)
      }
    }
    fetchProject()
  }, [id])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (name === 'projectType') {
      setFormData({
        ...formData,
        isSchoolProject: value === 'isSchoolProject',
        isWorkProject: value === 'isWorkProject',
        isPersonalProject: value === 'isPersonalProject',
      })
    } else {
      setFormData({
        ...formData,
        [name]: type === 'radio' ? checked : value,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://172.17.166.31:5000/api/projects/${id}`, formData)
      alert('Project updated successfully')
    } catch (error) {
      console.error('Error updating project:', error)
      alert('Failed to update project')
    }
  }

  return (
    <div className="relative z-0 white-gradient">
      <div className="my-20">
        <Navbar />
      </div>
      <div className="container mx-auto mt-8">
        <h1 className="text-[#373737] font-black md:text-[5rem] sm:text-[4rem] xs:text-[3rem] text-[2rem] text-center uppercase">
          Edit Project
        </h1>
        <form onSubmit={handleSubmit} className="md:mx-40">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Project Name"
            className="bg-[#696969] py-4 px-6 md:text-[1rem] text-sm placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-full mb-2"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="bg-[#696969] py-4 px-6 md:text-[1rem] text-sm placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-full mb-2 resize-none min-h-[200px] overflow-y-auto"
          />
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags"
            className="bg-[#696969] py-4 px-6 md:text-[1rem] text-sm placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-full mb-2"
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="bg-[#696969] py-4 px-6 md:text-[1rem] text-sm placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-full mb-2"
          />
          <input
            type="text"
            name="sourceCodeLink"
            value={formData.sourceCodeLink}
            onChange={handleChange}
            placeholder="Source Code Link"
            className="bg-[#696969] py-4 px-6 md:text-[1rem] text-sm placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-full mb-2"
          />
          <input
            type="text"
            name="projectCodeLink"
            value={formData.projectCodeLink}
            onChange={handleChange}
            placeholder="Project Link"
            className="bg-[#696969] py-4 px-6 md:text-[1rem] text-sm placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-full mb-2"
          />
          <div className="mb-2">
            <label className="text-[#373737] font-black md:text-[1.2rem] text-[1rem]">
              <input
                type="radio"
                name="projectType"
                value="isSchoolProject"
                checked={formData.isSchoolProject}
                onChange={handleChange}
                className="mr-2 ml-1"
              />{' '}
              School Project
            </label>
          </div>
          <div className="mb-2">
            <label className="text-[#373737] font-black md:text-[1.2rem] text-[1rem]">
              <input
                type="radio"
                name="projectType"
                value="isWorkProject"
                checked={formData.isWorkProject}
                onChange={handleChange}
                className="mr-2 ml-1"
              />{' '}
              Work Project
            </label>
          </div>
          <div className="mb-2">
            <label className="text-[#373737] font-black md:text-[1.2rem] text-[1rem]">
              <input
                type="radio"
                name="projectType"
                value="isPersonalProject"
                checked={formData.isPersonalProject}
                onChange={handleChange}
                className="mr-2 ml-1"
              />{' '}
              Personal Project
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#ffffffee] mt-2 mb-4 py-3 md:px-8 px-4 md:text-[1.25rem] text-sm rounded-xl outline-none w-fit text-[#373737] font-bold shadow-md shadow-primary hover:bg-[#373737] hover:text-[#ffffffee]"
            >
              Update Project
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default EditProject
