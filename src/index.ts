type BitcoinMonthProjection = {
  month: number;
  bitcoinAccumulated: number;
  usdAccumulated: number;
  bitcoinPriceInUSD: number;
  usdInvested: number;
};

/**
 * This function takes a USD amount invested by month and returns an array of each
 * month's average value of bitcoin accumulated in Bitcoin and USD.
 * Each element in the array is an object with the following properties:
 * - month: The month from now.
 * - bitcoinAccumulated: The average value of bitcoin accumulated by month in Bitcoin.
 * - usdAccumulated: The average value of bitcoin accumulated by month in USD.
 * - the new bitcoin dollar price.
 * It assumes that the bitcoin value will increase by 2% every month.
 * @param @type {number} amountInvestedByMonthInUSD - The amount invested by month in USD
 * @param @type {number} numberOfYears - The number of years to project
 * @param @type {number} startingBitcoinPriceInUSD - The bitcoin price in USD
 * @param @type {number} btcPercentIncreasePerMonthInUSD - The percent increase per month of bitcoin in USD
 * @returns @type {BitcoinMonthProjection[]} - An array of objects by month containing the bitcoin accumulated in Bitcoin and USD.
 */
const dcaProjection = (amountInvestedByMonthInUSD = 100, numberOfYears = 4, startingBitcoinPriceInUSD = 20000, btcPercentIncreasePerMonthInUSD = 2): BitcoinMonthProjection[] => {
    const bitcoinProjection = [];
    const accumulator = {
      bitcoinAccumulated: 0,
      bitcoinPriceInUSD: startingBitcoinPriceInUSD
    }
    for (let month = 1; month <= numberOfYears * 12; month++) {
      const bitcoinPriceForMonth = accumulator.bitcoinPriceInUSD * (1 + btcPercentIncreasePerMonthInUSD / 100);
      const usdInvested = amountInvestedByMonthInUSD * month;
      const usdAccumulated = accumulator.bitcoinAccumulated * bitcoinPriceForMonth;
      const bitcoinAccumulated = accumulator.bitcoinAccumulated + amountInvestedByMonthInUSD / bitcoinPriceForMonth;
  
      bitcoinProjection.push({
        month,
        bitcoinAccumulated: parseFloat(parseFloat(bitcoinAccumulated.toString()).toFixed(3)),
        usdAccumulated: parseInt(usdAccumulated.toString()),
        bitcoinPriceInUSD: parseInt(bitcoinPriceForMonth.toString()),
        usdInvested: usdInvested
      });
      
      accumulator.bitcoinAccumulated = bitcoinAccumulated;
      accumulator.bitcoinPriceInUSD = bitcoinPriceForMonth;
    }
  
    return bitcoinProjection;
  };
  
  export default dcaProjection;