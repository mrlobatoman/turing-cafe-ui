import React from "react";
import Card from "../Card/Card";

const Reservations = ({ reservations }) => {
    const resCards = reservations.map(reservation => {
        return(
            <Card  
                date={reservation.date}
                id={reservation.id}
                name={reservation.name}
                time={reservation.time}
                number={reservation.number}
            />
        )
    })

    return(
        <div className='reservations-container'>
            {resCards}
        </div>
    )
}

export default Reservations
