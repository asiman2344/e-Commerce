import React from 'react'
import InputMask from "react-input-mask";
import './component.css'

function modal1() {
    return (
        <div className='fixed modal1-wrapper top-0 left-0 z-10 w-[100%] h-[100vh] hidden'>
            <div className='modal1 w-[500px] h-[300px] bg-white rounded-3xl mt-[350px] ml-[700px]'>
                <div className='modal-wrapper flex justify-center items-center h-full rounded-3xl'>
                    <div>
                        <div className='modal1-title text-center text-[20px] font-medium mt-[20px]'><h1 className='text-[30px]'>Kabinetə giriş</h1></div>
                        <div className='modal1-inputgroup w-full mb-[20px]'>
                            <div className='mb-[10px]'><label htmlFor="">Telefon nömrəsi</label></div>
                            <InputMask
                                mask="(099) 999  99  99"
                                // value={phone}
                                // onChange={handleChange}
                                placeholder="(0__) ___ __ __"
                                className=" text-[20px] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[480px]"
                            />
                        </div>

                        <div className='modal1-button w-[480px] mb-[20px]'><button className='w-full text-center bg-yellow-300 px-[8px] py-[16px] rounded-md'>SMS-kod göndər</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default modal1
