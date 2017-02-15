import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers.js';

class StorePicker extends React.Component {

  // Every component needs a render method
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input defaultValue={ getFunName() } placeholder="Store Name" required type="text" />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }

}

export default StorePicker;
