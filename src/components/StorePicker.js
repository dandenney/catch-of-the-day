import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers.js';

class StorePicker extends React.Component {

  goToStore(e) {
    const storeId = this.storeInput.value;

    // Stop form from submitting
    e.preventDefault();

    // Route to URL by store name
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  // Every component needs a render method
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>
        <input defaultValue={ getFunName() } placeholder="Store Name" ref={(input) => { this.storeInput = input}} required type="text" />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }

}


// Surface the router from the parent index.js
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
