import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Styles from './wrap.module.scss';
import { data } from '../../../images';
import { ReactComponent as Arrow } from '../../../images/arrow.svg';
import { Slide } from '../Slide/Slide';

const cx = classNames.bind(Styles);


class Wrap extends Component {
    constructor(props) {
        super(props);


        this.state = { 
            images: [],
            currentIndex: 0,
            translateValue: 0
        };
    }

    componentDidMount () {
        this.setState({ images: data });
    }

    _goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length -1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            });
            
        }

        return this.setState(({ currentIndex, translateValue }) => ({
            currentIndex: currentIndex + 1,
            translateValue: translateValue - (this._slideWidth())
        }));
        
    }

    _goToPrevSlide = () => {
        if(this.state.currentIndex === 0) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            });
        }

        this.setState(({ currentIndex, translateValue }) => ({
            currentIndex: currentIndex - 1,
            translateValue: translateValue + (this._slideWidth())
        }));
        
    }

    _slideWidth = () => (
        document.querySelectorAll('[class ^= slide_]')[this.state.currentIndex].clientWidth
    )

    _printSlides = () => {
        return this.state.images.map( ({ imgUrl, title }, i) => (
            <Slide key = { i } url = { imgUrl } title = { title } />
        ))
    }


    render() {
        
        const slideList = this._printSlides();

        return (
            <div className = { Styles.slider }>
                <div className = { Styles.sliderWrap }
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}
                >
                { slideList }
                </div>
                <Arrow
                    className = { cx({ arrow: true, arrowLeft: true }) }
                    onClick = { this._goToPrevSlide }
                />
                <Arrow
                    className = { cx({  arrow: true, arrowRight: true }) }
                    onClick = { this._goToNextSlide }
                />
            </div>
        );
    }
}

export { Wrap };