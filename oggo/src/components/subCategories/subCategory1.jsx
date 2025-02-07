import React from 'react';
import { useNavigate } from 'react-router-dom';

function SubCategory1({ data, position, itemName }) {
    const navigate = useNavigate();

    const getTopPosition = () => {
        if (position <= 5) return 'top-[150px]';
        if (position > 5 && position <= 11) return 'top-[285px]';
        return 'top-[432px]';
    };

    const handleSubCategoryClick = (subItemName) => {
        navigate(`/subCategory2/${itemName}/${subItemName}`);
    };

    return (data && data.categories && data.categories.length > 0) && (
        <div className={`subcategory-container absolute ${getTopPosition()} bg-white rounded-lg shadow-lg`}>
            <div className="grid grid-cols-4 justify-center items-center gap-2 p-[20px]">
                {data.categories.map((item, index) => (
                    <div key={index} onClick={() => handleSubCategoryClick(item.name)} className='w-[250px] flex justify-between px-[5px] py-[8px] bg-slate-100 rounded-md mx-[10px] cursor-pointer'>
                        <span className='text-[15px]'>{item.name}</span>
                        <span className='text-[11px] bg-[#f3c623] flex justify-center items-center w-[25px] h-[25px] rounded-[50%]'>{item.categories.length}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SubCategory1;