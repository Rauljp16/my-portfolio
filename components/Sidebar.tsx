/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function Sidebar() {
    return (
        <div className='fixed w-full flex justify-center bottom-[-58px] left-0'>
            <ul className='flex justify-center cursor-pointer bg-zinc-800 gap-10 md:gap-16 pl-5 pr-7 pt-4 pb-14  rounded-full shadow-[0px_-2px_5px_#ac8661] hover:shadow-[0px_-2px_14px_#ac8661] shadow-goldLight/80'>
                <li className='mb-2 w-8 h-8'><Link href="/"><img src="svg/home.svg" alt="icono home" /></Link></li>
                <li className='mb-2 w-8 h-8'><Link href="/"><img src="svg/about.svg" alt="icono about" /></Link></li>
                <li className='mb-2 w-8 h-8'><Link href="/"><img src="svg/projects.svg" alt="icono projects" /></Link></li>
                <li className='mb-2 w-8 h-8'><Link href="/"><img src="svg/contact.svg" alt="icono contact" /></Link></li>
            </ul>
        </div>
    )
}

export default Sidebar