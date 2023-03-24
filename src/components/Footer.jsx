import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { footLinks } from '../constants'

const Footer = () => {
  const [active, setActive] = useState('')
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

  return (
    <footer
      className={`${styles.paddingX} w-full flex items-center py-5 z-20 bg-[#232323]`}
    >
      <div className="w-full flex justify-center gap-3 items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-white lg:text-[18px] sm:text-[15px] xs:text-[14px] text-[12px] lg:leading-[25px] font-bold flex">
            © Vladimir Sacchetto; {year} |
          </span>
        </div>
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
      </div>
    </footer>
  )
}

export default Footer
