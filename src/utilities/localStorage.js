const getFromDb = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const setToDb = slug =>{
    const cart = getFromDb();
    if(slug in cart){
        cart[slug] = cart[slug] + 1;
    }
    else{
        cart[slug] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}
const removeFromDb = slug =>{
    const cart = getFromDb();
    delete cart[slug];
    localStorage.setItem('cart',JSON.stringify(cart));
}
const getPhoneFromDb = () =>{
   const storedPhone = localStorage.getItem('slug');
   return storedPhone;
}
const setPhoneToDb = slug =>{
    localStorage.setItem('slug',slug);
}
export {getFromDb, setToDb, removeFromDb, setPhoneToDb, getPhoneFromDb}