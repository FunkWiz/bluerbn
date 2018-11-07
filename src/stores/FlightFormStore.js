import { observable, decorate } from "mobx";

export class FlightFormStore {
    from = ''
    to = ''
    departureTime = ''
    landingTime = ''
    price = ''
    isComplete = false
}

decorate(FlightFormStore, {
    from: observable,
    to: observable,
    departureTime: observable,
    landingTime: observable,
    price: observable,
    isComplete: observable
})