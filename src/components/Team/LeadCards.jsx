import React from 'react';
import { IoMdMail } from "react-icons/io";
import { IconContext } from 'react-icons';

export default function LeadCards(props) {
  return (
    <div className='lead-card flex'>
      <div className='lead-card-img'>
        <img src={props.img} alt='lead'/>
      </div>
      <div>
        <p className='name'>{props.name}</p>
        <p className='position'>{props.position}</p>
      </div>
      <a href={props.href} target="_blank">
      <IconContext.Provider value={{ className: "social-icon", size: '10%' }}>
        <IoMdMail />
      </IconContext.Provider>
      </a>
    </div>
  )
}
