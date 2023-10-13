'use client';
import 'src/globals.css'
import 'src/layout.css'
import Laptop from './laptop.jpg'
import Single from '../assests/single.png'
import Double from '../assests/double.png'
import Triple from '../assests/triple.png'
import ID2 from '../assests/ID2.jpg'
import React from "react"
import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import Typed from "react-typed"
import{
FaDribbbleSquare,
FaFacebookSquare,
FaGithubSquare,
FaInstagram,
FaTwitterSquare} from 'react-icons/fa'

export function Home() {

  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <body className="body">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <nav className="w-full text-3xl font-bold text-[#00df9a]">REACT.</nav>
        <ul className='hidden md:flex'>
          <li className="p-4 text-black">Home</li>
          <li className="p-4 text-black">Company</li>
          <li className="p-4 text-black">Resources</li>
          <li className="p-4 text-black">About</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

        </div>
        <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%] left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]"}>
          <nav className="w-full text-3xl font-bold text-[#00df9a] m-4 border">REACT.</nav>
          <ul className=" uppercase p-4">
            <li className="p-4 border-b border-gray-600 text-white">Home</li>
            <li className="p-4 border-b border-gray-600 text-white">Company</li>
            <li className="p-4 border-b border-gray-600 text-white">Resources</li>
            <li className="p-4 text-white">About</li>
          </ul>
        </div>
      </div>
      <section>
        <div className="text-black">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className=" text-[#00df9a] font-bold p-2">Grow with data analytics</p>
            <h1 className="md:text-7x; sm:text-6xl text-4xl font-bold md:py-6">grow with data</h1>
            <div className='flex justify-center items-center'>
              <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast, flexible financing for</p>
              <Typed
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['BTB', 'BTC', 'SASS']}
                typeSpeed={120}
                backSpeed={140}
                loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] rouunded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
          </div>
        </div>
      </section>
      <section className='w-full bg-[#00df9a] py-16 px-4'>
        <div className='max-w-[11240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4'src='./laptop.jpg' alt='/' />
          <div className='flex flex-col justify-center'>
            <p className='font-bold'> DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a elit vitae elit ultricies varius. Sed venenatis feugiat orci. Cras suscipit elementum ex nec fringilla. Nullam nunc neque, elementum nec eros id, ullamcorper luctus risus. Nulla a eleifend ipsum. Integer pharetra blandit tortor id feugiat. Vivamus sollicitudin semper libero non volutpat. Quisque ut eleifend arcu. Ut aliquam lobortis quam convallis elementum. Vivamus condimentum nulla nec risus condimentum, in tempus mauris viverra. Proin est tortor, elementum vel arcu vel, aliquam vehicula sapien.
            </p>
          </div>
          <button className='bg-black text-[#cbd6d3] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white md:mx-0 py-3'>Get Started</button>
        </div>
      </section>
<section>
  <div className='bg-black w-full py-16 text-white px-4'>
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
<div className='lg:col-span-2'>
  <h1 className='md:text4xl sm:text-3xl text-2xl font-bold py-2'>Want tips and tricks to optimize your flow? </h1>
  <p>Sign up for our newsletter to stay up to date.</p>
</div>
<div className='my-4'>
  <div className=''>
    <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter Email'/>
    <button className='bg-[#00df9a] text-[#cbd6d3] w-[200px] rounded-md font-medium my-6 ml-4 px-6 mx-auto py-3 text-black md:mx-0 py-3'>Notify me</button>
  </div>
<p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span> </p>
</div>
    </div>

  </div>
</section>
<section>
  <div className='w-full py-[10rem] px-4 bg-white'>
    <div className='max-w-[1240px mx-auto grid md:grid-cols-3 gap-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
   <img className='w-20 mx-auto mt-[-3rem] bg-white' src='./single.png' alt='/' />
   <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
   <p className='text-center text-4xl font-bold'>$149</p>
   <div className='text-center font-medium'>
    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
    <p className='py-2 border-b mx-8' >1 Granted User</p>
    <p className='py-2 border-b mx-8' >Send up to 2 GB</p>
    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium  my-6 px-6 mx-auto py-3 text-black md:mx-0'>Start Here</button>
   </div>
   </div>
   <div className='w-full bg-[#e2e7e6] shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
   <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src='./double.png' alt='/' />
   <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
   <p className='text-center text-4xl font-bold'>$149</p>
   <div className='text-center font-medium'>
    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
    <p className='py-2 border-b mx-8' >1 Granted User</p>
    <p className='py-2 border-b mx-8' >Send up to 2 GB</p>
    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6  mx-auto md:mx-0 py-3'>Start Here</button>
   </div>
      </div>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
   <img className='w-20 mx-auto mt-[-3rem] bg-white' src='./triple.png' alt='/' />
   <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
   <p className='text-center text-4xl font-bold'>$149</p>
   <div className='text-center font-medium'>
    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
    <p className='py-2 border-b mx-8' >1 Granted User</p>
    <p className='py-2 border-b mx-8' >Send up to 2 GB</p>
    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-black md:mx-0 py-3'>Start Here</button>

   </div>
      </div>
    </div>
  </div>
</section>
<section>
<div className='bg-black max-w-[11240px] mx-auto py-16 px-4 grid lg:grid-cols-3 text-gray-300'>
<div>
  <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
  <p className='py-4'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a elit vitae elit ultricies varius. Sed venenatis feugiat orci. Cras suscipit elementum ex nec fringilla. Nullam nunc neque, elementum nec eros id, ullamcorper luctus risus. Nulla a eleifend ipsum. Integer pharetra blandit tortor id feugiat. Vivamus sollicitudin semper libero non volutpat. Quisque ut eleifend arcu. Ut aliquam lobortis quam convallis elementum. Vivamus condimentum nulla nec risus condimentum, in tempus mauris viverra. Proin est tortor, elementum vel arcu vel, aliquam vehicula sapien.
  </p>
  <div className='flex mdw-[75%] my-6'>
    <FaFacebookSquare size={30}/>
    <FaInstagram size={30} />
    <FaTwitterSquare size={30}/>
    <FaGithubSquare size={30} />
    <FaDribbbleSquare size={30}/>
  </div>
</div>
<div className='lg:col-span-2 flex justify-between mt-6'>
<div>
  <h6 className='font-medium text-gray-400'>Solutions</h6>
  <ul>
    <li className='py-2 text-sm'>Analytics</li>
    <li className='py-2 text-sm'>Marketing</li>
    <li className='py-2 text-sm'>Commerce</li>
    <li className='py-2 text-sm'>Insights</li>
  </ul>
</div>
<div>
  <h6 className='font-medium text-gray-400'>Support</h6>
  <ul>
    <li className='py-2 text-sm'>Pricing</li>
    <li className='py-2 text-sm'>Documentation</li>
    <li className='py-2 text-sm'>Guides</li>
    <li className='py-2 text-sm'>API Status</li>
  </ul>
</div>
<div>
  <h6 className='font-medium text-gray-400'>Company</h6>
  <ul>
    <li className='py-2 text-sm'>About</li>
    <li className='py-2 text-sm'>Blog</li>
    <li className='py-2 text-sm'>Jobs</li>
    <li className='py-2 text-sm'>Press</li>
    <li className='py-2 text-sm'>Careers</li>

  </ul>
</div>
<div>
  <h6 className='font-medium text-gray-400'>Legal</h6>
  <ul>
    <li className='py-2 text-sm'>Claims</li>
    <li className='py-2 text-sm'>Policy</li>
    <li className='py-2 text-sm'>Terms</li>
  </ul>
</div>
</div>
</div>
</section>
    </body>
  );
  }
export default Home