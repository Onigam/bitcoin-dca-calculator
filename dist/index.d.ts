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
 * @param {number} amountInvestedByMonth - The amount invested by month in USD
 * @param {number} numberOfYears - The number of years to project
 * @param {number} bitcoinPriceInUSD - The bitcoin price in USD
 * @param {number} percentIncreasePerMonth - The percent increase per month of bitcoin in USD
 * @returns {object} - The array of each month's average value of bitcoin accumulated in Bitcoin and USD.
 */
declare const dcaProjection: (amountInvestedByMonth?: number, numberOfYears?: number, startingBitcoinPriceInUSD?: number, btcPercentIncreasePerMonthInUSD?: number) => BitcoinMonthProjection[];
export default dcaProjection;
