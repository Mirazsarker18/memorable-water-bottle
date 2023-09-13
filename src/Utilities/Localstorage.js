// localstorage data store step 1 : create function
const getStoredCart = () => {
    // localstorage data store step 2 : local storage data store step
    const storedCartString = localStorage.getItem('cart');

    // localstorage data store step 3 : condition set data search function
    // localstorage data store step 3 : condition set data search
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    // jodi kono data na thake tahole emty array dekhabe
    return [];
}
// localstorage data store step 5 : save function create, data store
const saveCartToLocalStorage = cart => {
// local storage data store step 6 : cart stringfy
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}


// localstorage data store step 4 : localstorage data store add function and call getStoredCart function
const addToLocalStorage = id => {
    const cart = getStoredCart();
    cart.push(id);
    
    // localstorage data store step 7 : Save to local storage data, saveCartToLocalStorage function call
    saveCartToLocalStorage(cart);


}


//Cart remove event handel step 2: function call
const removeFromLocalStorage = id => {
    const cart = getStoredCart();
    // Cart remove event handel step 3: removing every id
    const remaining = cart.filter(idx => idx !== id);
    // Cart remove event handel step 4: set remaining 
    saveCartToLocalStorage(remaining);
}


// localstorage data store step 8 : use for local storage data export, this function export addToLocalStorage
// localstorage data store step 10 : show data display export this function getStoredCart 
// Cart remove event handel step 5: export this function getStoredCart removeFromLocalStorage 

export { addToLocalStorage, getStoredCart, removeFromLocalStorage }
