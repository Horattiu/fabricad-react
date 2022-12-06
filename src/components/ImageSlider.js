import "./imageslider.css";
import React, { useEffect } from 'react'
import { useState } from 'react'


function ImageSlider({ images }) {
    const [current, setCurrent] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)
    let timeOut = null

    useEffect(() => {
        timeOut =
            autoPlay &&
            setTimeout(() => {
                slideRight();
            }, 2500);
    });

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
        clearTimeout(timeOut);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
        clearTimeout(timeOut);
    };

    return (
        <div
            className="carousel"

        >
            <div className="carousel-wrapper">
                {images.map((image, index) => {
                    return (
                        /* (condition) ? true : false */

                        <div
                            key={index}
                            className={
                                index == current
                                    ? "carousel-card carousel-card-active"
                                    : "carousel-card"
                            }
                        >
                            <img className="card-image" src={image.image} alt="" />
                            <div className="card-overlay">
                                <h2 className="card-title">{image.title}</h2>
                            </div>
                        </div>
                    );
                })}
                <div className="carousel-arrow-left" onClick={slideLeft} >
                    &lsaquo;
                </div>
                <div className="carousel-arrow-right" onClick={slideRight}>
                    &rsaquo;
                </div>
                <div className="carousel-pagination">
                    {images.map((_, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    index == current
                                        ? "pagination-dot pagination-dot-active"
                                        : "pagination-dot"
                                }
                                onClick={() => { setCurrent(index); clearTimeout(timeOut); }}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;