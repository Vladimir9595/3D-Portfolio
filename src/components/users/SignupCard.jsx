import React, { useState } from 'react'
import CustomPopUp from '../CustomMessagePopUp'
import { motion } from 'framer-motion'
import axios from 'axios'

import { textVariant } from '../../utils/motion'
import { SectionWrapper } from '../../hoc'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  //   const [username, setUsername] = useState('')
  //   const [email, setEmail] = useState('')
  //   const [password, setPassword] = useState('')
  const [credentials, setCredentials] = useState({
    firstname: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  })
  const [isValidUsernameOrEmail, setIsValidUsernameOrEmail] = useState(true)
  const navigate = useNavigate()
  const [showHandlerButton, setShowHandlerButton] = useState(false)
  const [showPopUp, setShowPopUp] = useState(false)
  const [popUpMessage, setPopUpMessage] = useState('')
  const [popUpType, setPopUpType] = useState('success')

  const isValidUsernameEmail = (value) => {
    const usernameEmailRegex = /^[a-zA-Z0-9._@-]+$/ // Allow letters, numbers, . @ - _
    return usernameEmailRegex.test(value) && value.trim() !== ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
    if (name === 'username')
      if (!isValidUsernameEmail(value)) {
        setIsValidUsernameOrEmail(false)
      } else {
        setIsValidUsernameOrEmail(true)
      }
    if (name === 'email')
      if (!isValidUsernameEmail(value)) {
        setIsValidUsernameOrEmail(false)
      } else {
        setIsValidUsernameOrEmail(true)
      }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowPopUp(false)
    try {
      const { firstName, lastName, username, email, password } = credentials
      await axios.post(
        'http://172.17.166.31:5000/api/register',
        { firstName, lastName, username, email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      setShowPopUp(true)
      setPopUpMessage('User created successfully!')
      setPopUpType('success')
      setShowHandlerButton(true)
    } catch (error) {
      console.error('Error logging user:', error)
      setShowPopUp(true)
      setPopUpMessage('Failed to create a user : Verify your credentials')
      setPopUpType('error')
    }
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className="text-[#373737] font-black md:text-[5rem] sm:text-[4rem] xs:text-[3rem] text-[2rem] text-center uppercase">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col items-center">
            <span className="text-[#373737] sm:text-[1.5rem] text-[1rem] font-semibold mb-4">
              Firstname
            </span>
            <input
              type="text"
              name="firstName"
              value={credentials.firstName}
              onChange={handleChange}
              placeholder="Enter your firstname"
              required
              className={
                'bg-[#696969] py-4 px-6 placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-2/5'
              }
            />
          </label>
          <label className="flex flex-col items-center">
            <span className="text-[#373737] sm:text-[1.5rem] text-[1rem] font-semibold mb-4">
              Lastname
            </span>
            <input
              type="text"
              name="lastName"
              value={credentials.lastName}
              onChange={handleChange}
              placeholder="Enter your lastname"
              required
              className={
                'bg-[#696969] py-4 px-6 placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-2/5'
              }
            />
          </label>
          <label className="flex flex-col items-center">
            <span className="text-[#373737] sm:text-[1.5rem] text-[1rem] font-semibold mb-4">
              Username
            </span>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Enter your username or email"
              required
              className={`bg-[#696969] py-4 px-6 placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-2/5 ${
                !isValidUsernameOrEmail ? 'border-red-500' : ''
              }`}
            />
            {!isValidUsernameOrEmail && (
              <span className="text-red-500 text-sm mt-2">
                Please enter a valid username (letters, numbers, . @ - _).
              </span>
            )}
          </label>
          <label className="flex flex-col items-center">
            <span className="text-[#373737] sm:text-[1.5rem] text-[1rem] font-semibold mb-4">
              Email
            </span>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className={`bg-[#696969] py-4 px-6 placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-2/5 ${
                !isValidUsernameOrEmail ? 'border-red-500' : ''
              }`}
            />
            {!isValidUsernameOrEmail && (
              <span className="text-red-500 text-sm mt-2">
                Please enter a valid email (letters, numbers, . @ - _).
              </span>
            )}
          </label>
          <label className="flex flex-col items-center">
            <span className="text-[#373737] sm:text-[1.5rem] text-[1rem] font-semibold mb-4">
              Password
            </span>
             
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="bg-[#696969] py-4 px-6 placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium w-2/5"
            />
          </label>
          <div className="flex justify-center gap-28">
            <button
              type="submit"
              className="bg-[#ffffffee] py-3 px-8 rounded-xl outline-none w-fit text-[#373737] font-bold shadow-md shadow-primary hover:bg-[#373737] hover:text-[#ffffffee] cursor-pointer"
            >
              Submit
            </button>
            {showHandlerButton && (
              <button
                onClick={() => navigate('/handler')}
                type="handler"
                className="bg-[#ffffffee] py-3 px-8 rounded-xl outline-none w-fit text-[#373737] font-bold shadow-md shadow-primary hover:bg-[#373737] hover:text-[#ffffffee] cursor-pointer"
              >
                Handler
              </button>
            )}
          </div>
        </form>
      </motion.div>
      {showPopUp && (
        <CustomPopUp
          message={popUpMessage}
          type={popUpType}
          onClose={() => setShowPopUp(false)}
        />
      )}
    </>
  )
}

export default SectionWrapper(Signup)
