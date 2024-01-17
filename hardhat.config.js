require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_URL=process.env.SEPOLIA_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/oEV7bPIl4zqEQ7MLYMFaA6AUYUya-mD4",
      accounts:["701cf6d476507c893d6fa64c8eb7be8429d5517b36672e5e15fdcf631c3288ce"],
    },
  },
};
