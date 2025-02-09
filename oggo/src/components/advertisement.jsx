import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function Advertisement() {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showHidden, setShowHidden] = useState(false);
    const categories = useSelector(state => state.city.categories);
    const cities = useSelector(state => state.city.city);


    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const selectMainCategory = (e) => {
        if (e.target.value === 'Nəqliyyat') {
            setShowHidden(true);
        }else{
            setShowHidden(false);
        }
    }

    return (
        <div className='advertisement bg-gray-200 p-[3rem] absolute top-[100px] w-[52%]'>
            <div className="advertisement-wrapper flex justify-between">
                <div className="advertisement-wrapper-1 w-[65%]">
                    <div className="advertisement-title mb-[40px]">
                        <h1 className='text-[1.7rem] font-bold'>Yeni Elan</h1>
                    </div>
                    <div className="advertisement-input-group">
                        <div className='mb-[30px]'>
                            <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Əsas Kateqoriya</label></div>
                            <select className='border border-gray-200 w-full px-[12px] py-[7px] rounded-sm outline-none' name="" id="" onChange={selectMainCategory}>
                                <option className='text-[#495057]' value="">Siyahıdan seçin</option>
                                {
                                    categories.map((item, index) => (
                                        <option key={index}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className={showHidden ? '' : 'hidden'}>
                            <div className='mb-[30px]'>
                                <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Kateqoriya</label></div>
                                <select className='border border-gray-200 w-full px-[12px] py-[7px] rounded-sm outline-none' name="" id="">
                                    <option className='text-[#495057]' value="">Siyahıdan seçin</option>
                                </select>
                            </div>

                            <div className='mb-[30px]'>
                                <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Alt Kateqoriya</label></div>
                                <select className='border border-gray-200 w-full px-[12px] py-[7px] rounded-sm outline-none' name="" id="">
                                    <option className='text-[#495057]' value="">Siyahıdan seçin</option>
                                </select>
                            </div>
                        </div>

                        <div className='hidden'>
                            <div className='mb-[30px]'>
                                <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Rəng Seçin</label></div>
                                <select className='border border-gray-200 w-full px-[12px] py-[7px] rounded-sm outline-none' name="" id="">
                                    <option className='text-[#495057]' value="">Siyahıdan seçin</option>
                                </select>
                            </div>

                            <div className='mb-[30px]'>
                                <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Mühərrik Həcmi</label></div>
                                <input type="number" className='border placeholder-black w-full px-[12px] py-[7px] rounded-sm outline-none' />
                            </div>

                            <div className='mb-[30px]'>
                                <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Yanacaq Tipi</label></div>
                                <select className='border border-gray-200 w-full px-[12px] py-[7px] rounded-sm outline-none' name="" id="">
                                    <option className='text-[#495057]' value="">Siyahıdan seçin</option>
                                </select>
                            </div>

                            <div className='mb-[30px]'>
                                <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Sürətlər qutusu</label></div>
                                <select className='border border-gray-200 w-full px-[12px] py-[7px] rounded-sm outline-none' name="" id="">
                                    <option className='text-[#495057]' value="">Siyahıdan seçin</option>
                                </select>
                            </div>

                            <div className='mb-[30px]'>
                                <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Kuzov Növü</label></div>
                                <select className='border border-gray-200 w-full px-[12px] py-[7px] rounded-sm outline-none' name="" id="">
                                    <option className='text-[#495057]' value="">Siyahıdan seçin</option>
                                </select>
                            </div>

                            <div className='mb-[30px]'>
                                <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Avtomobilin İstehsal Tarixi</label></div>
                                <input type="number" className='border placeholder-black w-full px-[12px] py-[7px] rounded-sm outline-none' />
                            </div>

                            <div className='mb-[30px]'>
                                <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Kilometraj</label></div>
                                <input type="number" className='border placeholder-black w-full px-[12px] py-[7px] rounded-sm outline-none' />
                            </div>


                        </div>

                        <div className='mb-[30px]'>
                            <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Şəhər Seçin</label></div>
                            <select className='border border-gray-200 w-full px-[12px] py-[7px] rounded-sm outline-none' name="" id="">
                                <option className='text-[#495057]' value="">Şəhər</option>
                                {
                                    cities.map((item, index) => (
                                        <option key={index}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='mb-[30px]'>
                            <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Əsas Kateqoriya</label></div>
                            <input type="number" placeholder='Qiymət' className='border placeholder-black w-full px-[12px] py-[7px] rounded-sm outline-none' />
                        </div>

                        <div className='mb-[30px]'>
                            <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Təsvir</label></div>
                            <textarea className='w-[100%] h-[100px]' name="" id=""></textarea>
                        </div>

                        <div className='mb-[30px]'>
                            <button
                                type="button"
                                onClick={handleButtonClick}
                                className='bg-blue-500 text-white px-[12px] py-[7px] rounded-sm'
                            >
                                Şəkil Yüklə
                            </button>
                            <input
                                type="file"
                                id="file-upload"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                        </div>

                        {selectedImage && (
                            <div className='mb-[30px]'>
                                <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="">Seçilen Resim</label></div>
                                <div className='w-[200px] h-[200px]'>
                                    <img src={selectedImage} alt="Selected" className='w-full h-full object-cover' />
                                </div>
                            </div>
                        )}

                        <div className='mb-[30px]'>
                            <div className='mb-[10px]'>
                                <input type="checkbox" id="yeni" name="yeni" className='mr-[10px]' />
                                <label className='text-[#10375c]' htmlFor="yeni">Yeni</label>
                            </div>
                            <div className='mb-[10px]'>
                                <input type="checkbox" id="catdirilma" name="catdirilma" className='mr-[10px]' />
                                <label className='text-[#10375c]' htmlFor="catdirilma">Çatdırılma</label>
                            </div>
                        </div>

                        {/* Inputlar */}
                        <div className='mb-[30px]'>
                            <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="isim">Elanın adı</label></div>
                            <input type="text" id="isim" name="isim" className='border placeholder-black w-full px-[12px] py-[7px] rounded-sm outline-none' />
                        </div>

                        <div className='mb-[30px]'>
                            <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="urun-ismi">Adınız</label></div>
                            <input type="text" id="urun-ismi" name="urun-ismi" className='border placeholder-black w-full px-[12px] py-[7px] rounded-sm outline-none' />
                        </div>

                        <div className='mb-[30px]'>
                            <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="email">Email</label></div>
                            <input type="email" id="email" name="email" className='border placeholder-black w-full px-[12px] py-[7px] rounded-sm outline-none' />
                        </div>

                        <div className='mb-[30px]'>
                            <div className='mb-[10px]'><label className='text-[#10375c]' htmlFor="telefon">Əlaqə nömrəsi</label></div>
                            <input type="tel" id="telefon" name="telefon" className='border placeholder-black w-full px-[12px] py-[7px] rounded-sm outline-none' />
                        </div>
                    </div>
                </div>
                <div className="advertisement-wrapper-2 w-[30%]">
                    <div>
                        <div className='advertisement-wrapper-2-title mb-[40px]'>
                            <h1 className='text-[1.7rem] font-bold'>Qaydalar</h1>
                        </div>
                        <p>Eyni elanı bir neçə dəfə təqdim etməyin
                            Təsvir və ya şəkillərdə telefon, email və ya sayt ünvanı göstərməyin.
                            Ad yerində qiymət yazmayın - bunun üçün ayrıca yer var.
                            Qadağan olunmuş məhsulları satmayın.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advertisement;