import React from 'react';
import { render } from 'react-dom';

class StorePicker extends React.Component {

  // Every component needs a render method
  render() {
    return (
      <form className="">
        <h2>Please Enter A Store</h2>
        <input placeholder="Store Name" required type="text" />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }

}

export default StorePicker;
