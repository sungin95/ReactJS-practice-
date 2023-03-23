import React, { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState(1);
  const onChange = (event) => {
    if (event.target.value >= 1) {
      setMyMoney(event.target.value);
    }
  };
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? <strong>Loading...</strong> : null}

      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      <label htmlFor="money">My money $</label>
      <input
        id="money"
        type="number"
        value={myMoney}
        onChange={onChange}
        placeholder="More than $1"
      />
      <br />
      <select>
        {coins.map((coin, index) => (
          <option key={index}>
            {coin.name} ({coin.symbol}): ${myMoney / coin.quotes.USD.price} USD{' '}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
