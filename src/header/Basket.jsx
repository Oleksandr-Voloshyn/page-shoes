import React, { useState } from 'react'
import './Basket.css';
import iconBasket from './../image/icon-cart.svg';
import iconDelete from './../image/icon-delete.svg';

import { deleteWithBasket } from './../store/womenShoes';
import { useSelector, useDispatch } from 'react-redux';


const Basket = () => {
    const [visible, setVisible] = useState(false)
    const cart = useSelector(state => state.womenShoes.basket)
    const dispatch = useDispatch();

    const deleteGoods = (id) => {
        const number = cart.findIndex(item => item.id === id)
        if (number !== -1) {
            dispatch(deleteWithBasket(number))
        }
    }

    return (
        <div >
            <img src={iconBasket} alt='iconBasket' className='iconBasket' onClick={() => setVisible(!visible)} />

            <div >

                {visible && <div className='list-goods'>
                    <div className='card'> Card </div>
                    {cart.length !== 0
                        ?
                        <>
                            {cart.map(shoes => {
                                return <div className='block-basket-info'>
                                    <img src={shoes.image} className='basket-image-shoes' />
                                    <div>
                                        <span> {shoes.name}</span><br />
                                        <span>${shoes.price} x {shoes.counter}  <b>${shoes.counter * shoes.price}</b></span>
                                    </div>
                                    <img
                                        src={iconDelete}
                                        alt='delete'
                                        className='icon-delete'
                                        onClick={() => deleteGoods(shoes.id)}
                                    />
                                </div>

                            })}
                            <button className='button-checkut'> Checkout </button>
                        </>
                        : <p className='empty-basket'> Your cart is empty</p>}
                </div>}
            </div>
        </div>
    )
}

export default Basket
