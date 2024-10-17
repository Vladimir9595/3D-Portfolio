import { Navbar, Footer } from '../'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EditNews = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    sourceLink: '',
    publishedAt: '',
    readStatus: '',
  })

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `http://172.17.166.31:5000/api/news/${id}`,
        )
        setFormData(response.data)
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    }
    fetchNews()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://172.17.166.31:5000/api/news/${id}`, formData)
      alert('News updated successfully')
    } catch (error) {
      console.error('Error updating news:', error)
      alert('Failed to update news')
    }
  }

    return (
      <div className="relative z-0 white-gradient">
        <div className="my-20">
          <Navbar />
        </div>
        <div className="container mx-auto mt-8">
          <h1 className="text-[#373737] font-black md:text-[5rem] sm:text-[4rem] xs:text-[3rem] text-[2rem] text-center uppercase">
            Edit News
          </h1>
          <form onSubmit={handleSubmit} className="md:mx-40">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="News Name"
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
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="bg-[#696969] py-4 px-6 md:text-[1rem] text-sm placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-full mb-2"
            />
            <input
              type="text"
              name="sourceLink"
              value={formData.sourceLink}
              onChange={handleChange}
              placeholder="Source Link"
              className="bg-[#696969] py-4 px-6 md:text-[1rem] text-sm placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-full mb-2"
            />
            <input
              type="date"
              name="publishedAt"
              value={formData.publishedAt}
              onChange={handleChange}
              className="bg-[#696969] py-4 px-6 md:text-[1rem] text-sm placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-full mb-2"
            />
            <input
              type="text"
              name="readStatus"
              value={formData.readStatus}
              onChange={handleChange}
              placeholder="Read Status"
              className="bg-[#696969] py-4 px-6 md:text-[1rem] text-sm placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-full mb-2"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#ffffffee] mt-2 mb-4 py-3 md:px-8 px-4 md:text-[1.25rem] text-sm rounded-xl outline-none w-fit text-[#373737] font-bold shadow-md shadow-primary hover:bg-[#373737] hover:text-[#ffffffee]"
              >
                Update News
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    )
}

export default EditNews
