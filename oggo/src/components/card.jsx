import React from 'react'
import Truck from '../assets/truck.jpeg'
import { useNavigate } from 'react-router-dom'

function card() {

    const navigate = useNavigate();

    const handleCard = () => {
        navigate('/card')
    }


    return (
        <div className='card-container mt-[60px]'>
            <div className="card-wrapper bg-gray-200 p-4 rounded-2xl">
                <div className="card-wrapper-title mb-[20px]">
                    <h1 className='text-[28px] font-medium'>Premium Elanlar</h1>
                </div>
                <div className='card-main grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <div onClick={handleCard} className="card w-[250px] cursor-pointer">
                        <div className='card-img w-[100%]'>
                            <img className='w-[100%]' src={Truck} alt="" />
                        </div>
                        <div className='card-info bg-white px-[10px] py-[10px]'>
                            <p className='card-title text-[20px] font-medium mb-[10px]'>Mercedes E 300 de</p>
                            <div><span className='card-price text-[16px] font-normal'>30000</span></div>
                        </div>
                    </div>

                    <div className="card w-[250px] cursor-pointer">
                        <div className='card-img w-[100%]'>
                            <img className='w-[100%]' src={Truck} alt="" />
                        </div>
                        <div className='card-info bg-white px-[10px] py-[10px]'>
                            <p className='card-title text-[20px] font-medium mb-[10px]'>Mercedes E 300 de</p>
                            <div><span className='card-price text-[16px] font-normal'>30000</span></div>
                        </div>
                    </div>

                    <div className="card w-[250px] cursor-pointer">
                        <div className='card-img w-[100%]'>
                            <img className='w-[100%]' src={Truck} alt="" />
                        </div>
                        <div className='card-info bg-white px-[10px] py-[10px]'>
                            <p className='card-title text-[20px] font-medium mb-[10px]'>Mercedes E 300 de</p>
                            <div><span className='card-price text-[16px] font-normal'>30000</span></div>
                        </div>
                    </div>

                    <div className="card w-[250px] cursor-pointer">
                        <div className='card-img w-[100%]'>
                            <img className='w-[100%]' src={Truck} alt="" />
                        </div>
                        <div className='card-info bg-white px-[10px] py-[10px]'>
                            <p className='card-title text-[20px] font-medium mb-[10px]'>Mercedes E 300 de</p>
                            <div><span className='card-price text-[16px] font-normal'>30000</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card
