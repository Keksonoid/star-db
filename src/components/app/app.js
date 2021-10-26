import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';
import './app.css';
import { PersonList, PlanetList, StarshipList, PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components';
import { SwapiServiceProvider, SwapiServiceConsumer } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app container">
            <Header />

            <PersonDetails itemId={11} />

            <PlanetDetails itemId={5} />

            <StarshipDetails itemId={9} />
            
            <PersonList />

            <PlanetList />

            <StarshipList />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}