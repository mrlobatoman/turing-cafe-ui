import React from "react";
import './Card.css'

const Card = ({ name, date, time, number, id}) => {
    return(
        <div className='card'>
            <h4>{name}</h4>
            <p>{date}</p>
            <p>{time}</p>
            <p>{number}</p>
            <button>Cancel</button>
        </div>
    )
}

export default Card