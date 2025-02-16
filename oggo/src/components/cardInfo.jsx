import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faSquare, faCrown, faCircle, faCalendarDays, faEye, faIdCard, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../assets/default-avatar-BX0srjmE.png';
import { useLocation } from 'react-router-dom';
import { useState,useRef } from 'react';

function cardInfo() {
  const location = useLocation();
  const { item } = location.state || {};
  console.log(item);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const carousel = carouselRef.current;
    const startX = e.pageX - carousel.offsetLeft;
    const scrollLeft = carousel.scrollLeft;
    setStartX(startX);
    setScrollLeft(scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const carousel = carouselRef.current;
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Sürükləmə sürəti
    carousel.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };


  return (
    <div>
      <div className='cardInfo-container mt-[80px]'>
        <div className="cardInfo-img-container flex justify-between">
          <div className='w-[69%]'>
            <div className="cardInfo-img-wrapper border border-gray-300 items-center w-[100%] p-[20px] rounded-lg">
              <div className="cardInfo-img-title mb-[20px]">
                <h1 className='text-[25px] font-medium'>{item?.title}</h1>
              </div>
              <div className="cardInfo-images">
                <div 
                  ref={carouselRef}
                  className="carousel-wrapper h-[700px] mb-[20px] flex overflow-x-hidden"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  style={{ 
                    cursor: isDragging ? 'grabbing' : 'grab',
                    userSelect: 'none' 
                  }}
                >
                  {item?.images?.map((img, index) => (
                    <div 
                      className='flex-shrink-0 w-[100%] h-full' 
                      key={index}
                    >
                      <img 
                        className='w-full h-full object-contain' 
                        src={`https://oggo.site.az/uploads/${img.path}`} 
                        alt="" 
                        draggable="false" 
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
            <div className='card-img-info border border-gray-300 w-[100%] mt-[50px] p-[20px] rounded-lg'>
              <ul>
                <li>kateqoriyalar</li>
                <li>kateqoriyalar</li>
                <li>kateqoriyalar</li>
                <li>kateqoriyalar</li>
                <li>kateqoriyalar</li>
              </ul>
            </div>
          </div>

          <div className='recommendation w-[29%]'>
            <div className='support-recommendation'>
              <div className='recommendation-card flex border border-gray-300 p-[15px] rounded-md mb-[10px]'>
                <div className='recommendation-card-info w-[50%]'>
                  <div className='flex items-center'>
                    <h4 className='mr-[10px] text-[1.1rem]'>irəli çək</h4>
                    <FontAwesomeIcon className='text-green-400' icon={faArrowUp} />
                  </div>
                  <p className='text-[12px] text-[#666]'>Axtarış nəticələrində birinci yere qaldırılması</p>
                </div>
                <div className='recommendation-card-price w-[50%] flex justify-end items-center'>
                  <button className='bg-blue-500 text-white p-2 rounded-md'>1,00 AZN-dən</button>
                </div>
              </div>

              <div className='recommendation-card flex border border-gray-300 p-[15px] rounded-md mb-[10px]'>
                <div className='recommendation-card-info w-[50%]'>
                  <div className='flex items-center'>
                    <h4 className='mr-[10px] text-[1.1rem]'>Vip</h4>
                    <FontAwesomeIcon className='text-[#ff4409]' icon={faSquare} />
                  </div>
                  <p className='text-[12px] text-[#666] mb-[10px]'>Axtarış nəticələrində birinci yere qaldırılması</p>
                  <button className='bg-[#ff4409] text-white py-[8px] px-[16px] rounded-md text-[12px]'>+ Hər gün irəli çək</button>
                </div>
                <div className='recommendation-card-price w-[50%] flex justify-end items-center'>
                  <button className='bg-blue-500 text-white p-2 rounded-md'>6,00 AZN-dən</button>
                </div>
              </div>

              <div className='recommendation-card flex border border-gray-300 p-[15px] rounded-md mb-[10px]'>
                <div className='recommendation-card-info w-[50%]'>
                  <div className='flex items-center'>
                    <h4 className='mr-[10px] text-[1.1rem]'>Premium Elan</h4>
                    <FontAwesomeIcon className='text-[#ffa724]' icon={faCrown} />
                  </div>
                  <p className='text-[12px] text-[#666] mb-[10px]'>Axtarış nəticələrində birinci yere qaldırılması  və əsas səhifədə göstərilməsi</p>
                  <button className='bg-[#ffa724] text-white py-[8px] px-[16px] rounded-md text-[12px]'>+ Hər gün irəli çək + VİP</button>
                </div>
                <div className='recommendation-card-price w-[50%] flex justify-end items-center'>
                  <button className='bg-blue-500 text-white p-2 rounded-md'>15,00 AZN-dən</button>
                </div>
              </div>

              <div className='recommendation-person p-[15px] border border-gray-300 rounded-md'>
                <div className='recommendation-person-title flex justify-between items-center mb-[20px]'>
                  <span className='text-[20px] font-semibold'>{item?.price} AZN</span>
                  <span className='text-[13px]'><FontAwesomeIcon className='text-red-600' icon={faCircle} /> Offline</span>
                </div>

                <div className='recommendation-person-avatar flex justify-start items-center w-[70%] mb-[20px]'>
                  <div className='recommendation-img w-[100%] mr-[20px]'><img className='w-[100%]' src={Avatar} alt="" /></div>
                  <span className='text-[24px] font-semibold'>{item?.user?.fullname}</span>
                </div>

                <div className='recommendation-person-info'>
                  <div className='recommendation-person-date text-[18px] p-[10px] border border-gray-300 rounded-md mb-[5px]'>
                    <FontAwesomeIcon className='mr-[10px]' icon={faCalendarDays} /><span>14 January 2025</span>
                  </div>
                  <div className='recommendation-person-date text-[18px] p-[10px] border border-gray-300 rounded-md mb-[5px]'>
                    <FontAwesomeIcon className='mr-[10px]' icon={faEye} /><span>177 baxış</span>
                  </div>
                  <div className='recommendation-person-date text-[18px] p-[10px] border border-gray-300 rounded-md mb-[5px]'>
                    <FontAwesomeIcon className='mr-[10px]' icon={faIdCard} /> <span>Elan kodu:{item?.user?.id}</span>
                  </div>
                </div>

                <div className='recommendation-person-buttons flex justify-between items-center p-[10px]'>
                  <div className='w-[49%]'>
                    <button className='bg-[#10375c] py-[6px] px-[12px] w-[100%] rounded-sm'><FontAwesomeIcon className='text-white mr-[5px]' icon={faPaperPlane} /><span className='text-white'>Mesaj yaz</span></button>
                  </div>

                  <div className='w-[49%]'>
                    <button className='bg-[#f3c623] py-[6px] px-[12px] w-[100%] rounded-sm'><FontAwesomeIcon icon={faPhone} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cardInfo;