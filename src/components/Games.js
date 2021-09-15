import React from 'react'
import { FaDotCircle } from 'react-icons/fa'
import { GiTrophy } from 'react-icons/gi'
import { ImPlay2 } from 'react-icons/im'
import { BsXCircleFill } from 'react-icons/bs'
import { IoGameControllerOutline,IoGameController } from 'react-icons/io5'



const Games=({state})=> {

    return (
      <div className=' mt-auto' >
        <div className='absolute top-2/3 flex flex-col  '>

        <div className=' flex flex-row  pl-16 items-center '>
            <h1 className=' text-white  text-4xl font-medium font-sans '>{state.currentGame && state.currentGame.title}</h1>
            <div className='ml-6 text-3xl fill-current text-white '> <FaDotCircle / >

            </div>
        </div>
      <div className=" flex flex-row justify-between pl-9 items-center my-6 max-w-3xl ">
        <div><h1 className="px-8 text-white font-thin font-sans">Time played<p className="text-white  text-2xl font-medium font-sans mt-2">{state.currentGame.timePlayed}</p></h1></div>
        <div><h1 className="px-8 text-white font-thin font-sans">Progress<p className="text-white  text-2xl font-medium font-sans mt-2">{state.currentGame.progress}</p></h1></div>
        <div >
          <h1 className="px-8 text-white font-thin font-sans">
            Last achievement
            <div className='flex items-center justify-around pr-6 text-2xl fill-current text-white'><GiTrophy/> <p className="text-white  text-2xl font-medium font-sans px-2">
              {state.currentGame.lastTropy}
              </p>
              </div>
              </h1>
              </div>
            </div>
           <div className=' pl-14 flex flex-row    mt-20   w-screen '>
           <div className='flex flex-row  items-center'>
                <div className=' flex flex-row justify-between items-center  fill-current text-white px-3'><BsXCircleFill className='mr-1 '/>Play</div> 
                <div className=' flex flex-row justify-between items-center  fill-current text-white px-3'><ImPlay2 className="transform -rotate-90 mr-1"/>Search</div> 
                <div className='flex flex-row px-3'> <div className='rounded-full py-3 px-1 bg-white mr-1'> </div>
                <h1 className='text-white'>Play</h1> </div>
            </div>
                <div className='flex-row items-center ml-auto pr-16'>
                   <div className='flex flex-row  items-center  fill-current text-white text-xl'> <IoGameControllerOutline className="mr-3"/>
                    <IoGameController/></div>
                </div>
           </div>
        </div>
</div>
       
    );
}
export default Games

