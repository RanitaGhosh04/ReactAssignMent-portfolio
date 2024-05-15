import React from 'react'
import './works.css'

const Works = () => {
  return ( 
   <section id='works'>
    <h2 className='worksTitle'>My Portfolio</h2>
    <span className='worksDesc'>I take pride in paying attention to the</span>
    <div className='workImgs'>
        <img src='' alt='worksImg' className='worksImg'/>
        <img src='' alt='worksImg' className='worksImg'/>
        <img src='' alt='worksImg' className='worksImg'/>
        <img src='' alt='worksImg' className='worksImg'/>
        <img src='' alt='worksImg' className='worksImg'/>    
    </div>
    <button className='workBtn'>See More</button>
   </section>
  )
}

export default Works