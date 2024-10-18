"use client"; // 클라이언트 컴포넌트로 설정

import Image from "next/image";
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
                <button onClick={prevSlide} className="prev">
                    ◀
                </button>
                <div className="image-wrapper">
                    <Image src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image" />
                </div>
                <button onClick={nextSlide} className="next">
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
                    max-width: 100%; /* 슬라이더 너비 조정 */
                    margin: 0 auto; /* 중앙 정렬 */
                    position: relative; /* 자식 요소의 절대 위치 설정 */
                }
                .slider {
                    position: relative;
                    height: 400px; /* 슬라이더 높이 고정 */
                }
                .image-wrapper {
                    width: 100%; /* 이미지 감싸는 div 너비 100% */
                    height: 100%; /* 이미지 감싸는 div 높이 고정 */
                    overflow: hidden; /* 넘치는 부분 숨김 */
                }
                .slide-image {
                    width: 100%; /* 이미지 너비 100%로 설정 */
                    height: 100%; /* 이미지 높이 100%로 설정 */
                    object-fit: cover; /* 비율 유지하며 잘리도록 설정 */
                }
                button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255, 255, 255, 0.7);
                    border: none;
                    cursor: pointer;
                    font-size: 24px;
                    padding: 10px;
                    z-index: 10; /* 버튼을 다른 요소 위에 표시 */
                    opacity: 1; /* 버튼이 보이도록 설정 */
                }
                .prev {
                    left: -60px; /* 왼쪽 버튼을 이미지 바깥으로 이동 */
                }
                .next {
                    right: -60px; /* 오른쪽 버튼을 이미지 바깥으로 이동 */
                }
                .indicators {
                    text-align: center;
                    margin-top: 10px;
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
                    background: #717171; /* 활성 상태 색상 */
                }
            `}</style>
        </div>
    );
};

export default ImageSlider;
