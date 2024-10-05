import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProjectsHandler = () => {
  const [projects, setProjects] = useState([])
  const [newProjectName, setNewProjectName] = useState('')
  const [isEditingProject, setIsEditingProject] = useState(false)
  const [editingProjectId, setEditingProjectId] = useState(null)
  const [editingProjectName, setEditingProjectName] = useState('')

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

  const handleAddProject = async () => {
    if (newProjectName.trim() !== '') {
      try {
        await axios.post('http://172.17.166.31:5000/api/projects', {
          name: newProjectName,
        })
        setNewProjectName('')
        fetchProjects()
      } catch (error) {
        console.error('Error adding project:', error)
      }
    }
  }

  const handleEditProject = (projectId) => {
    setIsEditingProject(true)
    setEditingProjectId(projectId)
    const projectToEdit = projects.find((project) => project.id === projectId)
    setEditingProjectName(projectToEdit.name)
  }

  const handleUpdateProject = async () => {
    if (editingProjectName.trim() !== '') {
      try {
        await axios.put(
          `http://172.17.166.31:5000/api/projects/${editingProjectId}`,
          {
            name: editingProjectName,
          },
        )
        setIsEditingProject(false)
        setEditingProjectId(null)
        setEditingProjectName('')
        fetchProjects()
      } catch (error) {
        console.error('Error updating project:', error)
      }
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
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          placeholder="Enter new project name"
          className="border rounded-md p-2"
        />
        <button
          onClick={handleAddProject}
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
        >
          Add Project
        </button>
      </div>
      <ul className="list-disc">
        {projects.map((project) => (
          <li key={project.id} className="mb-2">
            {isEditingProject && editingProjectId === project.id ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={editingProjectName}
                  onChange={(e) => setEditingProjectName(e.target.value)}
                  className="border rounded-md p-2 mr-2"
                />
                <button
                  onClick={handleUpdateProject}
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Update
                </button>
                <button
                  onClick={() => setIsEditingProject(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span>{project.name}</span>
                <button
                  onClick={() => handleEditProject(project.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md ml-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectsHandler
