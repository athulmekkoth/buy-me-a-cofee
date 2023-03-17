require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_URL=process.env.GOERLI_URL
const PRIVATE_KEY=process.env.PRIVATE_KEY
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  // ...
};

/*
/**
 * //this is emnough for local network like deploy but deploy
ing in networjchanes neeede
 *  @type import('hardhat/config').HardhatUserConfig 
module.exports = {
  solidity: "0.8.17",
};

*/