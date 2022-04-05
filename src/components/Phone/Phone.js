import React from 'react';
import { useNavigate } from 'react-router-dom';

const Phone = ({phone, handleAddToCart}) => {
    const {phone_name, image, price, slug} = phone;
    const navigate = useNavigate();
    const handleViewPhone = () =>{
        navigate(`/phone/${slug}`)
    };
    return (
        <div className='shadow-2xl rounded-xl p-8'>
          <img className='w-full mb-4' src={image} alt="" />  
          <p className='text-2xl text-center'>{phone_name}</p>
          <p className='text-lg text-center text-rose-700 mt-2'>TK {price}</p>
          <div className='flex mt-2'>
          <button onClick={handleViewPhone} className='bg-cyan-500 py-2 text-lg text-white w-full'>Quick View</button>
          <button onClick={()=>handleAddToCart(phone)} className='bg-rose-500 py-2 text-lg text-white w-full'>Add to Cart</button>
          </div>
        </div>
    );
};

export default Phone;