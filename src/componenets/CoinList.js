import React from "react";
import CoinInfo from "./CoinInfo";

function CoinList({ filterCoins }) {
  const filtered = filterCoins.map((coin) => <CoinInfo key={coin.id} name={coin.name} symbol={coin.symbol} image={coin.image} current_price={coin.current_price} />);
  return (
    <div>
      {filtered}
    </div>
  )
}

export default CoinList;