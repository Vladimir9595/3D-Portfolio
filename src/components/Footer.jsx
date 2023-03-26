import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import { styles } from '../styles'
import { footLinks } from '../constants'

const Footer = () => {
  const [active, setActive] = useState(localStorage.getItem('active') || '')
  const [year, setYear] = useState(new Date().getFullYear())

  // recuperation de la route
  useEffect(() => {
    const currentRoute = window.location.pathname

    let route = currentRoute.slice(14)
    setActive(route)
  }, [])

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const handleIconClick = (iconName, url) => {
    setActive(iconName)
    window.open(url, '_blank')
    localStorage.setItem('active', iconName)
  }

  return (
    <footer
      className={`${styles.paddingX} w-full flex items-center py-5 z-20 black-gradient`}
    >
      <div className="w-full flex justify-center gap-3 justify-around max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-white lg:text-[18px] sm:text-[15px] xs:text-[14px] text-[12px] lg:leading-[25px] font-semibold flex">
            © Vladimir Sacchetto; {year}
          </span>
        </div>
        <span className="text-white lg:text-[18px] sm:text-[15px] xs:text-[14px] text-[12px] lg:leading-[25px] font-semibold flex sm:block hidden">
          |
        </span>
        <ul className="list-none sm:flex flex-row gap-10">
          {footLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? 'text-white' : 'text-secondary'
              } hover:text-white lg:text-[18px] sm:text-[15px] xs:text-[14px] text-[12px] lg:leading-[25px] font-medium cursor-pointer`}
            >
              <Link to={link.external ? `/${link.id}` : `/#${link.id}`}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <span className="text-white lg:text-[18px] sm:text-[15px] xs:text-[14px] text-[12px] lg:leading-[25px] font-semibold flex sm:block hidden">
          |
        </span>
        <div className="flex items-center ml-[-12px]">
          <a
            onClick={() =>
              handleIconClick('github', 'https://github.com/Vladimir9595')
            }
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={`${
                active === 'github' ? 'text-white' : 'text-secondary'
              } hover:text-white md:text-[1.90em] text-[1.25em] flex justify-center items-center cursor-pointer md:ml-7 ml-3 object-contain object-contain`}
            />
          </a>
          <a
            onClick={() =>
              handleIconClick(
                'linkedin',
                'https://www.linkedin.com/in/vladimir-sacchetto-16642b116/?locale=fr_FR',
              )
            }
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={`${
                active === 'linkedin' ? 'text-white' : 'text-secondary'
              } hover:text-white md:text-[1.90em] text-[1.25em] flex justify-center items-center cursor-pointer md:ml-7 ml-3 object-contain object-contain`}
            />
          </a>
          <a
            onClick={() =>
              handleIconClick(
                'facebook',
                'https://www.facebook.com/vladimir.sacchetto/',
              )
            }
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className={`${
                active === 'facebook' ? 'text-white' : 'text-secondary'
              } hover:text-white md:text-[1.90em] text-[1.25em] flex justify-center items-center cursor-pointer md:ml-7 ml-3 object-contain object-contain`}
            />
          </a>
          <a
            onClick={() =>
              handleIconClick(
                'instagram',
                'https://www.instagram.com/vlado5991/',
              )
            }
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className={`${
                active === 'instagram' ? 'text-white' : 'text-secondary'
              } hover:text-white md:text-[2.05em] text-[1.35em] flex justify-center items-center cursor-pointer md:ml-7 ml-3 object-contain object-contain`}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
