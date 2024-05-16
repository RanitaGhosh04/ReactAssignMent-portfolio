import React from 'react'
import './works.css'
import web from '../../assets/web-design.png'

const Works = () => {
  return ( 
   <section id='works'>
    <h2 className='worksTitle'>My Portfolio</h2>
    <span className='worksDesc'>I take pride in paying attention to the</span>
    <div className='workImgs'>
        <img src={web} alt='worksImg' className='worksImg'/>
        <img src={web} alt='worksImg' className='worksImg'/>
        <img src={web} alt='worksImg' className='worksImg'/>
        <img src={web} alt='worksImg' className='worksImg'/>
        <img src={web} alt='worksImg' className='worksImg'/>    
    </div>
    <button className='workBtn'>See More</button>
   </section>
  )
}

export default Works