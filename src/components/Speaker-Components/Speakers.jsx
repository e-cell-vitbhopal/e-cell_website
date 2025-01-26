import React from 'react';
import slide_image_1 from '../../assets/speakers-images/Srijan.png';
import slide_image_2 from '../../assets/speakers-images/swapnil teipathi.png';
import slide_image_3 from '../../assets/speakers-images/amruta Shingwekar.png';
import slide_image_4 from '../../assets/speakers-images/Abhay Yadav.png';
import slide_image_5 from '../../assets/speakers-images/Mitresh.png';
import slide_image_6 from '../../assets/speakers-images/Punit G.png';
import slide_image_7 from '../../assets/speakers-images/Rakhi.png';

import slide_image_8 from '../../assets/speakers-images/Ankita Saxena.png';
import slide_image_9 from '../../assets/speakers-images/Devesh B.png';
import slide_image_10 from '../../assets/speakers-images/Kafi Khan.png';
import SpeakerCard from './SpeakerCard';

const cardsData = [
    { title: "Srijan", image: slide_image_1, description: "" },
    { title: "Swapnil Teipathi", image: slide_image_2, description: "" },
    { title: "Amruta Shingwekar", image: slide_image_3, description: "" },
    { title: "Abhay Yadav", image: slide_image_4, description: "" },
    { title: "Mitresh", image: slide_image_5, description: "" },
    { title: "Punit G", image: slide_image_6, description: "" },
    { title: "Rakhi", image: slide_image_7, description: "" },
    { title: "Ankita Saxena", image: slide_image_8, description: "" },
    { title: "Devesh B", image: slide_image_9, description: "" },
    { title: "Kafi Khan", image: slide_image_10, description: "" },
];

const Speakers = () => {
    return (
        <div id='speakers-main'>

            <SpeakerCard cardsData={cardsData} />
        </div>
    );
};

export default Speakers;
