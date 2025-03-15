import React from 'react';
import "./events.css";
import Stack from '@mui/material/Stack';
import CardMobile from './CardMobile';

const EventsMobile = () => {
    const placeholderImage = "https://placehold.co/600x400/purple/white?text=Event+Image";

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
                        overflowX: 'hidden',
                    }}
                >
                    <CardMobile
                        eventName="E-Summit 25"
                        eventDescription="E-Summit 2025 by E-Cell VIT Bhopal is a premier entrepreneurial event bringing together innovators, investors, and industry leaders for insightful talks, workshops, networking, and pitch competitions."
                        eventImage={placeholderImage}
                        eventLink="/esummit2025"
                    />

                    <CardMobile
                        eventName="Parichay 24"
                        eventDescription="Parichay 24 by E-Cell VIT Bhopal brought together entrepreneurial leaders who shared their inspiring journeys and expertise."
                        eventImage={placeholderImage}
                        eventLink="/parichay"
                    />

                    <CardMobile
                        eventName="Parichay 22"
                        eventDescription="Parichay '22, organized by the E-Cell at VIT Bhopal, was a dynamic event designed to introduce students to the world of entrepreneurship and innovation."
                        eventImage={placeholderImage}
                    />

                    <CardMobile
                        eventName="Prachar"
                        eventDescription="Prachar 2022, hosted by E-Cell VIT Bhopal, was an insightful and engaging event centered on creative marketing."
                        eventImage={placeholderImage}
                    />

                    <CardMobile
                        eventName="Arohan"
                        eventDescription="Aarohan '23 was a vibrant business extravaganza hosted by E-Cell VIT Bhopal."
                        eventImage={placeholderImage}
                    />
                </Stack>
            </div>
        </div>
    );
};

export default EventsMobile;