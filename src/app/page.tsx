import React from 'react'
import Navbar from './components/Navbar'
import Avatar from './components/Avatar';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Services from './services/Services';

const Home = () => {
  return (
    <>
    <div className='video-container'>
      <video autoPlay loop muted playsInline className='video-background'>
        <source src="/background.mp4" type="video/mp4" />
      </video>
    <Navbar />
    <div className='hero'>
      <div className='md:hidden '>
      <Avatar src='/IMG_20240805_193424_381.jpg' alt='profile picture' size={180}/>
      </div>
    <h1><span>My Name is Solomon Tolulope, </span>Fullstack Web Developer based in Nigeria.</h1>
    <p>Welcome to my portfolio! With a passion for web development, I build scalable and very interactive web applications for clients and users.</p>
    <div className='flex mt-4 gap-2'>
    <div>
      <a href="#">
      <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="M12 2.06c-5.5 0-10 4.5-10 10 0 4.94 3.61 9.06 8.33 9.89l.06-.05h-.06v-7.06h-2.5v-2.78h2.5V9.84c0-2.5 1.61-3.89 3.89-3.89.72 0 1.5.11 2.22.22v2.56h-1.28c-1.22 0-1.5.61-1.5 1.39v1.94h2.67l-.44 2.78h-2.22v7.06h-.06l.06.05c4.72-.83 8.33-4.94 8.33-9.89 0-5.5-4.5-10-10-10"></path></svg>
      </a>
    </div>
    <div>
      <a href="#">
      <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008M16.806 6.129a1.078 1.078 0 1 0 0 2.156 1.078 1.078 0 1 0 0-2.156"></path><path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.61 4.61 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 2.99 2.99 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 2.99 2.99 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z"></path></svg>
      </a>
    </div>
    <div>
      <a href="#">
      <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="M13.68 10.62 20.24 3h-1.55L13 9.62 8.45 3H3.19l6.88 10.01L3.19 21h1.55l6.01-6.99 4.8 6.99h5.24l-7.13-10.38Zm-2.13 2.47-.7-1-5.54-7.93H7.7l4.47 6.4.7 1 5.82 8.32H16.3z"></path></svg>
      </a>
    </div>
    <div>
      <a href="#">
      <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"></path></svg>
      </a>
    </div>
    </div>
    <div className='flex flex-col md:flex-row mt-8 mb-8 lg:mb-0 justify-center items-center'>
    <Button className='button rounded-full mb-4 md:mb-0 md:mr-2' ><Link href="#">Hire Me</Link></Button>
    <Button className='button2 rounded-full'>My resume</Button>
    </div>
    </div>
    </div>
    <section id="about">
    <About/>
    </section>
    <section id='portfolio'>
    <Portfolio/>
    </section>
    <section id='services'>
    <Services/>
    </section>
    </>
  )
}

export default Home;
