import React, { useState } from 'react';
import './PhotoViewing.css'


import clouse from './../../image/icon-close.svg'

const PhotoViewing = ({ homeShoes, image, setOpenView }) => {

    const [homeShoess, setHomeShoess] = useState(homeShoes);
    const back = () => {
        const a = image.indexOf(homeShoess)
        if (a === 0) {
            let s = image.length - 1
            setHomeShoess(image[s])
        } else {
            setHomeShoess(image[a - 1])
        }
    }

    const next = () => {
        const a = image.indexOf(homeShoess);
        if (a === image.length - 1) {
            setHomeShoess(image[0])
        } else {
            setHomeShoess(image[a + 1])
        }
    }

    return <div className='fon'>
        <div className='rozmir-image'>
            <div className='block-img'>
                <img src={clouse} alt='clouse' className='image-clouse' onClick={() => setOpenView(false)} />
                <img src={homeShoess} className='aaa' />
                <button className='button-back' onClick={() => back()}>ba </button>
                <button className='button-next' onClick={() => next()}>ne</button>
            </div>
            <div className='block-aaa'>
                {image.map((shoes, index) => {
                    return <>
                        < img
                            src={shoes}
                            onClick={() => setHomeShoess(shoes)}
                            className={shoes === homeShoess ? "shoes-a action-a cursor" : "shoes-a cursor"}
                            key={index}
                        />
                    </>
                }
                )
                }
            </div>
        </div>
    </div>;
};

export default PhotoViewing;
