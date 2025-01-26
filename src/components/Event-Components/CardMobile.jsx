import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "../../styles/events-styles/events.css";

const CardMobile = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', width: "300" }}>
            <Card
                sx={{
                    minWidth: { xs: 200, sm: 200 },
                    maxWidth: 300,
                    bgcolor: 'black',
                    marginLeft: 0,
                    overflow: "hidden"
                }}
            >
                <CardMedia
                    component="img"
                    alt={props.eventName}
                    height="140"
                    image={props.eventImage}
                />
                <CardContent>
                    <Accordion sx={{ bgcolor: 'black', color: 'white', textAlign: 'justify' }}>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon sx={{ color: 'white' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography component="span">{props.eventName}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {props.eventDescription}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        variant="contained"
                        sx={{
                            bgcolor: 'purple',
                            '&:hover': { bgcolor: 'darkviolet' },
                        }}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default CardMobile;
