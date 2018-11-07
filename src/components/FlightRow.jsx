import React from 'react'


export default ({ from, to, departureTime, landingTime, price }) => (
    <tr>
        <td>{from}</td>
        <td>{to}</td>
        <td>{departureTime}</td>
        <td>{landingTime}</td>
        <td>{price}</td>
    </tr>
)