import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from '../../Utilities/Localstorage';
import Cart from '../Cart/Cart';

const Bottles = () => {
    // Data show step 1 : set useState
    const [bottles, setBottles] = useState([])
    // Bottle event handel step 6 : state create
    const [cart, setCart] = useState([])

    // data show + load step 2 : set useEffect
    useEffect(() => {
        fetch('bottles.json')
        .then(response => response.json())
        .then(data => setBottles(data))
    }, [])

    // localstorage data store step 11 : Load cart from local storage, useEffect set
    useEffect(() => {

        // localstorage data store step 12 : getStoredCart function receive data useEffect and call condition
        // console.log('Called the useEffect function', bottles.length);
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);

            // localstorage data store step 15.1: create array
            const savedCart = []

            // localstorage data store step 13 : show data display loop function use
            for(const id of storedCart){
                console.log(id);

                // localstorage data store step 14: search bottle id list use find loop 
                const bottle = bottles.find(bottle => bottle.id === id);
                // localstorage data store step 15: use again if condition,
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            console.log('Save savedCart', savedCart);

            // localstorage data store step 16: set cart state
            setCart(savedCart);
        }

    }, [bottles]) 


    // Bottle event handel step 2 : function create
    const handleAddToCart = bottle => {
        // Bottle event handel step 7 : spread operator create with cart add and copy before array info
        const newCart = [...cart, bottle];
        // Bottle event handel step 8 : set newCart
        setCart(newCart);
        // localstorage data store step 9 : call to function addToLocalStorage and import function from local storage, and bottle id add
        addToLocalStorage(bottle.id);

    }

    // Cart remove event handel step 1: cart remove function create for bottle id remove
    const handleRemoveFromCart = id => {
        // two steps remove from data
        // step 1: Visual  cart remove, Cart remove event handel step 6.1: remove from display list data 
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // step 2: remove from local storage
        // Cart remove event handel step 6: removeFromLocalStorage function pass id
        // removeFromLocalStorage(id);
        removeFromLocalStorage(id);


    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            {/*  Bottle event handel step 9 : show cart information display , next step 10 : set data localstorage,*/}
           

            {/* Show cart in display step 2: receive Cart components */}
            {/* // Cart remove event handel step 7: handleRemoveFromCart function set */}
            
            <Cart
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            ></Cart>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
           {
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle}
                    // Bottle event handel step 3 : pass to function
                    handleAddToCart={handleAddToCart}

                    ></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;