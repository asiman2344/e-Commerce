import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faPlus, faArrowRightToBracket, faGlobe, faPhone, faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom'
import Select from './antdesign/select.jsx';
import { useState } from 'react';
import './component.css'
import Catalog from './catalog.jsx'

function navbar({ toggleBlur }) {
    const [show, setShow] = useState(false)
    const [handleCatalog, sethandleCatalog] = useState(false)
    // const [phone, setPhone] = useState('');


    const showAlert = () => {
        setShow(!show)
        toggleBlur();
    }

    const showCatalog = () => {
        sethandleCatalog(!handleCatalog)
        toggleBlur();
    }

    // const handleChange = (e) => {
    //     setPhone(e.target.value);
    //     console.log(e.target.value);

    // };

    return (
        <div className='relative'>
            <div className='navbar p-[10px] fixed top-0 left-0 w-full z-50 bg-white'>
                <nav className='w-[80%] m-auto'>
                    <ul className='navbar-list flex justify-center items-center'>
                        <div className='bar'>
                            <li className='mr-[2px]'><button onClick={showAlert} className='bg-yellow-300 flex items-center rounded-sm'><FontAwesomeIcon className='text-[22px] px-[8px] py-[4px]' icon={faBars} /></button></li>
                            <li className='mx-[10px] bg-yellow-300 p-[1.5px] flex items-center rounded-sm'><Link className='text-[22px]' to='/'>Oggo.az</Link></li>
                        </div>

                        <div className='bar1 w-full'>
                            <li className='mx-[10px] bg-yellow-300 p-[1.5px] flex items-center rounded-sm'><Link className='text-[22px]' to='/'>Oggo.az</Link></li>
                            <li className='mr-[2px]'><button onClick={showAlert} className='bg-yellow-300 flex items-center rounded-sm'><FontAwesomeIcon className='text-[22px] px-[8px] py-[4px]' icon={faBars} /></button></li>
                        </div>

                        <div className='bar2 flex items-center mx-[60px]'>
                            <li onClick={showCatalog} className='flex items-center bg-yellow-300 text-[22px] px-[8px] py-[4px] rounded-sm cursor-pointer mx-[10px]'><button className='mr-[10px]'><FontAwesomeIcon icon={faBars} /></button> Katalog</li>
                            <div className='flex items-center border text-[10px] px-[5px] py-[5px] border-zinc-300 rounded-sm'>
                                <div className='mr-[10px]'><FontAwesomeIcon className='text-gray-400 text-[20px]' icon={faMagnifyingGlass} /></div>
                                <div><input className='outline-none w-[300px] h-[28px] text-[15px]' type="text" placeholder='Məhsul və ya xidmət axtarın' /></div>
                            </div>
                            <li className='flex items-center mx-[10px]'>
                                <Select />
                            </li>
                            <li>
                                <button className='px-[8px] py-[4px] bg-yellow-300 rounded-sm text-[21px]'>Axtar</button>
                            </li>
                        </div>

                        {/* <div className={`favorites mr-[10px] ${showFavorites ? 'block' : 'hidden'}`}>
                            <button className='px-[8px] py-[4px] bg-yellow-300 rounded-sm text-[21px]'>
                                <FontAwesomeIcon className='bg-transparent' icon={faHeart} />
                            </button>
                        </div> */}

                        <div>
                            <li className='bar3 flex items-center'>
                                <NavLink to='/advertisement' className='px-[8px] py-[4px] bg-yellow-300 rounded-sm text-[21px] mr-[10px]'><span><FontAwesomeIcon icon={faPlus} /></span>Yeni Elan</NavLink>
                                <button className='px-[8px] py-[4px] bg-yellow-300 rounded-sm text-[21px]'><span><FontAwesomeIcon icon={faArrowRightToBracket} /></span>Daxil ol</button>
                            </li>
                        </div>

                    </ul>
                </nav>
            </div>

            <div className={`alert bg-white px-[20px] pt-[42px] pb-[60px] mt-[5px] z-[1] w-full ${show ? 'show' : ''}`}>
                <div className='alert-content flex items-center w-[60%] mx-auto justify-between'>
                    <div className='flex items-top justify-between'>
                        <ul className="wrapper1 mr-[20px]">
                            <li><Link className='text-[16px] text-[#10375c] '>Mağazalar</Link></li>
                            <li><Link className='text-[16px] text-[#10375c] '>Yardım</Link></li>
                        </ul>
                        <ul className="wrapper2">
                            <li><Link className='text-[16px] text-[#10375c] '>Layihə haqqında</Link></li>
                            <li><Link className='text-[16px] text-[#10375c] '>İstifadəçi razılaşması</Link></li>
                            <li><Link className='text-[16px] text-[#10375c] '>Məxfilik siyasəti</Link></li>
                            <li><Link className='text-[16px] text-[#10375c] '>Reklam yerləşdirin</Link></li>
                        </ul>
                    </div>

                    <div className=''>
                        <div className='flex items-center justify-center mb-[10px]'><p className='mr-[10px] text-[16px] text-[#10375c]'>Azərbaycan</p> <FontAwesomeIcon className='text-[16px] text-[#10375c]' icon={faGlobe} /></div>
                        <div className='bg-yellow-50 p-[5px]'>
                            <p className='text-[10px] text-start text-[#10375c]'>Bizimlə əlaqə</p>
                            <p className='text-[10px] text-[#10375c]'><FontAwesomeIcon className='mr-[5px] text-[#10375c]' icon={faPhone} /> 099 669 0990</p>
                            <p className='text-[10px] text-[#10375c] text-end'>info@info.az</p>
                        </div>
                    </div>
                </div>
            </div>

            <Catalog handleCatalog={handleCatalog} />
        </div>
    )
}

export default navbar

