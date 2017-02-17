import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <section>
        <h2>Inventory</h2>
        <AddFishForm addFish={ this.props.addFish } />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </section>

    )
  }
}

export default Inventory;
