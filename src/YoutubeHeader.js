
import './App.css';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdMic } from 'react-icons/md';
import { GrApps } from 'react-icons/gr';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosContact } from 'react-icons/io';

function YoutubeHeader() {
  return (
    <div className="bg-white stiky h-16 sticky top-0 ">
      <header>
            
            <nav className='flex flex-row items-center justify-between mx-3 ' >
              <div className="logo flex items-center m-2">
         
                <div className=" m-3 text-xl font-extralight">
                  <FaBars/>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="#" className=" h-5 w-24 ml-2"/> 
              </div>
              <div className=" ">
                 <from className="Form flex flex-row items-center justify-end h-11 w-auto border-none">
                   <input type="search" id="search" name="search" placeholder='Search' className='w-6xl h-11 border-gray   border px-2'/>
                    
                    <button type="button " className='flex flex-row items-center justify-center w-16 h-11 border-gray  border bg-gray-50' ><AiOutlineSearch className=' h-6 w-7'/></button>
                    <MdMic className='mic m-2 h-11 w-11  rounded-full bg-yt-genres p-2.5'/>
                 </from>
                
              </div>
              <div className='apps flex flex-row items-center justify-between mx-2'>
                  <GrApps className='iconApps mr-1 h-5 w-5'/>
                  <BsThreeDotsVertical className='iconSettings mx-3 h-5 w-5'/>
                  <div className='flex flex-row items-center justify-center border px-1.5 text-yt-blue border-yt-blue rounded'>
                     <IoIosContact className=' h-9 w-9 pr-1 border-yt-blue'/>
                     <a className='text-sm font-medium border-yt-blue'>SIGN IN</a>
                  </div>
              </div>
            </nav>
      </header> 

    </div>
  );
}

export default YoutubeHeader;