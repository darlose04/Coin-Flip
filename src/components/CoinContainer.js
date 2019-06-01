import React, { Component } from 'react';
import Coin from './Coin';

class CoinContainer extends Component {
  render() {
    return (
      <div className="CoinContainer">
      <h1>Let's Flip A Coin!</h1>
        <Coin />
      </div>
    )
  }
}

export default CoinContainer;