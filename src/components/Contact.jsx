import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { PlanetCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_lmr2kiw',
        'template_jy37bss',
        {
          from_name: form.name,
          to_name: 'Vladimir SACCHETTO',
          from_email: form.email,
          to_email: 'vladisac@hotmail.it',
          message: form.message,
        },
        'BYad4C4kaaYFX_iri',
      )
      .then(() => {
        setLoading(false)
        alert(
          'Thank you for your message ! I will get back to you as soon as possible.',
        )

        setForm(
          {
            name: '',
            email: '',
            message: '',
          },
          (error) => {
            setLoading(false)

            console.log(error)

            alert('Something went wrong, please try again later.')
          },
        )
      })
  }

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-[#232323] p-8 rounded-2xl"
      >
        <p className="sm:text-[20px] text-[15px] text-[#ffffffee] uppercase tracking-wider">
          Get in touch
        </p>
        <h3 className="text-[#ffffffee] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-[#ffffffee] font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#696969] py-4 px-6 placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#ffffffee] font-medium mb-4">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#696969] py-4 px-6 placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#ffffffee] font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#696969] py-4 px-6 placeholder:text-secondary text-[#ffffffee] rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div className="flex justify-between">
            <div>
              <button
                type="submit"
                className="bg-[#ffffffee] py-3 px-8 rounded-xl outline-none w-fit text-[#373737] font-bold shadow-md shadow-primary cursor-pointer"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <PlanetCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
