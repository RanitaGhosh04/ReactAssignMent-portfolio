import React from 'react'
import './intro.css';
import bg from '../../assets/RanitaPortfolio.png'
import { Link } from 'react-scroll';

const intro = () => {
  return (
    <section id='intro'>

        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introText'>I'm <span className='introName'>Ranita</span> <br/>Frontend Developer</span>
            <p className='introPara'>I am a skilled web designer with experience in creating <br/> visually appealing and user friendly websites</p>
            <Link><button className='btn'><img src='' alt='button'/>Hire Me</button></Link>
        </div>
        
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default intro