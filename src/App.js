import React from 'react';
import { useState, useEffect } from 'react';
import CoinList from './componenets/CoinList';

const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {
  const [coins, setCoins] = useState([])
  const [searchCoin, setSearchCoin] = useState('');

  const renderCoins = async () => {
    const response = await fetch(API)
    const data = await response.json()
    console.log(data)
    setCoins(data)
  }

  useEffect(() => {
    renderCoins()
  }, [])

  const handleChange = e => {
    setSearchCoin(e.target.value)
  }

  const filterCoins = coins.filter(coin => {
    return (
      coin.name.toLowerCase().includes(searchCoin.toLowerCase())
    )
  })

  return (
    <div className="App">
      <CoinList filterCoins={filterCoins}/>
    </div>
  );
}

export default App;
