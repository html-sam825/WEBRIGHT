import React from 'react'
import { aboutContent } from '../data/data'
import Button from './Button'


const About = () => {
  return (
    <section className="section" id="about">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
            {/* About content */}
            <div className="md:order-1">
                <p className="subtitle">About us</p>
                <h2 className="mt-2 mb-4 max-w-[460px]">Trusted Payment Solutions Since 2015</h2>
                {aboutContent.map((content)=>(
                    <p className="mb-5" key={content.id}>{content.text}</p>
                ))}
                <Button label='Read More' className='primary-btn mt-8' />
            </div>
            {/* About banner */}
            <figure>
                <img src="/images/about-banner.png" alt="about banner" loading='lazy' className='w-full' />
            </figure>
        </div>
    </section>
  )
}

export default About