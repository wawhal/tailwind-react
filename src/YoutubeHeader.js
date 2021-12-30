import logo from './logo.svg';
import './App.css';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdMic } from 'react-icons/md';
import { GrApps } from 'react-icons/gr';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosContact } from 'react-icons/io';

function YoutubeHeader() {
  return (
    <div className="header">
      <header>
            
            <nav className='flex flex-row items-center justify-between mx-3' >
              <div className="logo flex items-center m-2">
                <div className=" m-3 text-xl">
                  <FaBars/>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="#" className=" h-6 w-25"/> 
              </div>
              <div className=" ">
                 <from className="Form flex flex-row items-center justify-end h-11 w-auto border-none">
                   <input type="search" id="search" name="search" placeholder='Search' className='w-96 h-11  border-2 px-2 '/>
                    {/* <MdClear  className='w-8'/> */}
                    <button type="button " className='flex flex-row items-center justify-center w-16 h-11  border-2 bg-gray-50' ><AiOutlineSearch className=' h-6 w-7'/></button>
                    <MdMic className='mic m-2 h-11 w-11  rounded-full bg-gray-50 p-2.5'/>
                 </from>
                
              </div>
              <div className='apps flex flex-row items-center justify-between mx-2'>
                  <GrApps className='iconApps mr-1 h-5 w-5'/>
                  <BsThreeDotsVertical className='iconSettings mx-3 h-5 w-5'/>
                  <div className='flex flex-row items-center justify-center border-2 px-1.5 text-blue-500 border-blue-500 rounded'>
                     <IoIosContact className=' h-9 w-9 pr-1'/>
                     <a className='text-sm font-medium'>SING IN</a>
                  </div>
              </div>
            </nav>
      </header> 

    </div>
  );
}

export default YoutubeHeader;