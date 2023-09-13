import React from 'react';
import PropTypes from 'prop-types';


// Show cart in display step 1: Cart components pass bottles component 
// Cart remove event handel step 8: receive handleRemoveFromCart function set
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
             <h4>Cart: {cart.length}</h4>
             {/* Show cart in display step 3: show img*/}
             <div className='flex gap-3 justify-center my-6'>
                {/* Cart remove event handel step 9: create div daynaic */}
                {cart.map(bottle => <div key={bottle.id}>
                    <img className='w-16 '  src={bottle.img}></img>
                    {/* Cart remove event handel step 10: create button and call function */}
                    <button onClick={() => handleRemoveFromCart(bottle.id)} className='btn mt-4'>Remove</button>
                </div>)}
             </div>
        </div>
    );
};


Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}
export default Cart;