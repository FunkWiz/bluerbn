import React from 'react'
import FlightRow from './FlightRow';

export default ({ flights }) => (
    <table className="table">
        <thead>
            <tr>
                <th>From</th>
                <th>To</th>
                <th>Departure Time</th>
                <th>Landing Time</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {flights.map((flight, idx) => <FlightRow {...flight} key={idx} />)}
        </tbody>
    </table>
)