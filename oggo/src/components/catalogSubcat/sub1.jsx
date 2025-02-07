import React from 'react'
import { Link } from 'react-router-dom'

function sub1({subcat}) {
  return (
    <ul className='w-[23%] h-[290px] overflow-y-auto custom-scrollbar'>
        {
            subcat.map((item,index)=>(
                <li key={index} className='rounded-sm p-[5px] hover:bg-[#cbe4fa]'>
                    <Link className='text-[11px]'>{item.name}</Link>
                </li>
            ))
        }
    </ul>
  )
}

export default sub1
