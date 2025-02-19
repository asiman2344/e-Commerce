import React from 'react'
import InputMask from "react-input-mask";
import './component.css'
import axios from 'axios'
import { useState, useEffect } from 'react';

function modal1({ enterPage, setEnterPage }) {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState(false);

    const handleClickOutside = (e) => {
        if (e.target.classList.contains('modal1-wrapper')) {
            setEnterPage(!enterPage);
            setOtp(false);
        }
    };

    const getPhoneNumber = (e) => {
        let val=e.target.value.trim();
        val = val.replace(/\s+/g, '');
        let val1=val.slice(2,4);
        let val2=val.slice(5,12); 
        setPhone(`+994${val1}${val2}`);              
    }

    const postNumber = () => {
        axios.post('https://oggo.site.az/api/v1/auth/login', {
            phone: phone
        })
        .then(function (response) {
            console.log(response,'alalalalal');
            setOtp(true);
        })
        .catch(function (error) {
            console.log(error);
        });      
    }

    return (
        <div className={`fixed modal1-wrapper top-0 left-0 z-10 w-[100%] h-[100vh] ${enterPage ? '' : 'hidden'}`} onClick={handleClickOutside}>
            {/* modal1 */}
            <div className='modal1 w-[500px] h-[300px] bg-white rounded-3xl absolute z-20'>
                <div className='modal-wrapper flex justify-center items-center h-full rounded-3xl'>
                    <div>
                        <div className='modal1-title text-center text-[20px] font-medium mt-[20px]'><h1 className='text-[30px]'>Kabinetə giriş</h1></div>
                        <div className='modal1-inputgroup w-full mb-[20px]'>
                            <div className='mb-[10px]'><label htmlFor="">Telefon nömrəsi</label></div>
                            <InputMask
                                mask="(099) 999  99  99"
                                placeholder="(0__) ___ __ __"
                                className=" text-[20px] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[480px]"
                                onChange={getPhoneNumber}
                            />
                        </div>
                        <div className='modal1-button w-[480px] mb-[20px]'><button type='button' onClick={postNumber} className='w-full text-center bg-yellow-300 px-[8px] py-[16px] rounded-md'>SMS-kod göndər</button></div>
                    </div>
                </div>
            </div>

            {/* modal2 */}
            <div className={`modal2 w-[500px] h-[300px] bg-white rounded-3xl absolute z-30 ${otp ? '' : 'hidden'}`}>
                <div className='modal-wrapper flex justify-center items-center h-full rounded-3xl'>
                    <div>
                        <div className='modal1-title text-center text-[20px] font-medium mt-[20px]'><h1 className='text-[30px]'>OTP kod</h1></div>
                        <div className='modal1-inputgroup w-full mb-[20px]'>
                            <InputMask
                                mask="9 - 9 - 9 - 9"
                                placeholder="__ __ __ __"
                                className=" text-[20px] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[480px] text-center"
                            />
                        </div>
                        <div className='modal1-button w-[480px] mb-[20px]'><button type='submit' className='w-full text-center bg-yellow-300 px-[8px] py-[16px] rounded-md'>SMS-kod göndər</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default modal1
