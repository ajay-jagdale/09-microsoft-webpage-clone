import React, { useState } from 'react';
import hero1 from '../assets/hero-1.png';
import hero2 from '../assets/hero-2.png';

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [hero1, hero2];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
        );
    };

    return (
        <div className="relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-56 md:h-96 overflow-hidden">
                {/* Current item */}
                <div className="absolute w-full transition-transform duration-700 ease-in-out">
                    <img
                        src={slides[currentSlide]}
                        className="w-full h-96 object-cover"
                        alt="Carousel"
                    />
                </div>
            </div>

            {/* Slider controls at the bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-between items-center p-4">
                {/* Slider indicators */}
                <div className="flex space-x-3 rtl:space-x-reverse">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            type="button"
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                            aria-current={currentSlide === index ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                {/* Previous and Next buttons */}
                <div className="flex space-x-4">
                    {/* Previous Button */}
                    <button
                        type="button"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                        onClick={prevSlide}
                    >
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1L1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </button>

                    {/* Next Button */}
                    <button
                        type="button"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                        onClick={nextSlide}
                    >
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
