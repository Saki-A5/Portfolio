import React from 'react'
import Image from 'next/image'

interface AvatarProps {
    src: string
    alt: string
    size?: number    
}

const Avatar = ({src, alt, size = 80}: AvatarProps) => {
  return (
    <div style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        borderColor: 'white'
    }}>
        <Image src={src} alt={alt} width={size} height={size} />
    </div>
  )
}

export default Avatar
