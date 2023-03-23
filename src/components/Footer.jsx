import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { footLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Footer = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  // recuperation de la route
  useEffect(() => {
    const currentRoute = window.location.pathname
    console.log(currentRoute)
    if (currentRoute === '/') {
      let active = localStorage.getItem('active') ?? 'null'
      setActive(active)
      document
        .querySelector(`#${active}`)
        ?.scrollIntoView({ behavior: 'smooth' })
    } else {
      setActive(currentRoute.slice(1))
    }
  }, [])

  return (
    <footer
      className={`mt-10 w-full flex items-center py-5 fixed top-0 z-20 bg-[#232323]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('')
            localStorage.removeItem('active')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[17px] font-bold cursor-pointer flex">
            Vladimir&nbsp;<span className="sm:block hidden">| Sacchetto </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {footLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.id)
                localStorage.setItem('active', link.id)
              }}
            >
              <Link
                to={link.external ? `/${link.id}` : `/#${link.id}`}
                onClick={() => {
                  document
                    .querySelector(`#${link.id}`)
                    .scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-2">
              {footLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppin font-medium cursor-pointer text-[16px] hover:text-white`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer