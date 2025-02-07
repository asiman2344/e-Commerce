import React from 'react'
import { Link } from 'react-router-dom'

function sub2({ subCat1 }) {
    return (
        <div className='w-[23%] h-[290px] overflow-y-auto custom-scrollbar px-[20px]'>
            <ul className='w-[100%]'>
                {
                    subCat1.map((item, index) => (
                        <li key={index} className='rounded-sm p-[5px] hover:bg-[#cbe4fa]'>
                            <Link className='text-[18px]'>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default sub2
