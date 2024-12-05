import React from 'react'
import { FaDiscord, FaGithub, FaTwitch } from 'react-icons/fa'
import { FaX, FaXTwitter } from 'react-icons/fa6'
const links=[
  {href:'https://discord.com',icon:<FaDiscord/>},
  {href:'https://x.com/adityapandey78',icon:<FaXTwitter/>},
  {href:'https://github.com/adityapandey78',icon:<FaGithub/>},
  {href:'https://twitch.com',icon:<FaTwitch/>}
]
const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
      <div className='conatainer mx-auto flex flex-col items-center justify-between gap-4 px-8 md:flex-row'>
      <p className='text-center text-sm md:text-left'> ©Zentry 2024. All rights reserved</p>
      <div className='flex justify-center gap-4 md:justify-start'>
        {links.map((links)=>(
          <a key={links} href={links.href} target='_blank' rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white' >
            {links.icon}
          </a>
        ))}
      </div>
      <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'> Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer