import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

function SubCategory2() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { itemName, subItemName } = useParams();
  const data = useSelector(state => state.city.categories)
  const [itemName1, setItemName1] = useState(itemName)

  const showInputs = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const handleSelectChange = (e) => {
    const selectedCategory = data.find(category => category.name === e.target.value);
    setItemName1(selectedCategory ? selectedCategory.name : itemName);    
  };

  return (
    <div className="subcategory2-container absolute top-[50px] w-[1100px] border border-gray-200 bg-white rounded-lg shadow-lg p-[20px]">
      {/* qiymet */}
      <div
        onClick={() => showInputs(1)}
        className="input-wrapper border border-gray-200 rounded-md mb-[5px] shadow-sm px-4 cursor-pointer transition duration-300 ease-in-out"
      >
        <div className="input-header flex justify-between items-center px-4 py-2">
          <p className="text-[15px] text-gray-500">Qiymət</p>
          <FontAwesomeIcon className="text-[15px]" icon={faChevronRight} />
        </div>
        <div className={`input-group flex justify-between items-center py-2 ${activeIndex === 1 ? 'block' : 'hidden'}`}>
          <input type="number" placeholder="0" className="w-[49%] h-[35px] pl-[20px] outline-none border border-gray-300 rounded-md" onClick={handleInputClick} />
          <input type="number" placeholder="0" className="w-[49%] h-[35px] pl-[20px] outline-none border border-gray-300 rounded-md" onClick={handleInputClick} />
        </div>
      </div>

      {/* esas filtrler */}
      <div
        onClick={() => showInputs(2)}
        className="input-wrapper border border-gray-200 rounded-md mb-[5px] shadow-sm px-4 cursor-pointer transition duration-300 ease-in-out"
      >
        <div className="input-header flex justify-between items-center px-4 py-2">
          <p className="text-[15px] text-gray-500">Əsas filtrlər</p>
          <FontAwesomeIcon className="text-[15px]" icon={faChevronRight} />
        </div>
        <div className={`input-group py-2 ${activeIndex === 2 ? 'block' : 'hidden'}`}>
          <div className="mb-[5px]">
            <select name="Yeni" id="" className="outline-none w-full border border-gray-200 p-1 text-[15px] text-gray-500 rounded-sm" onClick={handleInputClick}>
              <option value="" disabled selected hidden>
                Yeni
              </option>
              <option value="beli">Bəli</option>
              <option value="xeyr">Xeyr</option>
            </select>
          </div>

          <div>
            <select name="" id="" className="outline-none w-full border border-gray-200 p-1 text-[15px] text-gray-500 rounded-sm" onClick={handleInputClick}>
              <option value="" disabled selected hidden>
                Çatdirilma
              </option>
              <option value="Beli">Bəli</option>
              <option value="xeyr">Xeyr</option>
            </select>
          </div>
        </div>
      </div>

      {/* kateqoriyalar */}
      <div
        onClick={() => showInputs(3)}
        className="input-wrapper border border-gray-200 rounded-md mb-[5px] shadow-sm px-4 cursor-pointer transition duration-300 ease-in-out"
      >
        <div className="input-header flex justify-between items-center px-4 py-2">
          <p className="text-[15px] text-gray-500">Kateqoriyalar</p>
          <FontAwesomeIcon className="text-[15px]" icon={faChevronRight} />
        </div>
        <div className={`input-group py-2 ${activeIndex === 3 ? 'block' : 'hidden'}`}>
          <div className="mb-[5px]">
            <select name="Yeni" id="" className="outline-none w-full border border-gray-200 p-1 text-[15px] text-gray-500 rounded-sm" onClick={handleInputClick} onChange={handleSelectChange}>
              <option value="">
                {itemName}
              </option>
              {
                data.filter(category => category.name !== itemName).map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name}
                  </option>
                ))
              }
            </select>
          </div>

          <div>
            <select name="" id="" className="outline-none w-full border border-gray-200 p-1 text-[15px] text-gray-500 rounded-sm" onClick={handleInputClick}>
              {
                data.filter(category => category.name === itemName1).flatMap(category => category.categories).map((subCategory, index) => (
                  <option key={index} value={subCategory.name}>
                    {subCategory.name}
                  </option>
                ))
              }
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubCategory2;