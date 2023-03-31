<a name="readme-top"></a>

<div align="center" >
<h1 align="center">Portfolio 3D</h1>
 <img
      src="https://cdn.vladimir-portfolio.com/shared/images/vs_logo.png"
      alt="logo"
      width="100"
      height="100"
    />

<h2>This is my personal 3D Portfolio</h2>
<h4>
    <a href="https://www.vladimir-portfolio.com">Go to the site</a>
  <span> · </span>
    <a href="https://github.com/Vladimir9595/3D-Portfolio/issues">Report a bug </a>
  <span> · </span>
    <a href="https://github.com/Vladimir9595/3D-Portfolio/issues">I have an idea</a>
  </h4>
</div>

# :notebook_with_decorative_cover: Summary

- [:notebook_with_decorative_cover: About the project](#star2-about-the-project)
  - [:space_invader: Technologies](#space_invader-technologies)
- [:toolbox: Getting Started](#toolbox-getting-started)
  - [:gear: Setup](#gear-setup)
  - [:gear: Configuration](#gear-configuration)
  - [:gear: Production](#gear-production)
- [:wave: Contributors](#wave-contributors)

## :star2: About the project

The idea to realize this project came because I wanted to find something original. So I found [Adrian Hajdin](https://github.com/adrianhajdin)'s online portfolio which gave me the inspiration to create my 3D Portfolio.
I followed all the steps to make this project fonctional and great. This project is entierly build with [React.js](https://reactjs.org/), [Three.js](https://threejs.org/) and [Tailwind CSS](https://tailwindcss.com/).

### :space_invader: Technologies

  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
      alt="react"
      width="40"
      height="40"
    />
  </a>
  <a href="https://threejs.org/" target="_blank" rel="noreferrer">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg"
      alt="threejs"
      width="40"
      height="40"
    />
  </a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
<img    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
      alt="tailwind"
      width="40"
      height="40"
    />
  </a>
  <a href="https://vitejs.dev//" target="_blank" rel="noreferrer">
<img    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png"
      alt="tailwind"
      width="40"
      height="40"
    />
  </a>

# :toolbox: Getting Started

Be sure that your development environnment is ready to start.
Then create a folder and inside it run the command below :

```bash
npm create vite@latest ./ -- --template react
```

This command will make a vierge project with React.js and Vite.

Before the commands `npm install` and `npm run dev` you need to install the frameworks **Tailwind CSS**

### Install Tailwind

In the project folder run the commands :

```bash
npm install -D tailwindcss
npx tailwindcss init
```

### Install additionals packages

To build a 3D canvas model, you need some additionals packages.
To make that, run the command below :

```bash
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core framer-motion react-router-dom
```

### Add tailwind using Vite proprieties

You need to install two packages for Tailwind when you use React.js. They are **postcss** and **autoprefixer**

```bash
npm install --legacy-peer-deps -D postcss autoprefixer
npx tailwindcss init -p
```

# :gear: Setup

## Default structure

In this project you have two differents folders :

- `src` which contains all the files of the project.
- `public` which contains the index.html file and all canvas models.
  You can customize your project in the `src` folder and add all the components and the assets.

There are some files to replace to make the project fonctional.
You can find them in a GitHub Gist Code Snippets [here](https://gist.github.com/adrianhajdin/b1d33c262941a7e21aad833a1cfc84b1).

### Replace the `index.css`

Here you can copy the content of `index.css` GitHub Gist code

### Create a `style.js`

In the `src/` folder you create a new file `style.js` and copy the `style.js` content from GitHub Gist

### Replace the `tailwind.config.cjs`

At the PATH of the project you replace the `tailwind.config.cjs` content from GitHub Gist file

### Create `utils/motion.js`

In the `src/` folder you create the `utils/` folder. Inside that the `motion.js` file then replace the content from GitHub Gist file

### Create `constants/index.js`

In the `src/` folder you create the `constants/` folder. Inside that the `index.js` which containt the `constants.js` content from GitHub Gist file

## Run the project with npm commands

After repalce all files and folders, you can run

```bash
npm run dev # to run the project in development mode
```

# :gear: Configuration

## Routing with React Router

To make the routing in the project you use the package **react-router-dom** that you installed before.

In the src folder you create a file called `main.jsx`.

I show you my file to make the routing in the project :

```javascript
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Technologies from './Technologies'
import Articles from './Articles'
import Projs from './Proj'
import Mentions from './Mentions'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/mentions" element={<Mentions />} />
      <Route path="/projects" element={<Projs />} />
      <Route path="/news" element={<Articles />} />
    </>,
  ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
```

In this file i import the package **react-router-dom** and the components of the project.
Then i create a router with the package **react-router-dom** and i add the components in the router.

## Implement Canvas 3D model

You can add the Canvas component in the Hero section.
To build a 3D model Canvas you have to import some things in the section like :

```bash
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
```

After that you can give a look in the [React-Three-Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) to optimize the quality of lights and orbits for the 3D model

## Add Loader

You can add a loader to the Canvas component to wait the 3D model is loaded.

In the Loader.jsx you can import the Html component from the package **@react-three/drei** to add a loader in the Canvas component.

```bash
import { Html, useProgress } from '@react-three/drei'
```

### Stylize the sections

You can add a folder called `hoc` in `src` folder, to add a component called `SectionWrapper.jsx` to stylize your sections.

```javascript
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    )
  }

export default StarWrapper
```

To export this file, you need to create an `index.js` file in the `hoc` folder.

```javascript
import SectionWrapper from './SectionWrapper'

export { SectionWrapper }
```

## Add the Experience and Academic section

In the Experience section you need to import some libraries to build the timeline.

```javascript
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences, school } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
```

## Add the Tech skills section

In the Tech skills section you need to import some libraries to build the skills cards.

```javascript
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei'

import CanvasLoader from '../Loader'
```

## Add the Projects and News section

In the Projects and News section you need to import some libraries to build the projects and news cards.

```javascript
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { cdn } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects, news } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
```

## Add the Contact section

For the contact section you need to import some libraries to build the contact form.

```javascript
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { PlanetCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
```

### Send emails with EmailJS

First of all you need to create an account on [EmailJS](https://www.emailjs.com/)
In this website you can _Add New Service_ create a template for your email and get the service ID, template ID and public key.

In your `Contact.jsx` section you build two constants :

```javascript
const handleChange = (e) => {}

const handleSubmit = (e) => {}
```

The first one is to handle the change of the input and the second one is to handle the submit of the form.

In the `handleSubmit` function you need to call the `emailjs.send` function with the service ID, template ID and public key from your own account.
You can also include the `.then` and `.catch` functions to handle the response of the email.

```javascript
const handleSubmit = (e) => {
  e.preventDefault()
  setLoading(true)

  emailjs
    .send(
      '(your service ID)',
      '(your template ID)',
      {
        from_name: form.name,
        to_name: '(your name)',
        from_email: form.email,
        to_email: '(your email)',
        message: form.message,
      },
      '(your public key)',
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
```

## Add the Footer section

In the Footer section you need to import some libraries to build the footer.

```javascript
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// For the social media icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import { styles } from '../styles'
import { footLinks } from '../constants'
```

## Add the 404 page

In your `main.jsx` file you can add the routing for the 404 page.

```javascript
<Route path="*" element={<Error404 />} />
```

Then you create the `Error404.jsx` file in the `src` folder who call your page.

You can redirect client to error page with the code below :

```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Navigate to="/404" />
    </RouterProvider>
  </React.StrictMode>,
)
```

# :gear: Production

When you finish dev your project, you can build it with the command below :

```bash
npm run build
```

A `build` folder will be created in your project called `dist`.
In `dist` you can find your `index.html` file and yours `index.js` and `index.css` files in the assets folder.
You can send this folder to your server.
If you are using [Apache](https://httpd.apache.org/) you can create a `.htaccess` file in the `dist` folder with the code below :

```bash
<IfModule mod_rewrite.c>
    Options -MultiViews
    RewriteEngine On
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . index.html [L]
</IfModule>
```

## Add homepage in package.json

In your `package.json` file you can add a `homepage` property to specify the url of your website.

```diff
{
  "name": "portfolioreact",
  "private": true,
  "version": "0.0.0",
  "type": "module",
+ "homepage": "https://[your-website-url]",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  ...
}
```

<!-- # Translate the website

You can use the [i18next](https://www.i18next.com/) library to translate the website.

## Add the i18next library

You can install the library with the command below :

```bash
npm install --legacy-peer-deps i18next --save
```

Then you can create your `i18next.config.js` file in the `src` folder. -->

## :wave: Contributors

- **Vladimir SACCHETTO** _alias_ [@VladimirSacchetto](https://github.com/Vladimir9595)
- **Alexis HENRY** _alias_ [@AlxisHenry](https://github.com/AlxisHenry)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
