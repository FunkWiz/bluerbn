import React, { Component } from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import Login from './views/Login';
import Flights from './views/Flights';
import AddNewFlight from './views/AddNewFlight';
import { FlightsStore } from './stores/FlightsStore';
import { FlightFormStore } from './stores/FlightFormStore';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const flightsStore = new FlightsStore();
const flightForm = new FlightFormStore();
const stores = {
  routing: routingStore,
  flights: flightsStore,
  flightForm: flightForm
};

const history = syncHistoryWithStore(browserHistory, routingStore);
class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="site-wrapper">
          <Router basename="/" history={history}>
            <main className="site-content">
              <Route
                path="/"
                component={Login}
                exact
              />
              <Route
                path="/flights"
                component={Flights}
                exact
              />
              <Route
                path="/flights/new"
                component={AddNewFlight}
              />
            </main>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
