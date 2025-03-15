import Events from './Events';
import { CssBaseline, GlobalStyles } from "@mui/material";
import "../../styles/events-styles/events.css";
import { useRef } from 'react';
import VariableProximity from './VariableProximity';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
// import "@fontsource/orbitron";

function EventExport() {
    const containerRef = useRef(null);

    return (
        <>
            <div className='evt-main' id='main-events'>
                <div className='evt-content'>
                    <div className='evt-heading'>
                        <p className="evt-title">Our Events</p>
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
                        <Events />
                    </div>
                </div>
                <ParticleBackground />
            </div>
        </>
    );
}

export default EventExport;