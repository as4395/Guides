const getBitcoinPrice = () => {
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
      const price = data.bitcoin.usd;
      console.log(`The current Bitcoin price is $${price}`);
    })
    .catch(error => console.error('Error fetching Bitcoin price:', error));
}

getBitcoinPrice();
