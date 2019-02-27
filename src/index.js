import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import  { Slider } from './components/ThumbnailsSlider/Slider/Slider';
import  { Wrap } from './components/SimpleSlider/Wrap/Wrap';

ReactDOM.render(
    <section>
        <Wrap />
        <Slider />
    </section>,
    document.getElementById('root')
);

