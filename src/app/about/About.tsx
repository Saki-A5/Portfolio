"use client"
import React, { useEffect, useState } from 'react'

const About= () => {
  const words = ["a software developer", "your Go-To"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const[displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typeSpeed = 150;

    if (isDeleting) {
      typeSpeed = 80;
    }
    const handleTyping = () => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayText(currentWord.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText (currentWord.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000)
        return;
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return
      }
    }

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, 
[charIndex, isDeleting, currentWordIndex])


  return (
    <div className="about mb-16">
      <h2 className='text-center mt-12 font-extrabold text-3xl'>About Me</h2>
      <p className='text-center'>my Experience</p>
      <div>
          <div className='font-extrabold ab pl-16 pt-8 text-2xl pr-8 hidden lg:block'>
            <h1>Remember Me?</h1>
            <p>I'm<span className='change text-2xl'> {displayText}</span></p>
          </div>
        <div>
        <div className='flex flex-col items-center mt-16 md:flex-row md:gap-5 md:justify-center'>
          <div className='about2 rounded-2xl text-center'>
            <img src="/medal-star-alt-2.png" alt="experience" className='m-auto pt-8'/>
            <h1 className='font-bold '>Experience</h1>
            <p>4+ years</p>
            <p className='pb-8'>Fullstack development</p>
          </div>
          <div className='about2 mt-8 rounded-2xl text-center md:mt-0'>
            <img src="/education (1).png" alt="education" className='m-auto pt-8'/>
            <h1 className='font-bold'>Education</h1>
            <p>B.Sc Bachelors Degree</p>
            <p className='pb-8'>Diplomat in Fullstack devlopment</p>
          </div>
        </div>
        <div className='flex flex-col items-center mt-8 md:flex-row md:gap-5 md:justify-center'>
          <div className='about3 rounded-2xl '>
            <h1 className='font-bold pt-2 text-center'>Frontend Development</h1>
            <ul className='grid grid-cols-2 gap-4 pt-8 pb-4 flex flex-col'>
              <li className='text-center justify-center items-center flex flex-row'><img src="/check-circle.png" alt="list" className='mr-2'/><p>HTML</p></li>
              <li className='text-center justify-center items-center flex mr-10'><img src="/check-circle.png" alt="list" className='mr-2'/><p>CSS</p></li>
              <li className='text-center justify-center items-center flex ml-6'><img src="/check-circle.png" alt="list" className='mr-2'/><p>Typescript</p></li>
              <li className='text-center justify-center items-center flex ml-4 mr-8'><img src="/check-circle.png" alt="list" className='mr-2'/><p>Next JS</p></li>
              <li className='text-center justify-center items-center flex ml-1'><img src="/check-circle.png" alt="list" className='mr-2'/><p>Shadcn</p></li>
              <li className='text-center justify-center items-center flex ml-10 mr-10'><img src="/check-circle.png" alt="list" className='mr-2'/><p>Javascript</p></li>
            </ul>
          </div>
          <div className='about3 mt-8 rounded-2xl text-center md:mt-0'>
            <h1 className='font-bold pt-2'>Backend Development</h1>
            <ul className='grid grid-cols-2 gap-4 pt-8 pb-16 flex flex-col'>
              <li className='text-center justify-center items-center flex flex-row ml-4'><img src="/check-circle.png" alt="list" className='mr-2'/><p>Express JS</p></li>
              <li className='text-center justify-center items-center flex ml-2'><img src="/check-circle.png" alt="list" className='mr-2'/><p>Mongo DB</p></li>
              <li className='text-center justify-center items-center flex'><img src="/check-circle.png" alt="list" className='mr-2'/><p>Node JS</p></li>
              <li className='text-center justify-center items-center flex mr-12'><img src="/check-circle.png" alt="list" className='mr-2'/><p>Git</p></li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About;
