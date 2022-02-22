import React, { useState, useEffect } from 'react'


import './Women.css'
import minus from './../../image/icon-minus.svg'
import plus from './../../image/icon-plus.svg'
import { ReactComponent as Basket } from './../../image/icon-cart.svg'
import { useDispatch } from 'react-redux'
import { addInBasket } from '../../store/womenShoes'
import PhotoViewing from './PhotoViewing'









const Women = ({ name, image, price, discount, id, cart }) => {
    const [homeShoes, setHomeShoes] = useState(image[0]);
    const [counter, setCounter] = useState(0);
    const [buyShoes, setBuyShoes] = useState(true);
    const [openView, setOpenView] = useState(false);
    const dispatch = useDispatch();

    const adBasket = (name, image, price, counter, id) => {
        const addBasket = { name, image, price, counter, id };
        dispatch(addInBasket(addBasket))
        console.log(homeShoes)
    }
    useEffect(() => {
        if (cart.length === 0) {
            setBuyShoes(true)
        }
        cart.forEach(element => {
            if (element.id === id) {
                setBuyShoes(false)
            } else setBuyShoes(true)
        }
        )

    }, [cart.length])





    return (
        <div className='block-women'>
            <div className='block-image'>
                <img src={homeShoes} alt='' onClick={() => setOpenView(true)} className='shoes-home cursor' />
                {openView && <PhotoViewing homeShoes={homeShoes} setOpenView={setOpenView} image={image} />}
                <div className='block-shoes'>
                    {image.map((shoes, index) => {
                        return <>
                            < img
                                src={shoes}
                                onClick={() => setHomeShoes(shoes)}
                                className={shoes === homeShoes ? "shoes cursor border active" : "shoes cursor"}
                                key={index}
                            />
                        </>
                    }
                    )
                    }
                </div>

            </div>


            <div className='block-text'>
                <div className='block-info'>
                    <h3> SNEAKER COMPANY</h3>
                    <h1> Fall Limited Edition Sneakers</h1>

                    <p>These low-profile sneakers are your perfect casual
                        wear companion. Featuring a durable rubbel outer sole,
                        they withstand everything the weather can offer.
                    </p>
                    <h2>$125.00</h2>
                </div>
                <div className='block-counter'>
                    {buyShoes ? <>
                        <div className='counter'>
                            <img
                                src={minus}
                                disabled={counter === 0}
                                className='cursor'
                                onClick={() => (counter === 0 ? null : setCounter(counter - 1))}
                                alt='minus'
                            />
                            <span className='counte'>{counter}</span>
                            <img src={plus}
                                className='cursor'
                                onClick={() => setCounter(counter + 1)}
                                alt='plus' />
                        </div>

                        <button
                            disabled={counter === 0}
                            className='add-card cursor'
                            onClick={() => adBasket(name, image[0], price, counter, id)}
                        >
                            <Basket className='women-basket' />
                            Add to cart
                        </button>
                    </>
                        : <span> Товар в корзині</span>
                    }

                </div>
            </div>
        </div >
    )
}

export default Women
