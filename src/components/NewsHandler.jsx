import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NewsHandler = () => {
  const [news, setNews] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://172.17.166.31:5000/api/news')
      setNews(response.data)
    } catch (error) {
      console.error('Error fetching news:', error)
    }
  }

  const handleDeleteNews = async (newsId) => {
    try {
      await axios.delete(`http://172.17.166.31:5000/api/news/${newsId}`)
      fetchNews()
    } catch (error) {
      console.error('Error deleting news:', error)
    }
  }

  return (
    <div className="container pl-[20px] mt-10">
      <div className="md:block flex gap-4 md:pt-[0px] sm:pt-[12px] pt-[10px]">
        <h1 className="text-[#373737] font-black md:text-[2.5rem] sm:text-[2rem] xs:text-[1rem] text-[1rem] uppercase">
          News
        </h1>
        <div className="mb-4">
          <button
            onClick={() => navigate('/add-news')}
            className="bg-[#ffffffee] md:py-3 sm:py-2 py-2 md:px-8 sm:px-5 px-3 rounded-xl outline-none md:text-[1rem] sm:text-[0.75rem] text-[0.50rem] text-[#373737] font-bold shadow-md shadow-primary hover:bg-[#373737] hover:text-[#ffffffee] cursor-pointer"
          >
            Add News
          </button>
        </div>
      </div>
      <ul className="list-disc list-none">
        {news.map((newsItem) => (
          <li key={newsItem.id} className="mb-2">
            <div className="flex items-center gap-5">
              <span className="text-[#373737] font-black md:text-[1.2rem] sm:text-[1rem] xs:text-[0.5rem] text-[0.5rem]">
                {newsItem.name}
              </span>
              <button
                onClick={() => navigate(`/edit-news/${newsItem.id}`)}
                className="bg-[#ffffffee] md:py-3 sm:py-2 py-2 md:px-8 sm:px-5 px-3 rounded-xl outline-none md:text-[1rem] sm:text-[0.75rem] text-[0.50rem] text-[#373737] font-bold shadow-md shadow-primary hover:bg-[#373737] hover:text-[#ffffffee] cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteNews(newsItem.id)}
                className="bg-[#ffffffee] md:py-3 sm:py-2 py-2 md:px-8 sm:px-5 px-3 rounded-xl outline-none md:text-[1rem] sm:text-[0.75rem] text-[0.50rem] text-[#373737] font-bold shadow-md shadow-primary hover:bg-[#373737] hover:text-[#ffffffee] cursor-pointer"
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

export default NewsHandler
