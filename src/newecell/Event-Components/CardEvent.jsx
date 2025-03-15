import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./events.css";

const CardEvent = (props) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleLearnMoreClick = () => {
        if (props.eventLink) {
            navigate(props.eventLink);
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                width: isMobile ? '90vw' : '1000px',
                maxWidth: isMobile ? '320px' : '1000px',
                height: isMobile ? 'auto' : '400px',
                bgcolor: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }}>
                <CardMedia
                    component="img"
                    sx={{
                        width: isMobile ? '100%' : '400px',
                        height: isMobile ? '200px' : '400px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05)'
                        }
                    }}
                    image={props.eventImage}
                    alt={props.eventName}
                />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: isMobile ? '100%' : '600px',
                    p: isMobile ? 2 : 4
                }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="h4" component="div" sx={{
                            color: 'white',
                            fontWeight: 700,
                            mb: 2,
                            textAlign: 'left',
                            fontSize: isMobile ? '1.5rem' : '2.125rem'
                        }}>
                            {props.eventName}
                        </Typography>
                        <Typography variant="body1" sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            textAlign: 'left',
                            lineHeight: 1.8,
                            height: isMobile ? '150px' : '200px',
                            overflow: 'auto'
                        }}>
                            {props.eventDescription}
                        </Typography>
                    </CardContent>
                    {props.eventLink && (
                        <Box sx={{ p: isMobile ? 1 : 2, pl: isMobile ? 2 : 4, pb: isMobile ? 2 : 2 }}>
                            <Button
                                variant="contained"
                                onClick={handleLearnMoreClick}
                                sx={{
                                    bgcolor: '#8B5CF6',
                                    color: 'white',
                                    px: isMobile ? 3 : 4,
                                    py: isMobile ? 1 : 1.5,
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    fontSize: isMobile ? '0.9rem' : '1rem',
                                    fontWeight: 600,
                                    '&:hover': {
                                        bgcolor: '#7C3AED'
                                    }
                                }}
                            >
                                Learn More
                            </Button>
                        </Box>
                    )}
                </Box>
            </Card>
        </Box>
    );
};

export default CardEvent;