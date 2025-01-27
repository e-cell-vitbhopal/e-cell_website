import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "../../styles/speakers-styles/speakers.css";

const SpeakerCard = ({ cardsData }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);
    const [timeoutID, setTimeoutID] = useState(null);

    const firstCardWidth = 200; // Example width of each card, you can adjust this
    const carouselRef = useRef(null);

    const cardPerView = Math.round(carouselRef.current?.offsetWidth / firstCardWidth);

    const autoPlay = () => {
        // if (window.innerWidth < 600) return;
        setTimeoutID(setTimeout(() => carouselRef.current.scrollLeft += firstCardWidth, 2500));
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        const carouselChildren = [...carousel.children];

        carouselChildren.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        carouselChildren.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        autoPlay();
        return () => clearTimeout(timeoutID);
    }, []);

    const infiniteScroll = () => {
        const carousel = carouselRef.current;
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        clearTimeout(timeoutID);
        if (!carousel.matches(":hover")) autoPlay();
    };

    const dragStart = (e) => {
        setIsDragging(true);
        const carousel = carouselRef.current;
        carousel.classList.add("dragging");
        setStartX(e.pageX);
        setStartScrollLeft(carousel.scrollLeft);
    };

    const dragging = (e) => {
        if (!isDragging) return;
        const carousel = carouselRef.current;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
        setIsDragging(false);
        const carousel = carouselRef.current;
        carousel.classList.remove("dragging");
    };

    return (
        <div className="main-speakers">
            <div className='speaker-heading-div'>
                <h1 className='speaker-heading'>Our Speakers</h1>
            </div>
            <div className="wrapper-speakers">
                <i
                    id="left-icon-speakers-slide"
                    className=""
                    onClick={() => carouselRef.current.scrollLeft -= firstCardWidth}
                > <FaChevronLeft /></i >
                <ul
                    className="carousel-speakers"
                    ref={carouselRef}
                    onMouseDown={dragStart}
                    onMouseMove={dragging}
                    onMouseUp={dragStop}
                    onScroll={infiniteScroll}
                >
                    {cardsData.map((card, index) => (
                        <li key={index} className="card-speakers">
                            <div className="image-speaker">
                                <img src={card.image} alt={card.title} draggable="false" />
                            </div>
                            <h2>{card.title}</h2>
                            <span>{card.description}</span>
                        </li>
                    ))}
                </ul>
                <i
                    id="right-icon-speakers-slide"
                    className="fa-solid fa-angle-right"
                    onClick={() => carouselRef.current.scrollLeft += firstCardWidth}
                ><FaChevronRight /></i>
            </div>
        </div>
    );
};

export default SpeakerCard;
