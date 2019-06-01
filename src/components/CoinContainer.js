import React, { Component } from 'react';
import Coin from './Coin';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      {side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  }
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0 
    }
  }
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