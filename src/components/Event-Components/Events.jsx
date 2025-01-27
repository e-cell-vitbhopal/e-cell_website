import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../../styles/events-styles/events.css";
import CardEvent from "./CardEvent";
import img1 from "../../assets/events-images/1.png";
import img2 from "../../assets/events-images/2.png";
import img3 from "../../assets/events-images/3.png";
import img4 from "../../assets/events-images/4.png";
import img5 from "../../assets/events-images/5.png";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Events = () => {
    useEffect(() => {
        const container = document.querySelector(".container");
        const sections = gsap.utils.toArray(".container section");

        if (!container || sections.length === 0) {
            console.error("Container or sections not found");
            return;
        }

        // Main horizontal scroll animation
        const scrollTween = gsap.to(sections, {
            xPercent: () => {
                const windowWidth = window.innerWidth;
                if (windowWidth > 1400) return -155 * (sections.length - 1);
                if (windowWidth > 1300) return -160 * (sections.length - 1);
                if (windowWidth > 1150) return -170 * (sections.length - 1);
                if (windowWidth > 1000) return -185 * (sections.length - 1);
                if (windowWidth > 850) return -200 * (sections.length - 1);
                if (windowWidth < 850) return -200 * (sections.length - 1);
            },
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 1,
                end: "+=2000",
                markers: false,
            },
        });

        // Text animations within each section
        sections.forEach((section) => {
            const textElements = section.querySelectorAll(".anim");

            if (textElements.length === 0) return;

            gsap.from(textElements, {
                y: -200,
                opacity: 0,
                duration: 2,
                ease: "elastic",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: section,
                    containerAnimation: scrollTween,
                    start: "left center",
                    markers: true,
                },
            });
        });

        // Cleanup on unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="wrapper">
            <div className="container scrollx gallery-wrap">
                <section>
                    <CardEvent
                        eventName="E-Summit 24"
                        eventDescription="E-Summit '24 by E-Cell VIT Bhopal was a landmark event celebrating innovation, entrepreneurship, and strategic thinking. Highlights included a legendary speaker session with Vijender Singh Chauhan, a Paper Trading Competition, an IPL Auction challenge, a dynamic Case Study Competition, and a Product Design Competition powered by Notion. The event also hosted venture capitalists, fostering groundbreaking ideas, insightful discussions, and unparalleled networking opportunities, making it a hub for entrepreneurial excellence."
                        eventImage={img1}
                        eventLink="/e_summit_2024"
                    />
                </section>
                <section>
                    <CardEvent
                        eventName="Parichay 24"
                        eventDescription="Parichay 24 by E-Cell VIT Bhopal brought together entrepreneurial leaders who shared their inspiring journeys and expertise. Highlights included Mitresh Sharma, Founder of First Bud Organics, and Srijan Mehrotra, Founder of Model Verse, both Shark Tank India alumni, along with Punit G, TEDx speaker and CEO of Arth Nirmiti, and Devesh Bochre, Founder of Vold Energy Drink. The event also introduced exciting opportunities like startup pitching, workshops, quizzes, networking with industry leaders, and the Eureka IIT Bombay Zonal Round, fostering innovation and entrepreneurial growth."
                        eventImage={img2}
                        eventLink="/parichay"
                    />
                </section>
                <section>
                    <CardEvent
                        eventName="Parichay 22"
                        eventDescription="Parichay '22, organized by the E-Cell at VIT Bhopal, was a dynamic event designed to introduce students to the world of entrepreneurship and innovation. Featuring insightful sessions, interactive activities, and inspiring talks by industry leaders, the event provided a platform for students to network, learn, and ignite their entrepreneurial spirit."
                        eventImage={img3}
                    />
                </section>
                <section>
                    <CardEvent
                        eventName="Prachar"
                        eventDescription="Prachar 2022, hosted by E-Cell VIT Bhopal, was an insightful and engaging event centered on creative marketing, featuring interactive quizzes, stand-up acts, and expert discussions. The event highlighted the power of marketing in building brands, with keynote addresses by industry leaders, including Mr. Swapnil Tripathi (Co-Founder & CRO, We360.ai), Ms. Ankita Saxena (Marketing and Strategy Expert, ex-Walmart), and Mr. Kaif Khan (Stand-Up Comedian), making it an inspiring and memorable experience for all attendees."
                        eventImage={img4}
                    />
                </section>
                <section>
                    <CardEvent
                        eventName="Arohan"
                        eventDescription="Aarohan '23 was a vibrant business extravaganza hosted by E-Cell VIT Bhopal, featuring a Business Case Competition, an insightful talk by Rakhi Pal (Co-Founder of EventBeep, TEDx Speaker, and Shark Tank India participant), and the Ultimate Business Hunt. The event celebrated innovation, entrepreneurship, and collaboration, offering participants an enriching and memorable experience."
                        eventImage={img5}
                    />
                </section>
            </div>
        </div>
    );
};

export default Events;
