import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <main className='bg-purple-300 h-[calc(100vh-60px)]'>
      <section className='grid grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='flex items-center mt-50 gap-5 flex-col'>
          <h1 className='font-extrabold text-2xl text-black'>The Best URL shortener in the Market</h1>
          <p className='w-[70%] text-justify text-md text-gray-700 font-bold'>We are the most straight forward URL shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand you needs and hence we have created this URL shortener.</p>
          <li className='flex gap-2'>
              <Link href="/shorten"><button className='rounded-lg cursor-pointer bg-purple-500 shadow-lg p-2 hover:bg-purple-400 transition-bg duration-700'>Try Now</button></Link>
              <Link href="/github"><button className='rounded-lg cursor-pointer bg-purple-500 shadow-lg p-2 hover:bg-purple-400 transition-bg duration-700'>GitHub</button></Link>
          </li>
        </div>
        <div className='relative flex justify-start'>
          <Image alt="img" src={"/vector.jpg"} fill={true}/>
        </div>
      </section>
    </main>
  )
}

export default page
