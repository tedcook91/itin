import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItineraryIndex from './containers/ItineraryIndex';
import ItineraryShowPage from './containers/ItineraryShowPage';
import NavBar from './components/NavBar';
import About from './containers/About';

const App = props =>
  <div>
    <NavBar />
    <div>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/user/:id" component={ItineraryIndex} />
        <Route path="/user/:id/itinerary/:id" component={ItineraryShowPage} />
      </Switch>
    </div>
  </div>



export default App;
