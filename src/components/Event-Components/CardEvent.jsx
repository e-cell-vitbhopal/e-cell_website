import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import "../../styles/events-styles/events.css"
import Box from '@mui/material/Box';

const CardEvent = (props) => {

    return (
        <Box component="div" className='slide' sx={{ p: 2, border: '0px dashed grey', height: '40vh', width: '50vw' }}>
            <div className='info' >
                <Card sx={{ maxWidth: 450, height: '80%', bgcolor: 'transparent' }}>
                    <CardContent>
                        <Typography className='slide-text' gutterBottom variant="h3" component="div" sx={{ color: 'white', textAlign: 'left' }}>
                            {props.eventName}
                        </Typography>
                        <Typography className='slide-text' variant="h6" sx={{ color: 'white', textAlign: 'justify', }}>
                            {props.eventDescription}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" sx={{ bgcolor: 'purple' }}>Learn More</Button>
                    </CardActions>
                </Card>
            </div>
            <div className='slide-image' sx={{ width: '100%' }}>
                <Card sx={{ bgcolor: 'black' }}>
                    <CardMedia
                        sx={{ height: 450 }}
                        image={props.eventImage}
                        title={props.eventName}
                    />
                </Card>
            </div>

        </Box>
    );
};

export default CardEvent;
