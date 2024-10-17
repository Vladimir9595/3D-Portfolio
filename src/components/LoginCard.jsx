import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isValidUsername, setIsValidUsername] = useState(true)
  const navigate = useNavigate()

  const isValidInput = (value) => {
    const usernameRegex = /^[a-zA-Z0-9._@-]+$/ // Allow letters, numbers, . @ - _
    return usernameRegex.test(value) && value.trim() !== ''
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
    if (!isValidInput(e.target.value)) {
      setIsValidUsername(false)
    } else {
      setIsValidUsername(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValidUsername && password.trim() !== '') {
      console.log('Username:', username)
      console.log('Password:', password)
      navigate('/handler')
    } else {
      console.error('Invalid username or empty password')
    }
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className="text-[#373737] font-black md:text-[5rem] sm:text-[4rem] xs:text-[3rem] text-[2rem] text-center uppercase">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col items-center">
            <span className="text-[#373737] sm:text-[1.5rem] text-[1rem] font-semibold mb-4">
              Username or Email
            </span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username or email"
              className={`bg-[#696969] py-4 px-6 placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-2/5 ${
                !isValidUsername ? 'border-red-500' : ''
              }`}
            />
            {!isValidUsername && (
              <span className="text-red-500 text-sm mt-2">
                Please enter a valid username (letters, numbers, . @ - _).
              </span>
            )}
          </label>
          <label className="flex flex-col items-center">
            <span className="text-[#373737] sm:text-[1.5rem] text-[1rem] font-semibold mb-4">
              Password
            </span>{' '}
             
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-[#696969] py-4 px-6 placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-2/5"
            />
          </label>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#ffffffee] py-3 px-8 rounded-xl outline-none w-fit text-[#373737] font-bold shadow-md shadow-primary hover:bg-[#373737] hover:text-[#ffffffee] cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Login)
