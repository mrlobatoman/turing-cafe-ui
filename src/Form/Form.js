import React, { Component } from 'react';

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
                    name='number of guests'
                    value={this.state.numberOfGuests}
                    onChange={event => this.handleChange(event)}
                />
            </form>
        )
    }
}

export default Form