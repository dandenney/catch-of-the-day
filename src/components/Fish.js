import React from 'react';

class Fish extends React.Component {
  render() {
    const { details } = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add to Order' : 'Sold Out!';
    return (
      <li className='menu-fish'>
        <img src={ details.image } alt={ details.name } />
        <h3 className='fish-name'>
          { details.name }
          <span className='price'>{ details.price }</span>
        </h3>
        <p>
          { details.description }
        </p>
        <button disabled={ !isAvailable }>{ buttonText }</button>
      </li>
    )
  }
}

export default Fish;
