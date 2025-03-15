import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./events.css";
import CardEvent from "./CardEvent";
import esummit25 from "../../assets/events-images/6.png"
import esummit24 from "../../assets/events-images/1.png"
import parichay24 from "../../assets/events-images/2.png"
import parichay22 from "../../assets/events-images/3.png"
import prachar from "../../assets/events-images/4.png"
import aarohan from "../../assets/events-images/5.png"
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Events = () => {
    useEffect(() => {
        const container = document.querySelector(".evt-container");
        const sections = gsap.utils.toArray(".evt-container .evt-section");

        if (!container || sections.length === 0) {
            console.error("Container or sections not found");
            return;
        }

        // Calculate total width for scrolling
        let totalWidth = 0;
        sections.forEach((section) => {
            totalWidth += section.offsetWidth;
        });

        // Add gap between sections
        totalWidth += (sections.length - 1) * 32; // 32px gap between sections

        // Create the horizontal scroll animation
        const scrollTween = gsap.to(sections, {
            x: () => -(totalWidth - window.innerWidth + 32), // Add padding
            ease: "none",
            scrollTrigger: {
                trigger: ".evt-container",
                pin: true,
                scrub: 1,
                end: () => `+=${totalWidth}`,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });

        // Text animations within each section
        sections.forEach((section) => {
            const textElements = section.querySelectorAll(".evt-anim");

            if (textElements.length === 0) return;

            gsap.from(textElements, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    containerAnimation: scrollTween,
                    start: "left center",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Cleanup on unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const placeholderImage = "https://placehold.co/600x400/purple/white?text=Event+Image";

    return (
        <div className="evt-wrapper">
            <div className="evt-container evt-gallery-wrap">
                <section className="evt-section">
                    <CardEvent
                        eventName="E-Summit 25"
                        eventDescription="E-Summit 2025 by E-Cell VIT Bhopal is a premier entrepreneurial event bringing together innovators, investors, and industry leaders for insightful talks, workshops, networking, and pitch competitions. Focused on emerging technologies and startup growth, it offers a platform to learn, connect, and explore funding opportunities. Join us to ignite innovation and shape the future of entrepreneurship!"
                        eventImage={esummit25}
                        eventLink="/esummit2025"
                    />
                </section>
                <section className="evt-section">
                    <CardEvent
                        eventName="E-Summit 24"
                        eventDescription="E-Summit '24 by E-Cell VIT Bhopal was a landmark event celebrating innovation, entrepreneurship, and strategic thinking. Highlights included a legendary speaker session with Vijender Singh Chauhan, a Paper Trading Competition, an IPL Auction challenge, a dynamic Case Study Competition, and a Product Design Competition powered by Notion."
                        eventImage={esummit24}
                        eventLink="/e_summit_2024"
                    />
                </section>
                <section className="evt-section">
                    <CardEvent
                        eventName="Parichay 24"
                        eventDescription="Parichay 24 by E-Cell VIT Bhopal brought together entrepreneurial leaders who shared their inspiring journeys and expertise. Highlights included Mitresh Sharma, Founder of First Bud Organics, and Srijan Mehrotra, Founder of Model Verse, both Shark Tank India alumni."
                        eventImage={parichay24}
                        eventLink="/parichay"
                    />
                </section>
                <section className="evt-section">
                    <CardEvent
                        eventName="Parichay 22"
                        eventDescription="Parichay '22, organized by the E-Cell at VIT Bhopal, was a dynamic event designed to introduce students to the world of entrepreneurship and innovation. Featuring insightful sessions, interactive activities, and inspiring talks by industry leaders."
                        eventImage={parichay22}
                    />
                </section>
                <section className="evt-section">
                    <CardEvent
                        eventName="Prachar"
                        eventDescription="Prachar 2022, hosted by E-Cell VIT Bhopal, was an insightful and engaging event centered on creative marketing, featuring interactive quizzes, stand-up acts, and expert discussions."
                        eventImage={prachar}
                    />
                </section>
                <section className="evt-section">
                    <CardEvent
                        eventName="Arohan"
                        eventDescription="Aarohan '23 was a vibrant business extravaganza hosted by E-Cell VIT Bhopal, featuring a Business Case Competition, an insightful talk by Rakhi Pal (Co-Founder of EventBeep, TEDx Speaker, and Shark Tank India participant)."
                        eventImage={aarohan}
                    />
                </section>
            </div>
        </div>
    );
};

export default Events;