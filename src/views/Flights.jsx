import React from 'react'
import { inject, observer } from 'mobx-react';
import FlightTable from '../components/FlightTable';
import FormGroup from '../components/FormGroup';
import { Link } from 'react-router-dom'

class Flights extends React.Component {
    constructor() {
        super();
        this.onDestinationFilter = this.onDestinationFilter.bind(this);
    }

    onDestinationFilter(event) {
        const { flights } = this.props;
        flights.destinationFilter = event.target.value;
    }

    render() {
        const { flights } = this.props;
        return (
            <div>
                <h2>Flights</h2>
                <Link className="btn btn-primary" to="/flights/new">New Flight</Link>
                <div>
                    <FormGroup
                        title="Destination"
                        placeholder="Enter destination"
                        name="destination"
                        onChange={this.onDestinationFilter}
                    />
                </div>
                <div>
                    <FlightTable flights={flights.getByDestination} />
                </div>
            </div>
        )
    }
}
export default inject('flights')(observer(Flights))