import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './component.css';
import axios from 'axios';

function card() {
    const [premium, setPremium] = useState(null);
    const [vip, setVip] = useState(null);
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const handleCard = (item) => {
        navigate('/card', { state: { item } });
    };

    const fetchData = async () => {
        try {
            const premiumResponse = await axios.get('https://oggo.site.az/api/v1/posts/sponsored/premium?page=1');
            setPremium(premiumResponse.data.data);

            const vipResponse = await axios.get('https://oggo.site.az/api/v1/posts/sponsored/vip?page=1');
            setVip(vipResponse.data.data);

            const response = await axios.get('https://oggo.site.az/api/v1/posts?page=1');
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='card-container mt-[60px]'>
            <div className="card-wrapper bg-gray-200 p-4 rounded-2xl mb-[50px]">
                <div className="card-wrapper-title mb-[20px]">
                    <h1 className='text-[28px] font-medium'>Premium Elanlar</h1>
                </div>
                <div className='card-main grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {premium && premium.map((item, index) => (
                        <div key={index} onClick={() => handleCard(item)} className="card w-[248px] h-[260px] cursor-pointer">
                            <div className='card-img w-[100%] h-[170px]'>
                                <img className='w-[100%] h-[100%] object-cover' src={`https://oggo.site.az/uploads/${item.images[0].path}`} alt="" />
                            </div>
                            <div className='card-info bg-white px-[10px] py-[10px]'>
                                <p className='card-title text-[20px] font-medium mb-[10px]'>{item.title}</p>
                                <div><span className='card-price text-[16px] font-normal'>{item.price} Azn</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card-wrapper-vip bg-gray-200 p-4 rounded-2xl mb-[50px]">
                <div className="card-wrapper-title mb-[20px]">
                    <h1 className='text-[28px] font-medium'>VIP Elanlar</h1>
                </div>
                <div className='card-main grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {vip && vip.map((item, index) => (
                        <div key={index} onClick={() => handleCard(item)} className="card w-[248px] h-[260px] cursor-pointer">
                            <div className='card-img w-[100%] h-[170px]'>
                                <img className='w-[100%] h-[100%] object-cover' src={`https://oggo.site.az/uploads/${item.images[0].path}`} alt="" />
                            </div>
                            <div className='card-info bg-white px-[10px] py-[10px]'>
                                <p className='card-title text-[20px] font-medium mb-[10px]'>{item.title}</p>
                                <div><span className='card-price text-[16px] font-normal'>{item.price} AZN</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card-wrapper-vip bg-gray-200 p-4 rounded-2xl mb-[50px]">
                <div className="card-wrapper-title mb-[20px]">
                    <h1 className='text-[28px] font-medium'>Elanlar</h1>
                </div>
                <div className='card-main grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {data && data.map((item, index) => (
                        <div key={index} onClick={() => handleCard(item)} className="card w-[248px] h-[260px] cursor-pointer">
                            <div className='card-img w-[100%] h-[170px]'>
                                <img className='w-[100%] h-[100%] object-cover' src={`https://oggo.site.az/uploads/${item.images[0].path}`} alt="" />
                            </div>
                            <div className='card-info bg-white px-[10px] py-[10px]'>
                                <p className='card-title text-[20px] font-medium mb-[10px]'>{item.title}</p>
                                <div><span className='card-price text-[16px] font-normal'>{item.price} AZN</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default card;