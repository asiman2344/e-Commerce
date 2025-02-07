import React from 'react'
import Truck from '../assets/truck.jpeg'
import Truck2 from '../assets/truck2.jpeg'
import Truck3 from '../assets/truck3.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './component.css';

function cardInfo() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const subSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  return (
    <div>
      <div className='cardInfo-container mt-[80px]'>
        <div className="cardInfo-img-container">
          <div>
            <div className="cardInfo-img-wrapper border border-gray-300 items-center w-[70%] p-[20px] rounded-lg">
              <div className="cardInfo-img-title mb-[20px]">
                <h1 className='text-[25px] font-medium'>Mercedes E 300 de</h1>
              </div>
              <div className="cardInfo-images ">

                <Slider {...settings}>
                  <div className="main-img">
                    <div><img src={Truck} alt="" /></div>
                  </div>

                  <div className="main-img">
                    <div><img src={Truck2} alt="" /></div>
                  </div>

                  <div className="main-img">
                    <div><img src={Truck3} alt="" /></div>
                  </div>
                </Slider>
                <div className='sub-img'>
                  <Slider {...subSettings}>
                    <div className='w-[24%]'><img src={Truck} alt="" /></div>
                    <div className='w-[24%]'><img src={Truck2} alt="" /></div>
                    <div className='w-[24%]'><img src={Truck2} alt="" /></div>
                    <div className='w-[24%]'><img src={Truck3} alt="" /></div>
                  </Slider>
                </div>
              </div>
            </div>
            {/* <div className='card-img-info border border-gray-300 w-[70%] mt-[50px] p-[20px] rounded-lg'>
            <ul>
              <li>kateqoriyalar</li>
              <li>kateqoriyalar</li>
              <li>kateqoriyalar</li>
              <li>kateqoriyalar</li>
              <li>kateqoriyalar</li>
            </ul>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default cardInfo
