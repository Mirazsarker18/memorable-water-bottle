import React from 'react';
import PropTypes from 'prop-types';

// Bottle event handel step 4 : receive to function
const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className='border-2 border-solid border-red-700 my-8 rounded-lg text-center'>
            <h3>Bottle: {name}</h3>
            <img className='w-52 inline' src={img} alt="" />
            <p>Price: ${price}</p>

            {/* Event handler add step 1: Button create,
            and Event handler add step 5: set to button onclick 
            */}
            <button onClick={() => handleAddToCart(bottle)} className='btn'> Purchess </button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}

export default Bottle;