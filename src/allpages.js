import React from 'react'
import MyComponent from './porthweb'
import Skills from './skills'
import Projects from './project'
import Contact from './contact'
import Footer from './footer' 

export default function Allpages() {
  return (
    <div>
         <MyComponent/>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Other foreground content */}
      </div>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}
