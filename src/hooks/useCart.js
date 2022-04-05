import { useEffect, useState } from "react"
import { getFromDb } from "../utilities/localStorage"

const useCart = phones =>{
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const storedCart = getFromDb();
        const savedCart = [];
        for(const slug in storedCart){
            const storedPhone = phones.find(item => item.slug === slug);
            if(storedPhone){
                storedPhone.quantity = storedCart[slug];
                savedCart.push(storedPhone);
            }
        }
        setCart(savedCart);
    },[phones]);
    return [cart, setCart];
}
export default useCart;