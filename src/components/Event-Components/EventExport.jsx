import Events from './Events';
import EventsMobile from './EventsMobile';
import { useMediaQuery, CssBaseline, GlobalStyles } from "@mui/material";
import "../../styles/events-styles/events.css"
import { useRef } from 'react';
import VariableProximity from './VariableProximity';


function EventExport() {
    const containerRef = useRef(null);
    const isMobile = useMediaQuery("(max-width:750px)");

    return (
        <>
            <div className='main-events' id='main-events'>
                <div className='event-heading'>
                    <div
                        ref={containerRef}
                        style={{ position: 'relative' }}
                    >
                        <VariableProximity
                            label={'EVENTS'}
                            className={'variable-proximity-demo'}
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={100}
                            falloff='linear'
                        />
                    </div>
                </div>
                <div>
                    <CssBaseline />
                    <GlobalStyles
                        styles={{
                            body: {
                                backgroundColor: "black",
                            },
                        }}
                    />

                    {isMobile ? <EventsMobile /> : <Events />}
                </div>
            </div>

        </>
    )
}

export default EventExport
