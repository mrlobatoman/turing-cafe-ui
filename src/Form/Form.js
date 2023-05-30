import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            time: '',
            numberOfGuests: 0
        }
    }

    render() {
        return (
            <form>
                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                />
                <input
                    type='text'
                    placeholder='Date'
                    name='date'
                    value={this.state.date}
                    onChange={event => this.handleChange(event)}
                />
                <input
                    type='text'
                    placeholder='Time'
                    name='time'
                    value={this.state.time}
                    onChange={event => this.handleChange(event)}
                />
                <input
                    type='text'
                    placeholder='Number of guests'
                    name='numberOfGuests'
                    value={this.state.numberOfGuests}
                    onChange={event => this.handleChange(event)}
                />

                <button onClick={event => this.submitReservation(event)}>Make Reservation</button>
            </form>
        )
    }
}

export default Form