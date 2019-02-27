import React from 'react';
import Styles from './thumbnamil.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

const Thumbnail = ({ index, isActive, link, setActive, title }) => {

    return (
        <div className = {cx({ thumbnail: true, active: isActive })} onClick = { () => setActive(index) } >
            <img src = { link } alt = { title }/>
        </div>
    );
}

export { Thumbnail };