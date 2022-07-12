import React from 'react';
import CoinInfo from './CoinInfo';

const formatPrice = (price) => {
  const fixPrice = Number(price.toFixed(2))
  return "$" + fixPrice
}

function CoinList({ filterCoins }) {
  const filtered = filterCoins.map((coin) => (
    <CoinInfo
      key={coin.id}
      image={coin.image}
      name={coin.name}
      symbol={coin.symbol.toUpperCase()}
      current_price={formatPrice(coin.current_price)}
    />
  ));
  return <>{filtered}</>;
}

export default CoinList;
