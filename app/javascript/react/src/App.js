import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItineraryIndex from './containers/ItineraryIndex';
import ItineraryShowPage from './containers/ItineraryShowPage';
import HomePage from './containers/HomePage';

const App = props =>
  <div>
    <NavBar />
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:user_slug" component={ItineraryIndex} />
        <Route path="/:user_slug/:itinerary_slug" component={ItineraryShowPage} />
      </Switch>
    </div>
  </div>



export default App;
