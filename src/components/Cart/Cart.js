import React from 'react';
import usePhones from '../../hooks/usePhones';
import useCart from '../../hooks/useCart';
import OrderReviewItem from '../OrderReviewItem/OrderReviewItem';

const Cart = () => {
    const [phones, setPhones] = usePhones();
    const [cart, setCart] = useCart(phones);
    const total = cart.reduce((previous, next) => previous + (next.price * next.quantity), 0);
    const tax = parseFloat((total * 0.05).toFixed(2));
    const grandTotal = total + tax;
    return (
        <div className='flex p-12 justify-between gap-8'>
            <div className='w-full'>
                {
                    cart.map(phone => <OrderReviewItem 
                        key={phone.slug}
                        phone={phone}
                    />)
                }
            </div>
            <div className='bg-gray-600 text-white text-xl p-6 rounded-lg w-full'>
                <h1 className='text-gray-300 text-center'>Cart</h1>
                <hr className='border-white my-4'/>
                <p className='text-gray-300'>Total</p>
                <p>Tk {total}</p>
                <p className='text-gray-300'>Tax</p>
                <p>Tk {tax}</p>
                <p className='text-gray-300'>Grand Total</p>
                <p>Tk {grandTotal}</p>
            </div>
        </div>
    );
};

export default Cart;