import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { PhonesContext } from '../../App';


const PhoneView = () => {
    const {phoneSlug} = useParams();
    const [phones] = useContext(PhonesContext);
    const phone = phones.find(element => element.slug === phoneSlug);
    const navigate = useNavigate();
    const {phone_name, image, brand, price} = phone;
    return (
        <div className='flex justify-center my-20'>
            <div className='w-1/2 p-6 rounded-2xl shadow-2xl flex relative'>
                <img className='w-1/2 mr-6' src={image} alt="" />
                    <button onClick={()=>navigate(-1)} className='absolute right-4 text-3xl'><IoClose /></button>
                <div className='flex flex-col gap-6'>
                <p className='text-3xl text-cyan-800 font-semibold'>{phone_name}</p>
                <p className='text-lg text-gray-500'>{brand}</p>
                <p className='text-rose-700 mt-2'>Tk {price}</p>
                </div>
            </div>
        </div>
    );
};

export default PhoneView;