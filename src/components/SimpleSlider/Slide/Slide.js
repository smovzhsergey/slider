import React from 'react';
import Styles from './slide.module.scss';

const Slide = ({ title, url }) => {
    return (
        <div
            className = { Styles.slide }
            style = {{ backgroundImage: `url(${ url })` }}
        >
        </div>
        
    )
}

export { Slide };