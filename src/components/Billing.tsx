import React from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { IoPrintOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Billing = () => {
  return (
    <div className='rounded-lg bg-whites'>
      <header className='flex flex-row rounded-lg justify-between bg-whites py-3 px-3'>
        <div className='flex flex-row justify-center gap-4'>
        <span className='text-center font-bold text-xl flex items-center'>Bills</span>
        <div className="bg-grays py-2 px-4 rounded-lg flex items-center gap-2">
              <label htmlFor="search">
                <FaSearch/>
              </label>
              <input className='bg-transparent w-52' type="text" placeholder='Search or type a command' />
          </div>
        </div>
        <button className='px-3 py-2 border-grays border-2 rounded-lg hover:bg-accent hover:text-white'>Export Report</button>
      </header>

<div className='w-full flex flex-col'>
  <div className='bg-graysmall w-full flex'>
    <div className='w-1/6 py-2 text-center'>Date and time</div>
    <div className='w-1/6 py-2 text-center'>Phone number</div>
    <div className='w-1/6 py-2 text-center'>Total Purchase</div>
    <div className='w-1/6 py-2 text-center'>Discount</div>
    <div className='w-1/6 py-2 text-center'>Accountant</div>
    <div className='w-1/6 py-2 text-center'>Actions</div>
  </div>

    <div className='flex items-center border-2 border-grays'>
      <div className="w-1/6 py-2 text-center">11:45 | 4 June, 2024</div>
      <div className="w-1/6 py-2 text-center">(671) 555-0110</div>
      <div className="w-1/6 py-2 text-center">231</div>
      <div className="w-1/6 py-2 text-center">12% off</div>
      <div className="w-1/6 py-2 text-center">Serenity</div>
      <div className='flex flex-col md:flex-row justify-center items-center w-1/6 gap-2'>
        <button className="group">
          <IoEyeOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <CiEdit className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <IoPrintOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
      </div>
    </div>
    <div className='flex items-center border-2 border-grays'>
      <div className="w-1/6 py-2 text-center">11:45 | 4 June, 2024</div>
      <div className="w-1/6 py-2 text-center">(671) 555-0110</div>
      <div className="w-1/6 py-2 text-center">231</div>
      <div className="w-1/6 py-2 text-center">12% off</div>
      <div className="w-1/6 py-2 text-center">Serenity</div>
      <div className='flex flex-col md:flex-row justify-center items-center w-1/6 gap-2'>
        <button className="group">
          <IoEyeOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <CiEdit className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <IoPrintOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
      </div>
    </div>
    <div className='flex items-center border-2 border-grays'>
      <div className="w-1/6 py-2 text-center">11:45 | 4 June, 2024</div>
      <div className="w-1/6 py-2 text-center">(671) 555-0110</div>
      <div className="w-1/6 py-2 text-center">231</div>
      <div className="w-1/6 py-2 text-center">12% off</div>
      <div className="w-1/6 py-2 text-center">Serenity</div>
      <div className='flex flex-col md:flex-row justify-center items-center w-1/6 gap-2'>
        <button className="group">
          <IoEyeOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <CiEdit className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <IoPrintOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
      </div>
    </div>
    <div className='flex items-center border-2 border-grays'>
      <div className="w-1/6 py-2 text-center">11:45 | 4 June, 2024</div>
      <div className="w-1/6 py-2 text-center">(671) 555-0110</div>
      <div className="w-1/6 py-2 text-center">231</div>
      <div className="w-1/6 py-2 text-center">12% off</div>
      <div className="w-1/6 py-2 text-center">Serenity</div>
      <div className='flex flex-col md:flex-row justify-center items-center w-1/6 gap-2'>
        <button className="group">
          <IoEyeOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <CiEdit className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <IoPrintOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
      </div>
    </div>
    <div className='flex items-center border-2 border-grays'>
      <div className="w-1/6 py-2 text-center">11:45 | 4 June, 2024</div>
      <div className="w-1/6 py-2 text-center">(671) 555-0110</div>
      <div className="w-1/6 py-2 text-center">231</div>
      <div className="w-1/6 py-2 text-center">12% off</div>
      <div className="w-1/6 py-2 text-center">Serenity</div>
      <div className='flex flex-col md:flex-row justify-center items-center w-1/6 gap-2'>
        <button className="group">
          <IoEyeOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <CiEdit className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <IoPrintOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
      </div>
    </div>
    <div className='flex items-center border-2 border-grays'>
      <div className="w-1/6 py-2 text-center">11:45 | 4 June, 2024</div>
      <div className="w-1/6 py-2 text-center">(671) 555-0110</div>
      <div className="w-1/6 py-2 text-center">231</div>
      <div className="w-1/6 py-2 text-center">12% off</div>
      <div className="w-1/6 py-2 text-center">Serenity</div>
      <div className='flex flex-col md:flex-row justify-center items-center w-1/6 gap-2'>
        <button className="group">
          <IoEyeOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <CiEdit className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <IoPrintOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
      </div>
    </div>
    <div className='flex items-center border-2 border-grays'>
      <div className="w-1/6 py-2 text-center">11:45 | 4 June, 2024</div>
      <div className="w-1/6 py-2 text-center">(671) 555-0110</div>
      <div className="w-1/6 py-2 text-center">231</div>
      <div className="w-1/6 py-2 text-center">12% off</div>
      <div className="w-1/6 py-2 text-center">Serenity</div>
      <div className='flex flex-col md:flex-row justify-center items-center w-1/6 gap-2'>
        <button className="group">
          <IoEyeOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <CiEdit className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
        <button className="group">
          <IoPrintOutline className='group-hover:text-black w-7 h-7 text-gray-500' />
        </button>
      </div>
    </div>

    

</div>



    </div>
  )
}

export default Billing
