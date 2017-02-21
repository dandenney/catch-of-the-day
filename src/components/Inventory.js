import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {

  constructor() {

    super();
    this.renderInventory = this.renderInventory.bind(this);

  }

  handleChange(e, key) {

    const fish = this.props.fishes[key];

    // take a copy of the fish and update it with the new data

    const updatedFish = { ...fish, [ e.target.name ]: e.target.value }
    this.props.updateFish(key, updatedFish);

  }

  renderInventory(key) {

    const fish = this.props.fishes[key];
    return (
      <div className='fish-edit' key={key}>

        <input type='text' name='name' onChange={ (e) => this.handleChange( e, key )} placeholder='Fish Name' value={ fish.name } />
        <input type='text' name='price' onChange={ (e) => this.handleChange( e, key )} placeholder='Fish Price' value={ fish.price } />

        <select type='text' name='status' onChange={ (e) => this.handleChange( e, key )} placeholder='Fish Status' value={ fish.status }>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>

        <textarea type='text' name='description' onChange={ (e) => this.handleChange( e, key )} placeholder='Fish Description' value={ fish.description }></textarea>
        <input type='text' name='image' onChange={ (e) => this.handleChange( e, key )} placeholder='Fish Image' value={ fish.image } />

      </div>
    )

  }

  render() {
    return (
      <section>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={ this.props.addFish } />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </section>

    )
  }
}

export default Inventory;
