import React from 'react';

const OrderReviewItem = ({ phone, children }) => {
    const { image, phone_name, quantity } = phone;
    return (
        <div className='rounded-xl bg-cyan-100 border border-cyan-800 flex justify-between p-4 mb-4'>
            <div className='flex gap-6'>
                <p className='text-rose-500 text-lg'>{quantity}</p>
                <img className='h-12' src={image} alt="" />
            </div>
            <p>{phone_name}</p>
            {children}
        </div>
    );
};

export default OrderReviewItem;