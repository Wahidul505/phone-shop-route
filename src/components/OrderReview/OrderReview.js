import React from 'react';
import useCart from '../../hooks/useCart';
import usePhones from '../../hooks/usePhones';
import { removeFromDb } from '../../utilities/localStorage';
import OrderReviewItem from '../OrderReviewItem/OrderReviewItem';
import { CgTrash } from 'react-icons/cg';

const OrderReview = () => {
    const [phones, setPhones] = usePhones();
    const [cart, setCart] = useCart(phones);
    const handleDeleteFromCart = phone =>{
        const rest = cart.filter(item => item.slug !== phone.slug);
        setCart(rest);
        removeFromDb(phone.slug);
    }
    return (
        <div className='p-24'>
            {
                cart.map(phone => <OrderReviewItem 
                    key={phone.slug}
                    phone={phone}
                ><button onClick={()=>handleDeleteFromCart(phone)} className='text-2xl text-cyan-800 hover:text-red-500'><CgTrash /></button></OrderReviewItem>)
            }
        </div>
    );
};

export default OrderReview;