import express, { json } from 'express'
import cors from 'cors'
import News from './models/News.js'
import Project from './models/Project.js'

// Middleware
const app = express()
app.use(cors())
app.use(json())

// News Routes
app.get('/api/news', async (req, res) => {
  try {
    const news = await News.findAll()
    res.json(news)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.post('/api/news', async (req, res) => {
  try {
    const { name } = req.body
    const newNews = await News.create({ name })
    res.json(newNews)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.put('/api/news/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const news = await News.findByPk(id)
    if (news) {
      news.name = name
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

app.post('/api/projects', async (req, res) => {
  try {
    const { name } = req.body
    const newProject = await Project.create({ name })
    res.json(newProject)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.put('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const project = await Project.findByPk(id)
    if (project) {
      project.name = name
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
