import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';

import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentWillUnmount() {
      this.setState({hasError: true})
  }


  render() {

    if (this.state.hasError) {
        return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <div className="stardb-app container">
        <Header />
        { planet }

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>

        <PeoplePage />
        
      </div>
    );
  }
}


// import React from 'react';

// import Header from '../header';
// import RandomPlanet from '../random-planet';
// import ItemList from '../item-list';
// import PersonDetails from '../person-details';

// import './app.css';

// const App = () => {
//     return (
//         <div className="container">
//             <Header />
//             <RandomPlanet />

//             <div className="row mb2">
                
//                 <div className="col-md-6">
//                     <ItemList />
//                 </div>
//                 <div className="col-md-6">
//                     <PersonDetails />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;