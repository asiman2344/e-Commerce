import './component.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Sub1 from '../components/catalogSubcat/sub1.jsx';
import Sub2 from '../components/catalogSubcat/sub2.jsx';

function catalog({ handleCatalog }) {
    const catalog = useSelector(state => state.city.categories);
    const [subCat, setSubCat] = useState([]);
    const [subCat1, setSubCat1] = useState([]);

    const showSubCategories = (e) => {
        setSubCat(e.categories);
    };

    const handleSubCat1 = (subCategories) => {
        setSubCat1(subCategories);
    };

    return (
        <div className={`catalog-container absolute w-full bg-white z-[1] mt-[7px] ${handleCatalog ? 'show-catalog' : ''}`}>
            <div className='catalog flex justify-start items-center w-[70%] mx-auto p-[30px]'>
                <ul className='w-[23%] max-h-[290px] overflow-y-auto custom-scrollbar'>
                    {
                        catalog.map((item, index) => (
                            <li key={index} className='rounded-sm p-[5px] hover:bg-[#cbe4fa] my-[10px]' onMouseEnter={() => showSubCategories(item)}>
                                <Link className='flex justify-between'>
                                    <div className='w-[70%] flex items-center'>
                                        <div className='w-[30px] mr-[10px]'>
                                            <img className='w-[100%]' src={item.img} alt="" />
                                        </div>
                                        <span className='text-[18px]'>{item.name}</span>
                                    </div>
                                    <div><FontAwesomeIcon className='text-[19px]' icon={faChevronRight} /></div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <Sub1 subcat={subCat} onSubCatChange={handleSubCat1} />
                <Sub2 subCat1={subCat1}/>
            </div>
        </div>
    );
}

export default catalog;