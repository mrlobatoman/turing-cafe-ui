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
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </form>
        )
    }
}




export default Form