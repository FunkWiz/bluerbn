import { observable, computed, action, decorate } from "mobx";

export class FlightsStore {
    flights = [];
    destinationFilter = ''

    addFlight(from, to, departureTime, landingTime, price) {
        this.flights.push({ from, to, departureTime, landingTime, price })
    }

    get getByDestination() {
        if (!this.destinationFilter || !this.destinationFilter.length) return this.flights;
        const _destination = this.destinationFilter.toLowerCase();
        return this.flights.filter(flight =>
            flight.to.toLowerCase().includes(_destination)
        )
    }
}

decorate(FlightsStore, {
    flights: observable,
    destinationFilter: observable,
    addFlight: action,
    getByDestination: computed
})