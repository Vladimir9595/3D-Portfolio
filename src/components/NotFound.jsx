import React from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { initReactI18next, useTranslation } from 'react-i18next'
import i18next from 'i18next'

import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const translationEn = {
  notfoundTitle: 'Page Not found',
  notfoundText: 'Ooops, the page you are looking for does not exist',
}
const translationFr = {
  notfoundTitle: "La page n'existe pas",
  notfoundText: 'Ooops, la page que vous recherchez n’existe pas',
}

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    fr: { translation: translationFr },
  },
  debug: true,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

const NotFound = () => {
  const { t, i18n } = useTranslation()

  const onChange = (e) => {
    const selectedLanguage = e.target.value
    i18n.changeLanguage(selectedLanguage)
  }

  useEffect(() => {
    i18n.changeLanguage('en') // Change the language here if needed
  }, [])

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="absolute right-1">
          <select
            name="language"
            className="rounded-md w-[3em]"
            onChange={onChange}
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </div>
        <img
          src="https://cdn.vladimir-portfolio.com/shared/images/smile.png"
          alt="smile"
          className="md:w-[20%] w-[30%] md:h-[20%] h-[30%] object-contain mx-auto md:my-[5vh] my-[5vh]"
        />
        <p className="md:text-[50px] sm:text-[40px] xs:text-[30px] text-[35px] text-[#232323] text-center uppercase tracking-wider">
          {t('notfoundTitle')}
        </p>
        <h1 className="text-[#373737] font-black md:text-[150px] sm:text-[100px] xs:text-[90px] text-[80px] text-center">
          404
        </h1>
        <p className="md:text-[35px] sm:text-[30px] xs:text-[20px] text-[25px] text-[#232323] text-center md:mb-[5vh] mb-[10vh] tracking-wider">
          {t('notfoundText')}
        </p>
      </motion.div>
    </>
  )
}

export default SectionWrapper(NotFound, 'notfound')
