import React from 'react';

class AddFishForm extends React.Component {

  createFish(e) {
    e.preventDefault();
    console.log('Touch the fishy');

    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      description: this.description.value,
      image: this.image.value,
    }

    this.props.addFish(fish);
    this.fishForm.reset();

  }

  render() {
    return (
      <form className='fish-edit' onSubmit={ this.createFish.bind(this) } ref={(input) => this.fishForm = input }>
        <input ref={(input) => this.name = input } placeholder='Fish Name' type='text' />
        <input ref={(input) => this.price = input } placeholder='Fish Price' type='text' />
        <select ref={(input) => this.status = input }>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea ref={(input) => this.description = input } placeholder='Fish Desc'></textarea>
        <input ref={(input) => this.image = input } placeholder='Fish Image' type='text' />
        <button type='submit'>+ Add Item</button>
      </form>
    )
  }
}

export default AddFishForm;
