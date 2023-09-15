import React from 'react'
import GithubIcon from "../../public/images/github-icon.svg"
import LinkedinIcon from "../../public/images/linkedin-icon.svg"
import InstagramIcon from "../../public/images/instagram-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold text-white my-m2'>Hablemos!</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'> 
            {" "}Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Aperiam, officiis nihil nulla temporibus ab aspernatur.
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href={"https://github.com/Juan191101"}> 
                <Image src={GithubIcon} alt={"Github Icon"}/>
                </Link>
                <Link href={"https://www.linkedin.com/in/juan-cruz-ruarte-aa302a255"}> 
                <Image src={LinkedinIcon} alt={"Linkedin Icon"}/>
                </Link>
                <Link href={"https://www.instagram.com/juanruarte_/"}> 
                <Image src={InstagramIcon} alt={"Instagram Icon"}/>
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col '>
                <div className='mb-6'>
                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Tu email</label>
                <input 
                type='email' 
                id='email' 
                required 
                className='bg-[#18191E] border border-[#33353F] placeholder-slate-600 text-gray-100 text-sm rounded-s block w-full p-2'
                placeholder='ejemplo@google.com'
                />
                </div>
                <div className='mb-6'>
                 <label htmlFor="motivo" className='text-white block mb-2 text-sm font-medium'>Motivo</label>
                <input 
                type='text' 
                id='motivo' 
                required 
                className='bg-[#18191E] border border-[#33353F] placeholder-slate-600 text-gray-100 text-sm rounded-s block w-full p-2'
                placeholder='Tu motivo aqui'
                />
                </div>
                <div className='mb-6'>
                 <label htmlFor="mensaje" className='text-white block mb-2 text-sm font-medium'>Mensaje</label>
                <textarea 
                id='mensaje' 
                required 
                className='bg-[#18191E] border border-[#33353F] placeholder-slate-600 text-gray-100 text-sm rounded-s block w-full p-2'
                placeholder='Tu mensaje aqui.'
                />
                </div>
                <button 
                type='submit'
                className='bg-slate-800 to-slate-300 text-white hover:bg-slate-700 py-2.5 px-5 rounded-lg w-full'
                >Enviar mensaje
                </button>
            </form>
        </div>
    </section>
    )
}

export default EmailSection