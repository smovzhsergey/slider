import React, { Component } from 'react';
import Styles from './slider.module.scss';
import { Window } from '../Window/Window';
import { ThumbnailsGrid } from '../ThumbnailsGrid/ThumbnailsGrid';

import { data } from '../../../images';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbnails: [],
            currentPosition: 0
        };
    }

    componentDidMount() {
        this.setState({ thumbnails: data });
    }

    _setCurrentPosition = (index) => (
        this.setState({
            currentPosition: index,
        })
    )

    render() {

        const { currentPosition, thumbnails } = this.state;
        
        return (
            thumbnails.length &&
            <section className = { Styles.wrap } >
                <div className = { Styles.images } >
                    <Window activeSlide = { thumbnails[currentPosition] } />
                    <ThumbnailsGrid
                        currentPosition = { currentPosition }
                        thumbnails = { thumbnails }
                        setActive = { this._setCurrentPosition }
                    />
                </div>
                <div className = { Styles.content } >
                    <h2>{ thumbnails[currentPosition].title }</h2>
                    <p>{ thumbnails[currentPosition].bodyText }</p>
                </div>               
            </section>
        );
    }
}

export  { Slider };