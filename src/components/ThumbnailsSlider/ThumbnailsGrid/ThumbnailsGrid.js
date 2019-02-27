import React from 'react';
import Styles from './thumbnailsGrid.module.scss';

import { Thumbnail } from '../Thumbnail/Thumbnail';

const ThumbnailsGrid = ({ currentPosition, setActive ,thumbnails }) => {

    const list = () => thumbnails.map ((el, i) => (
        <Thumbnail
            key = { i }
            link = { el.imgUrl }
            setActive = { setActive }
            index = { i }
            isActive = { currentPosition === i }
            title = { el.title }
        />
    ));

        const thumbnailsList = list();

    return (
        <div className = { Styles.thumbnailsGrid }>
            { thumbnailsList }
        </div>
    );
}

export { ThumbnailsGrid };