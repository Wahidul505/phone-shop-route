import React, { useContext } from 'react';
import { PhonesContext } from '../../App';
import useCart from '../../hooks/useCart';
import { setToDb } from '../../utilities/localStorage';
import Phone from '../Phone/Phone';

const Home = () => {
    const [phones, setPhones] = useContext(PhonesContext);
    const [cart, setCart] = useCart(phones);
    const handleAddToCart = phone =>{
        let newCart;
        const exist = cart.find(item => item.slug === phone.slug);
        if(!exist){
            phone.quantity = 1;
            newCart = [...cart, phone];
        }
        else{
            const rest = cart.filter(item => item.slug !== phone.slug);
            phone.quantity = phone.quantity + 1;
            newCart = [...rest, phone];
        }
        setCart(newCart);
        setToDb(phone.slug);
        console.log(newCart);
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-10'>
            {
                phones.map(phone => <Phone 
                    key={phone.slug}
                    phone={phone}
                    handleAddToCart={handleAddToCart}
                />)
            }
        </div>
    );
};

export default Home;