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
      <Button className='ml-auto bg-white' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <img src="/arrow-out-left-square-half.png" alt='close' width={30} height={30}/>
        ) : (
          <img src="/menu-select.png" alt="open" width={30} height={30} />
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
