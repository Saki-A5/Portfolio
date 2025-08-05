"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Avatar from './Avatar'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
    <div className='nav hidden md:flex'>
      <Link href="/" className='logo'>
        <img src="/Tee logo.png" alt="Logo"  />
      </Link>
      <Link href="/" >Home</Link>
      <Link href="#about" >About</Link>
      <Link href="#portfolio" >Portfolio</Link>
      <Link href="#services" >Services</Link>
      <Link href="#contact" >Contact</Link>
      <div className='avatar'>
        <Avatar src='/IMG_20240805_193424_381.jpg' alt='Profile picture'/>
      </div>
    </div>

    <div className='flex items-center gap-2 mt-12 z-50 mr-8 top-4 md:hidden right-4'>
      <Link href="/" className='logo'>
        <img src="/Tee logo.png" alt="Logo"  />
      </Link>
      <Button className='ml-auto' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg  xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill={"currentColor"} viewBox="0 0 24 24"><path d="M9 13h7v-2H9V7l-6 5 6 5z"></path><path d="M19 3h-7v2h7v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path></svg>
        ) : (
          <div className='text-white fill-white' style={{ background: "white"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill={"currentColor"} viewBox="0 0 24 24"><path d="M3 11H14V13H3z"></path>
            <path d="M3 6H17V8H3z"></path><path d="M3 16H17V18H3z"></path><path d="M21 16 21 8 16 12 21 16z"></path></svg>
          </div>
        )}
      </Button>
    </div>

    {isOpen && (
      <div className='absolute top-16 right-0 w-48 text-yellow-400 font-extrabold flex flex-col items-center gap-4 py-4 shadow md:hidden'>
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
        <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    )}
    </div>
  )
}

export default Navbar
