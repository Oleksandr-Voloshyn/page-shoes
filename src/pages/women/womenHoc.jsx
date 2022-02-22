import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { addShoes } from '../../store/womenShoes'

import Women from './Women';

import shoes1 from './../../image/image-product-1.jpg'
import shoes2 from './../../image/image-product-2.jpg'
import shoes3 from './../../image/image-product-3.jpg'
import shoes4 from './../../image/image-product-4.jpg'

const arrShoes = {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    image: [shoes1, shoes2, shoes3, shoes4],
    price: 250.00,
    discount: 50,
};


const WomenHoc = () => {

    const shoes = useSelector(state => state.womenShoes.shoes)
    const cart = useSelector(state => state.womenShoes.basket)
    console.log(shoes)
    const dispatch = useDispatch();

    useEffect(() => {
        if (shoes === null) {
            dispatch(addShoes(arrShoes));
        }

    }, [dispatch])

    return (
        <div>
            {(shoes !== null) && <Women {...shoes} cart={cart} />}



        </div>
    )
}

export default WomenHoc;
