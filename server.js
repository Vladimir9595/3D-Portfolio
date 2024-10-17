import express, { json } from 'express'
import cors from 'cors'
import News from './models/News.js'
import Project from './models/Project.js'
import User from './models/User.js'

// Middleware
const app = express()
app.use(cors())
app.use(json())

// User Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.post('api/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email, password } })
    if (user) {
      res.json(user)
      alert('Login successful')
    } else {
      res.status(400).json({ error: 'Invalid credentials' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// News Routes
app.get('/api/news', async (req, res) => {
  try {
    const news = await News.findAll()
    res.json(news)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.get('/api/news/:id', async (req, res) => {
  try {
    const { id } = req.params
    const news = await News.findByPk(id)
    if (news) {
      res.json(news)
    } else {
      res.status(404).json({ error: 'News not found' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.post('/api/news', async (req, res) => {
  try {
    const { name } = req.body
    const { description } = req.body
    const { image } = req.body
    const { sourceLink } = req.body
    const { publishedAt } = req.body
    const { readStatus } = req.body
    const newNews = await News.create({
      name,
      description,
      image,
      sourceLink,
      publishedAt,
      readStatus,
    })
    res.json(newNews)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.put('/api/news/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const { description } = req.body
    const { image } = req.body
    const { sourceLink } = req.body
    const { publishedAt } = req.body
    const { readStatus } = req.body
    const news = await News.findByPk(id)
    if (news) {
      news.name = name
      news.description = description
      news.image = image
      news.sourceLink = sourceLink
      news.publishedAt = publishedAt
      news.readStatus = readStatus
      await news.save()
      res.json(news)
    } else {
      res.status(404).json({ error: 'News not found' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.delete('/api/news/:id', async (req, res) => {
  try {
    const { id } = req.params
    const news = await News.findByPk(id)
    if (news) {
      await news.destroy()
      res.json({ message: 'News deleted' })
    } else {
      res.status(404).json({ error: 'News not found' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Projects routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.findAll()
    res.json(projects)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.get('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params
    const projects = await Project.findByPk(id)
    if (projects) {
      res.json(projects)
    } else {
      res.status(404).json({ error: 'Projects not found' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.post('/api/projects', async (req, res) => {
  try {
    const { name } = req.body
    const { description } = req.body
    const { tags } = req.body
    const { image } = req.body
    const { sourceCodeLink } = req.body
    const { projectCodeLink } = req.body
    const { isSchoolProject } = req.body
    const { isWorkProject } = req.body
    const { isPersonalProject } = req.body
    const newProject = await Project.create({
      name,
      description,
      tags,
      image,
      sourceCodeLink,
      projectCodeLink,
      isSchoolProject,
      isWorkProject,
      isPersonalProject,
    })
    res.json(newProject)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.put('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const { description } = req.body
    const { tags } = req.body
    const { image } = req.body
    const { sourceCodeLink } = req.body
    const { projectCodeLink } = req.body
    const { isSchoolProject } = req.body
    const { isWorkProject } = req.body
    const { isPersonalProject } = req.body
    const project = await Project.findByPk(id)
    if (project) {
      project.name = name
      project.description = description
      project.tags = tags
      project.image = image
      project.sourceCodeLink = sourceCodeLink
      project.projectCodeLink = projectCodeLink
      project.isSchoolProject = isSchoolProject
      project.isWorkProject = isWorkProject
      project.isPersonalProject = isPersonalProject
      await project.save()
      res.json(project)
    } else {
      res.status(404).json({ error: 'Project not found' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.delete('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params
    const project = await Project.findByPk(id)
    if (project) {
      await project.destroy()
      res.json({ message: 'Project deleted' })
    } else {
      res.status(404).json({ error: 'Project not found' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Start the server
const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
