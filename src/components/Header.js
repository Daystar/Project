import React from 'react'
import {Link} from 'react-router-dom';
import { FaPlaystation } from 'react-icons/fa'
import { HiPlusSm } from 'react-icons/hi'
import { MdWifi } from 'react-icons/md'
import { ImTrophy } from 'react-icons/im'
import Clock from 'react-live-clock';


const Header =() =>{
    return (
        <header className='pt-10 flex justify-between items-center text-black relative'>
            <Link to ='/' className='pl-16 flex flex-initial ' role='clickable'>
                
                <img  className=' w-12 h-12 rounded-full relative inline-flex bg-purple-500'src='https://randomuser.me/api/portraits/men/51.jpg' alt='userimage' />
                <span className=" flex h-3 w-3">
  <span className="animate-ping absolute h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
  <span className=" relative  rounded-full h-3 w-3 bg-green-500"></span>
</span>
                    <div className='pl-1 '>
                    <h1 className='font-sans text-white'>  andrewsereda</h1>
                       <div className="flex items-start mt-1  ">
                       <div className='text-3xl fill-current text-blue-700'><FaPlaystation/></div>
                       <div className="text-3xl fill-current text-yellow-600"><HiPlusSm/></div>
                    </div>
                    </div>
                    
            </Link>

<div className='flex relative'>
            <svg  className='w-6 h-6  ml-16 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-6 text-white" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
</svg>

<div className="text-2xl fill-current text-white ml-6"><ImTrophy/></div>
</div>

<div className="flex justify-evenly items-center mr-16 ml-16">
<div className="text-xl text-white"><MdWifi /></div><h1 className='text-xl px-3 text-white'><Clock format={'h:mm A'}  /></h1>
</div>
 </header>


    )
};

export default Header
