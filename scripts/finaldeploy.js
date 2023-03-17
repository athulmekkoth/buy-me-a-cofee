const { ethers } = require("hardhat");
const hre = require("hardhat");
async function main() {

    //instnacr fro deply using chai
    const abc= await hre.ethers.getContractFactory("abc");
    const contract = await abc.deploy();
  
    //to deploy
    await contract.deployed();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  