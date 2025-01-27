import React from 'react';
import "../../styles/events-styles/events.css";
import Stack from '@mui/material/Stack';
import CardMobile from './CardMobile';
import img1 from "../../assets/events-images/1.png";
import img2 from "../../assets/events-images/2.png";
import img3 from "../../assets/events-images/3.png";
import img4 from "../../assets/events-images/4.png";
import img5 from "../../assets/events-images/5.png";
const EventsMobile = () => {
    return (
        <div className='eventsMobile-main'>
            <div
                className="eventsMobile"
                style={{
                    display: 'flex',
                    overflowX: "hidden",
                    justifyContent: 'start',
                    alignItems: 'start',
                    padding: '20px',
                    width: "100%",
                    maxWidth: 600
                }}
            >
                <Stack
                    direction="column"
                    spacing={3}
                    sx={{
                        width: '100%',
                        // maxWidth: 600,
                        overflowX: 'hidden',  // Hides overflow for Stack component
                    }}
                >
                    <CardMobile
                        eventName="E-Summit 24"
                        eventDescription="E-Summit '24 by E-Cell VIT Bhopal was a landmark event celebrating innovation, entrepreneurship, and strategic thinking. Highlights included a legendary speaker session with Vijender Singh Chauhan, a Paper Trading Competition, an IPL Auction challenge, a dynamic Case Study Competition, and a Product Design Competition powered by Notion. The event also hosted venture capitalists, fostering groundbreaking ideas, insightful discussions, and unparalleled networking opportunities, making it a hub for entrepreneurial excellence."
                        eventImage={img1}
                        eventLink="/e_summit_2024"
                    />

                    <CardMobile
                        eventName="Parichay 24"
                        eventDescription="Parichay 24 by E-Cell VIT Bhopal brought together entrepreneurial leaders who shared their inspiring journeys and expertise. Highlights included Mitresh Sharma, Founder of First Bud Organics, and Srijan Mehrotra, Founder of Model Verse, both Shark Tank India alumni, along with Punit G, TEDx speaker and CEO of Arth Nirmiti, and Devesh Bochre, Founder of Vold Energy Drink. The event also introduced exciting opportunities like startup pitching, workshops, quizzes, networking with industry leaders, and the Eureka IIT Bombay Zonal Round, fostering innovation and entrepreneurial growth."
                        eventImage={img2}
                        eventLink="/parichay"
                    />

                    <CardMobile
                        eventName="Parichay 22"
                        eventDescription="Parichay '22, organized by the E-Cell at VIT Bhopal, was a dynamic event designed to introduce students to the world of entrepreneurship and innovation. Featuring insightful sessions, interactive activities, and inspiring talks by industry leaders, the event provided a platform for students to network, learn, and ignite their entrepreneurial spirit."
                        eventImage={img3}
                    />

                    <CardMobile
                        eventName="Prachar"
                        eventDescription="Prachar 2022, hosted by E-Cell VIT Bhopal, was an insightful and engaging event centered on creative marketing, featuring interactive quizzes, stand-up acts, and expert discussions. The event highlighted the power of marketing in building brands, with keynote addresses by industry leaders, including Mr. Swapnil Tripathi (Co-Founder & CRO, We360.ai), Ms. Ankita Saxena (Marketing and Strategy Expert, ex-Walmart), and Mr. Kaif Khan (Stand-Up Comedian), making it an inspiring and memorable experience for all attendees."
                        eventImage={img4}
                    />

                    <CardMobile
                        eventName="Arohan"
                        eventDescription="Aarohan '23 was a vibrant business extravaganza hosted by E-Cell VIT Bhopal, featuring a Business Case Competition, an insightful talk by Rakhi Pal (Co-Founder of EventBeep, TEDx Speaker, and Shark Tank India participant), and the Ultimate Business Hunt. The event celebrated innovation, entrepreneurship, and collaboration, offering participants an enriching and memorable experience."
                        eventImage={img5}
                    />
                </Stack>
            </div>
        </div>
    );
};

export default EventsMobile;
