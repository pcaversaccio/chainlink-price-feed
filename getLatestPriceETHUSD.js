Web3 = require('web3');
const { infura_project_id } = require('./secrets.json');
const web3 = new Web3(`https://mainnet.infura.io/v3/${infura_project_id}`);
const aggregatorV3InterfaceABI = [{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

// Source: https://docs.chain.link/docs/ethereum-addresses
// Mainnet
const addr = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
// Rinkeby
// const addr = "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e";
// Kovan
// const addr = "0x9326BFA02ADD2366b30bacB125260Af641031331";
const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);

priceFeed.methods.decimals().call()
    .then((Decimals) => {
    // Get the number of decimals present in the response value.
    console.log(Decimals);
});


priceFeed.methods.latestRoundData().call()
    .then((roundData) => {
        // Do something with roundData
        const priceData = roundData;
        ETHUSD = priceData.answer; 
        console.log("Latest Round Data", roundData);
        console.log("ETH/USD Price =", ETHUSD/10**8);
    });
