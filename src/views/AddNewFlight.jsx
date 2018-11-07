import React from 'react'
import FormGroup from '../components/FormGroup';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom'

class AddNewFlight extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const { flights, flightForm } = this.props;
        flights.addFlight(flightForm.from, flightForm.to, flightForm.departureTime, flightForm.landingTime, flightForm.price);
        flightForm.isComplete = true;
    }
    handleChange(event) {
        const { flightForm } = this.props;
        flightForm[event.target.name] = event.target.value;
    }
    componentWillMount() {
        const { flightForm } = this.props;
        flightForm.isComplete = false;
        flightForm.from = '';
        flightForm.to = '';
        flightForm.departureTime = '';
        flightForm.landingTime = '';
        flightForm.price = '';
    }
    render() {
        const { flightForm } = this.props;
        if (flightForm.isComplete) {
            return <Redirect to="/flights" />
        }
        return (
            <div>
                <h2>Add New Flight</h2>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup title="From:" name="from" value={flightForm.from} onChange={this.handleChange} />
                        <FormGroup title="To:" name="to" value={flightForm.to} onChange={this.handleChange} />
                        <FormGroup title="Departure Time:" name="departureTime" value={flightForm.departureTime} onChange={this.handleChange} />
                        <FormGroup title="Landing Time:" name="landingTime" value={flightForm.landingTime} onChange={this.handleChange} />
                        <FormGroup title="Price:" name="price" value={flightForm.price} onChange={this.handleChange} />
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default inject('flightForm', 'flights')(observer(AddNewFlight))