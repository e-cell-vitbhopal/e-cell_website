import React, { useRef } from "react";
import "../../styles/dashboard-styles/welcome-text.css"
const WelcomeText = () => {

    const cardRef = useRef(null);
    const containerRef = useRef(null);
    const handleMouseMove = (e) => {
        const card = cardRef.current;

        if (card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // Mouse X position relative to the card
            const y = e.clientY - rect.top;  // Mouse Y position relative to the card

            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);
        }
    };
    return (
        <div className='welcome-text-comp' ref={cardRef}
            onMouseMove={handleMouseMove}>
            <h1 className='text-desc'>
                Welcome to the Entrepreneurial Cell of VIT Bhopal, a dynamic hub dedicated to nurturing and empowering the next generation of entrepreneurs across India. The future of your idea begins here, at the Entrepreneurial Cell of VIT Bhopal - where we don't just promote entrepreneurs, we build success stories.</h1>
        </div>
    )
}

export default WelcomeText