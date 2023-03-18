#!/bin/bash

echo "Bienvenue dans le programme de projection de Bitcoin"
read -p "Montant investi par mois en USD : " amountInvestedByMonth
read -p "Nombre d'années à projeter (par défaut : 4 ans): " numberOfYears
read -p "Prix de départ du Bitcoin en USD (hypothèse par défaut : 20000 USD): " startingBitcoinPriceInUSD
read -p "Pourcentage d'augmentation mensuelle du Bitcoin en USD (hypothèse par défaut : 2% par mois) : " btcPercentIncreasePerMonthInUSD

numberOfYears=${numberOfYears:-4}
startingBitcoinPriceInUSD=${startingBitcoinPriceInUSD:-20000}
btcPercentIncreasePerMonthInUSD=${btcPercentIncreasePerMonthInUSD:-2}

# Execute the JavaScript function with the provided parameters
node -e "const projection = require('./index.js'); console.table(projection(${amountInvestedByMonth}, ${numberOfYears}, ${startingBitcoinPriceInUSD}, ${btcPercentIncreasePerMonthInUSD}));"
