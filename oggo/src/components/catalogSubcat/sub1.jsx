import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function sub1({ subcat, onSubCatChange }) {
  const [subcat1, setSubcat1] = useState([]);

  const showSubCategories1 = (e) => {
    setSubcat1(e.categories);
  };

  useEffect(() => {
    onSubCatChange(subcat1);
  }, [subcat1, onSubCatChange]);

  return (
    <div className='w-[23%] h-[290px] overflow-y-auto custom-scrollbar px-[20px]'>
      <ul className='w-[100%]'>
        {
          subcat.map((item, index) => (
            <li key={index} className='rounded-sm p-[5px] hover:bg-[#cbe4fa]' onMouseEnter={() => showSubCategories1(item)}>
              <Link className='text-[18px]'>{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default sub1;