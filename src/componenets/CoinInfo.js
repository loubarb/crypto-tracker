import React from "react";

function CoinInfo({id, image, name, symbol, current_price}) {
  return(
    <div>
      <h1>{name}</h1>
      <h2>{symbol}</h2>
      <img src={image} alt={name} />
      <h3>{current_price}</h3>
    </div>
  )
}

export default CoinInfo;