import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contactPage'>

        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies.Some of the notable conpanies I have worked with includes.
            </p>
            <div className='clientImgs'>
                <img src='' alt='clientImg' className='clientImg'/>
                <img src='' alt='clientImg' className='clientImg'/>
                <img src='' alt='clientImg' className='clientImg'/>
                <img src='' alt='clientImg' className='clientImg'/>
            </div>
        </div>

        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to disccuss any work opportunities</span>
            <form action='' className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src='' alt='fb' className='link'/>
                    <img src='' alt='X' className='link'/>
                    <img src='' alt='Yt' className='link'/>
                    <img src='' alt='Ig' className='link'/>
                </div>
            </form>
        </div>

    </section>
  )
}

export default Contact