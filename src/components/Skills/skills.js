import React from 'react'
import './skills.css'
import designer from '../../assets/designer.png'
import iconWeb from '../../assets/icons8-web-64.png'
import webDesign from '../../assets/web-design.png'

const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visully appealing and user friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML,CSS, and JavaScript, as well as design software such as Adobe Photoshop and illustrator.</span>
        <div className='skillBars'>

          <div className='skillBar'>
            <img src={designer} alt='UiDesign' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>UI/UX Design</h2>
              <p>This is demo text, you can write your own content here.</p>
            </div>
          </div>

          <div className='skillBar'>
            <img src={iconWeb} alt='WebDesign' className='skillBarImg'/>
            <div className='skillBarText'> 
              <h2>Website design</h2>
              <p>This demo text can be changed while making the production ready use</p>
            </div>
          </div>

          <div className='skillBar'>
            <img src={webDesign} alt='AppDesign' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>App design</h2>
              <p>You can write text related to mobile app development</p>
            </div>
          </div>

        </div>
    </section>
  )
}

export default skills