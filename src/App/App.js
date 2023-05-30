import React, { Component } from 'react';
import { fetchReservations } from '../apiCalls';
import Card from '../Card/Card';
import Form from '../Form/Form';
import './App.css';
import Reservations from '../Reservations/Reservations';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetchReservations()
      .then(data => this.setState({ reservations: data }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <Reservations reservations={this.state.reservations}/>
        {/* <div className="reservations-container">
        
        </div> */}
        
      </div>
    )
  }
}

export default App;
