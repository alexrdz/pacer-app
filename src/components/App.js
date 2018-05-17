import React, { Component } from 'react';
import GoalsContainer from '../containers/GoalsContainer';

class App extends Component {
  render() {
    return (
      <div className="max-w-md mx-8 md:mx-auto">
        <h1 className="text-center my-8">Pa'cer App</h1>
        <GoalsContainer />
      </div>
    );
  }
}

export default App;
