import React from 'react';

import Styles from './window.module.scss';

const Window = ({ activeSlide }) => {
    
    return (
        <div className = { Styles.window }>
            <img src = { activeSlide.imgUrl } alt = { activeSlide.title } />
        </div>
    );
}

export { Window };