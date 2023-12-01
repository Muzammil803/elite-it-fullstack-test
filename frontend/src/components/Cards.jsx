import React from 'react'
import "../styles/cards.css"
import { GiWallet } from "react-icons/gi";
import RateStar from './Rate';
import ModalAddUserData from './ModalAddUserData';
const Cards = ({data}) => {




  return (
    <div className='card p-10   ' >
        <div className='border-b pb-2'>
          <div className='font-semibold text-center text-xl  text-blue-950'>{data?.title}</div>
          <div className='py-4  text-blue-950'>{data?.description}</div>
        </div>
        <div className='flex mt-2 justify-between'>
            <div className='flex space-x-2'><GiWallet className='text-2xl text-blue-950 ' /><span>${data?.price}</span></div>
            <div className=''><ModalAddUserData id={data?._id}/></div>
        </div>
        <div className='w-full flex justify-center mt-12'><button className='px-4 py-2 bg_theme text-white '>Show Details</button></div>
    </div>
  )
}

export default Cards