import React from 'react'
import { Link } from 'react-router-dom'
const Navbar=() => {
    return (
       <div className=' flex relative pl-16 pt-16 '>
       <div className= 'mt-3  mr-5 rounded-tl-2xl  border h-5 w-6 rounded flex  items-center justify-center text-xs text-white  bg-gray-600 bg-opacity-25'>L1</div>
        <Link to=" " className='p-8 py-2 px-8 rounded-full border-2 flex  items-center justify-center mr-3 border-opacity-0 border-white hover:border-opacity-100 hover:bg-gray-600  hover:bg-opacity-50 navIcon'> <h1 className='text-white'>Store</h1></Link>
        <Link to=" " className='p-8 py-2 px-8 rounded-full border-2 flex  items-center justify-center mr-3 border-opacity-0 border-white hover:border-opacity-100  hover:bg-gray-600 hover:bg-opacity-50 navIcon'> <h1 className='text-white'>My Games</h1></Link>
        <Link to=" " className='p-8 py-2 px-8 rounded-full border-2 flex  items-center justify-center mr-3 border-opacity-0 border-white hover:border-opacity-100 hover:bg-gray-600  hover:bg-opacity-50 navIcon'> <h1 className='text-white'>Library</h1></Link>
        <Link  to=" " className='p-8 py-2 px-8 rounded-full border-2 flex  items-center justify-center mr-3 border-opacity-0 border-white hover:border-opacity-100  hover:bg-gray-600 hover:bg-opacity-50 navIcon'> <h1 className='text-white'>Settings</h1></Link>
       
        <div className= ' mt-3 mr-5 rounded-tr-2xl  rounded h-5 w-6 border flex items-center justify-center text-xs text-white  bg-gray-600 bg-opacity-25'>R1</div>
       		

       
       </div>
      
    )
}

export default Navbar