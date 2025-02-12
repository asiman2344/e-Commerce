import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import './component.css'
import Subcategory1 from './subCategories/subCategory1.jsx';
import Minimg1 from '../assets/icon1-CgetAt41.png'
import Minimg2 from '../assets/icon2-B4uuJabV.png'
import Minimg3 from '../assets/icon3-D5Uk-mM9.png'
import Minimg4 from '../assets/icon4-DsTyL5Bs.png'
import { Link } from 'react-router-dom';

function CategoriesContainer() {
    const categories = useSelector(state => state.city.categories)
    const [data, setData] = useState({})
    const [position, setPosition] = useState(0)
    const containerRef = useRef(null)
    const [itemName, setItemName] = useState(null);

    const handleData = (item, index) => {
        if (data === item) {
            setData({})
            setPosition(0)
            setItemName(null);
        } else {
            setData(item)
            setPosition(index)
            setItemName(item.name);
        }
    }

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setData({})
            setPosition(0)
            setItemName(null)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className='categories-container relative' ref={containerRef}>
            <div className="categories-wrapper flex flex-wrap justify-center items-center gap-2 px-2 py-2 mb-[60px]">
                {categories.map((item, index) => (
                    <div onClick={() => handleData(item, index)} key={index} className="categoriesCart w-[160px] h-[130px] border border-gray-200 rounded-lg px-3 mb-2 cursor-pointer">
                        <div className='categoriesImg  flex justify-center items-center'>
                            <img className='w-[50%]' src={item.img} alt="" />
                        </div>
                        <div className="categoriesTitle text-center">
                            <h2 className='text-[15px]'>{item.name}</h2>
                            <span className='text-[12px] text-gray-500'>{item.categories.length} alt kategori</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* min category */}
            <div className='min-category w-full'>
                <div className="min-category-wrapper flex justify-between items-center">
                    <div className='min-category-card w-[24%] border border-gray-200 p-[3px] rounded-md cursor-pointer shadow-lg'>
                        <Link><img className='w-[100%]' src={Minimg2} alt="" /></Link>
                    </div>

                    <div className='min-category-card w-[24%] border border-gray-200 p-[3px] rounded-md cursor-pointer shadow-lg'>
                        <Link><img className='w-[100%]' src={Minimg1} alt="" /></Link>
                    </div>

                    <div className='min-category-card w-[24%] border border-gray-200 p-[3px] rounded-md cursor-pointer shadow-lg'>
                        <Link><img className='w-[100%]' src={Minimg3} alt="" /></Link>
                    </div>

                    <div className='min-category-card w-[24%] border border-gray-200 p-[3px] rounded-md cursor-pointer shadow-lg'>
                        <Link><img className='w-[100%]' src={Minimg4} alt="" /></Link>
                    </div>
                </div>
            </div>
            <Subcategory1 data={data} position={position} itemName={itemName} />
        </div>
    )
}

export default CategoriesContainer