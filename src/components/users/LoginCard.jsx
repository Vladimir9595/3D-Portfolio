import React, { useState } from 'react'
import CustomPopUp from '../CustomMessagePopUp'
import { motion } from 'framer-motion'
import axios from 'axios'

import { textVariant } from '../../utils/motion'
import { SectionWrapper } from '../../hoc'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [credentials, setCredentials] = useState({
    usernameOrEmail: '',
    password: '',
  })
  const [isValidUsernameOrEmail, setIsValidUsernameOrEmail] = useState(true)
  const navigate = useNavigate()
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
    if (name === 'usernameOrEmail')
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
      const { usernameOrEmail, password } = credentials
      await axios.post(
        'http://172.17.166.31:5000/api/login',
        { usernameOrEmail, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      setShowPopUp(true)
      setPopUpMessage('User logged in successfully!')
      setPopUpType('success')
    } catch (error) {
      console.error('Error logging user:', error)
      setShowPopUp(true)
      setPopUpMessage('Failed to log in user : Verify your credentials')
      setPopUpType('error')
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
              name="usernameOrEmail"
              value={credentials.usernameOrEmail}
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
          <div className="md:flex block justify-center md:justify-center md:gap-28 gap-28">
            <button
              type="submit"
              className="bg-[#ffffffee] py-3 px-8 rounded-xl outline-none w-fit text-[#373737] font-bold shadow-md shadow-primary hover:bg-[#373737] hover:text-[#ffffffee] cursor-pointer"
            >
              Submit
            </button>
            <button
              onClick={() => navigate('/signup')}
              type="signup"
              className="bg-[#ffffffee] py-3 px-8 rounded-xl outline-none w-fit text-[#373737] font-bold shadow-md shadow-primary hover:bg-[#373737] hover:text-[#ffffffee] cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </form>
      </motion.div>
      {showPopUp && (
        <CustomPopUp
          message={popUpMessage}
          type={popUpType}
          onClose={() => {
            setShowPopUp(false)
            if (popUpType === 'success') {
              navigate('/handler')
            }
          }}
        />
      )}
    </>
  )
}

export default SectionWrapper(Login)
