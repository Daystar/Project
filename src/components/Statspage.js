import React, {useContext} from 'react'
import Header from './Header'
import {StateContext} from '../context'
import platinum from './images/platinum.png'
import gold from './images/gold.png'
import silver from './images/silver.png'
import bronze from './images/bronze.png'
import { GiTrophy, GiFireGem } from 'react-icons/gi'
import { FaGem } from 'react-icons/fa'
import { RiRadioButtonLine } from 'react-icons/ri'
import { BsXCircleFill } from 'react-icons/bs'
import { IoGameControllerOutline,IoGameController } from 'react-icons/io5'
import  '../App.css'
import { animationTwo, transitionTwo,transitionThree} from "../Animations"
import {motion} from 'framer-motion'
const Statspage=() => {

const {state}= useContext(StateContext);

console.log(state)

return (
<div className=" overflow-hidden">

<div className=" bg-first-half  h-3/5  bg-center bg-no-repeat bg-cover static top-0 overflow-hidden "> 


<Header /> 
<div className="flex flex-row items-center w-screen  ">
<motion.div  animate={{ scale: 0.8 }}
    transition={transitionTwo}  className='z-10 px-6 pt-20'><img  className='relative object-cover transform rounded-2xl h-60 w-60 z-10' src={state.currentGame.url} alt=""/></motion.div>
<div className='flex flex-row w-3/4 items-center justify-between'> <h1 className='text-white mx-3 text-4xl  font-medium font-sans '>{state.currentGame.title}
<h6 className="text-white  text-lg font-light font-sans  mt-2">{state.currentGame.production}</h6></h1>
<div className="flex flex-row items-center "> <h6 className=" px-8 text-white font-thin font-sans">Time played<h2 className="text-white  text-3xl font-medium font-sans mt-2">{state.currentGame.timePlayed}</h2></h6>
<h6 className="px-8 text-white font-thin font-sans">Progress<h2 className="text-white  text-3xl font-medium font-sans mt-2">{state.currentGame.progress}</h2></h6>
<h6 className="px-8 text-white font-thin font-sans">Storage<h2 className="text-white  text-3xl font-medium font-sans mt-2">{state.currentGame.size}</h2></h6>
</div>
</div>
</div> 
<motion.div className="bg-second-half w-screen h-3/5 bg-center bg-no-repeat bg-cover absolute bottom-0 rounded-t-3xl z-0 overflow-hidden" initial='out' animate='in' exit='out' variants={animationTwo} transition={transitionThree} >    
 
<ul className='inline-block text-white  text-lg font-light pt-10 pl-16 '>
<li className='flex   cursor-pointer items-center justify-around h-10 w-48 mb-3 mt-16 transform rounded-md border border-transparent hover:bg-gray-900   hover:border-opacity-100 hover:border hover:border-blue-600'>Tropies
<div className='w-14  ml-8 '><div className="h-0.5 relative max-w-xl rounded-full overflow-hidden " >
<div className="w-full h-full bg-gray-200 absolute"></div>
<div className="h-full bg-blue-600 absolute" style={{
width: state.currentGame.progress
}}>
</div>
</div>
</div>
</li>
<li className='py-3 flex flex-row  cursor-pointer relative items-center pl-3 h-10 mb-3 w-48 transform rounded-md border border-transparent hover:bg-gray-900   hover:border-opacity-100 hover:border hover:border-blue-600'>
Trending
</li>
<li className='py-3 flex flex-row  cursor-pointer relative items-center pl-3 h-10 mb-3 w-48 border border-transparent transform rounded-md hover:bg-gray-900   hover:border-opacity-100 hover:border hover:border-blue-600'>
Friends
</li>
<li className='py-3 flex flex-row cursor-pointer relative items-center  pl-3 h-10 mb-3 w-48 border border-transparent transform rounded-md hover:bg-gray-900   hover:border-opacity-100 hover:border hover:border-blue-600'>
Events
</li>
<li className='py-3 flex flex-row cursor-pointer relative items-center  pl-3 h-10 mb-3 w-48 border border-transparent transform rounded-md hover:bg-gray-900   hover:border-opacity-100 hover:border hover:border-blue-600'>
Store
</li>               
</ul> 
<div className="inline-flex w-screen overflow-hidden whitespace-nowrap items-center justify-between absolute max-w-7xl">
<div className=" pl-20  mt-8 ">  
<h1 className='text-white  flex items-center  text-lg font-light font-sans'>Progress Bar<h2 className='pl-96'>{state.currentGame.progress}</h2></h1>
<div className="h-0.5 relative max-w-xl rounded-full overflow-hidden">
<div className="w-full h-full bg-gray-200 absolute"></div>
<div className="h-full bg-blue-600 absolute" style={{
width: state.currentGame.progress
}}></div>
</div>
 </div> 
                                        
<div className='flex flex-row items-center  mt-8 mx-32 ' >
<h1 className='text-white flex flex-row items-baseline justify-around px-3'><img className='h-8 w-8' src={platinum} alt="plat"/>{state.currentGame.diamond}</h1> 
<h1 className='text-yellow-400 flex flex-row items-baseline justify-around px-3'><img className='h-8 w-8' src={gold} alt="gold"/>{state.currentGame.gold}</h1> 
<h1 className='text-gray-400 flex flex-row items-baseline justify-around px-3'><img className='h-8 w-8' src={silver} alt="silver"/>{state.currentGame.silver}</h1>
<h1 className='text-yellow-800 flex flex-row items-baseline justify-around px-3'><img className='h-8 w-8' src={bronze} alt="bronze"/>{state.currentGame.bronze}</h1>                       
</div> 

</div> 

<div className="inline-flex absolute pl-20 pt-28 w-3/5 justify-between">
<h1 className='text-gray-400  text-base font-thin font-sans'>Last Trophy<h2 className='text-white pt-1 space-x-8  text-lg font-normal font-sans'>{state.currentGame.lastTropy}
<img className='h-8 w-8 mr-1 inline float-left ' src={bronze} alt="silver"/>
<h3 className='text-white opacity-70 pt-1 text-base font-normal font-sans truncate w-40'>{state.currentGame.lastTropyInfo}</h3>
</h2></h1>  
<h1 className='text-gray-400 text-base font-thin font-sans'>Best earned trophy<h2 className='text-white pt-1  space-x-9 text-lg font-normal font-sans'>Get All the trophies
<img className='h-8 w-8 mr-1 inline float-left ' src={bronze} alt="silver"/>
<h3 className='text-white opacity-70 pt-1 text-base font-normal font-sans truncate w-80'>Obtained all the {state.currentGame.title} trophies</h3>
</h2></h1>  
</div> 

<div className='inline-flex absolute pl-20 pt-56 w-2/3 justify-between'>
<span className='flex items-center w-96 '> 
<img className='h-8 w-8 mr-1 inline float-left ' src={platinum} alt="silver"/> 
<span className="rounded-lg h-12 w-12 mx-4 flex items-center justify-center bg-gray-900 bg-opacity-50 "><GiTrophy className='text-black text-2xl'/>
</span> 
<h1 className='text-white  text-lg font-normal font-sans'>Greatest of All <h2 className='text-white text-base font-thin font-sans'>Obtain all the {state.currentGame.title} trophies</h2></h1>
</span>
<div className='inline-flex items-center'>
<span className='animate-pulse bg-yellow-300  w-3 h-3.5 flex items-center justify-center rounded-2xl relative '> <GiFireGem className='h-8 w-8 stroke-0 stroke-current text-red-700 absolute opacity-100'/>

</span>
<h1 className="mx-3 font-thin text-lg text-white">2.6% Ultra rare</h1>
</div>
</div>



<div className='inline-flex absolute pl-20 pt-80 w-2/3 justify-between'>
<span className='flex items-center w-6/12 '> 
<img className='h-8 w-8 inline float-left ' src={silver} alt="silver"/> 
<span className="rounded-lg h-12 w-12 mx-4 flex items-center justify-center bg-gray-900 bg-opacity-50 "><GiTrophy className='text-black text-2xl'/>
</span> 
<h1 className='text-white  text-lg font-normal font-sans'>{state.currentGame.lastTropy}<h2 className='text-white text-base font-thin font-sans '>{state.currentGame.lastTropyInfo}</h2></h1>
</span>
<div className='inline-flex items-center justify-center'>
<FaGem className='h-6 w-6  fill-current text-green-300  opacity-100 '/>


<h1 className="px-3 font-thin text-lg text-white">51% Common</h1>
</div>
</div>


<div className=' pl-14 flex justify-between items-center top-3/4 pt-12 w-screen absolute'>
<div className='flex flex-row  items-center'>
<span className=' flex flex-row justify-between items-center text-lg fill-current text-white px-3'><BsXCircleFill className='mr-1 '/>Select</span> 
<span className=' flex flex-row justify-between items-center text-lg  fill-current text-white px-3'><RiRadioButtonLine className="transform -rotate-90 mr-1"/>Back</span> 

</div>

<div class="flex items-center rounded-full py-4 px-7  bg-gray-500 bg-opacity-40 text-white btn cursor-pointer"><BsXCircleFill className='mr-4'/>Hover to Start</div>


<div className='flex-row items-center  pr-16'>
<span className='flex flex-row  items-center  fill-current text-white text-2xl'> <IoGameControllerOutline className="mr-3"/>
<IoGameController/></span>
</div>
</div>


</motion.div>
</div>            
</div>


)
}

export default Statspage
