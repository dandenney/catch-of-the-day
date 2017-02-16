import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers.js';

class StorePicker extends React.Component {

  goToStore(e) {
    e.preventDefault();
    console.log('URL changed');
  }

  // Every component needs a render method
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input defaultValue={ getFunName() } placeholder="Store Name" required type="text" />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }

}

export default StorePicker;
