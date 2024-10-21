"use client"; // 클라이언트 컴포넌트로 설정

import React, { useState, useEffect, useCallback } from "react";

const ImageSlider: React.FC = () => {
    const images = ["/hcj-1.png", "/중간고사.png", "/자기소개.png", "/기말팀.png", "/기말.png"];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const timer = setInterval(nextSlide, 3000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="slider-container">
            <div className="slider">
                <button onClick={prevSlide} className="nav-button prev">
                    ◀
                </button>
                <div className="image-wrapper">
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image" />
                </div>
                <button onClick={nextSlide} className="nav-button next">
                    ▶
                </button>
                <div className="indicators">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentIndex ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .slider-container {
                    width: 100%;
                    height: 100%; /* 부모 요소의 높이에 맞춤 */
                    margin: 0 auto;
                    position: relative;
                }
                .slider {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                .image-wrapper {
                    width: 100%;
                    height: 100%;
                }
                .slide-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /* 이미지가 영역을 꽉 채우도록 설정 */
                }
                .nav-button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(0, 0, 0, 0.5);
                    color: white;
                    border: none;
                    cursor: pointer;
                    font-size: 24px;
                    padding: 10px 15px;
                    z-index: 10;
                    transition: opacity 0.3s ease;
                }
                .nav-button:hover {
                    opacity: 1;
                }
                .prev {
                    left: 10px;
                }
                .next {
                    right: 10px;
                }
                .indicators {
                    position: absolute;
                    bottom: 10px;
                    left: 0;
                    right: 0;
                    text-align: center;
                }
                .indicator {
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    margin: 0 5px;
                    border-radius: 50%;
                    background: #bbb;
                    cursor: pointer;
                }
                .indicator.active {
                    background: #717171;
                }
            `}</style>
        </div>
    );
};

export default ImageSlider;
