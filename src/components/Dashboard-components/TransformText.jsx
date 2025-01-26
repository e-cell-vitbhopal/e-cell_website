import React from "react";
import { motion } from "framer-motion";
import "../../styles/dashboard-styles/transform-text.css"
export const TransformText = () => {
    return (
        <section className="transform-text-section">
            <FlipText >Transforming </FlipText>
            <FlipText>Dreams</FlipText>
            <FlipText>into</FlipText>
            <FlipText>Reality</FlipText>
        </section>
    );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipText = ({ children, href }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="flip-text"
        >
            <div className="flip-text-content">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 5,
                            },
                            hovered: {
                                y: "-105%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="flip-text-letter"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="flip-text-content-back">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "120%",
                            },
                            hovered: {
                                y: 5,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="flip-text-letter"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};
