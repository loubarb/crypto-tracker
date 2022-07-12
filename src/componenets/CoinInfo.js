import React from "react";

function CoinInfo({id, image, name, symbol, current_price}) {
  return(
    <div>
      <div className="coinContainer">
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <h2>{symbol}</h2>
        <h3>{current_price}</h3>
      </div>
    <div className="border"></div>
    </div>
    
  )
}

export default CoinInfo;