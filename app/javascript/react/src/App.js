import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItineraryIndex from './containers/ItineraryIndex';
import ItineraryShowContainer from './containers/ItineraryShowContainer';
import HomePage from './containers/HomePage';

const App = props =>
  <div>
    <NavBar />
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:itinerary_slug" component={ItineraryShowContainer} />
      </Switch>
    </div>
  </div>



export default App;
