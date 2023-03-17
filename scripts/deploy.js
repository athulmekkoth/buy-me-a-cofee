// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");
async function getBalance(address)
  {
    const balanceBigint=await hre.ethers.provider.getBalance(address);
    return hre.ethers.utils.formatEther(balanceBigint);
  }

  async function consolBalance(addresses)
  {
    let counter=0;
    for( const address of addresses)
    {
      console.log(`adress ${counter} balkance `,await getBalance(address));
      counter++;
    }
  }
  async function consoleMemos(memos)
  {
    for(const memo of memos) 
    {
      const timestamp=memo.timestamp;
      const name=memo.name;
      const from=memo.from;
      const message=memo.message;  
      console.log(`name${name},timestamp${timestamp},from${from},message${message}`);


    }
  }
async function main() {
  const[owner,from1,from2,from3]=await hre.ethers.getSigners();
  //instnacr fro deply using chai
  const abc= await hre.ethers.getContractFactory("abc");
  const contract = await abc.deploy();

  //to deploy
  await contract.deployed();
  //consolBalance.log()
  const addresses=[owner.address,from1.address,from2.address,from3.address]
  console.log("before chai");
  await consolBalance(addresses)

  //we are connecting contract
  const amount={value:hre.ethers.utils.parseEther("1") }
  await contract.connect(from1).buychai("from1","very nice",amount)
  await contract.connect(from2).buychai("from2","very nice course",amount)
  await contract.connect(from3).buychai("from3","very nice info",amount)
  console.log("after chai");
  await consolBalance(addresses)


  const memos =await contract.getview();
  consoleMemos(memos)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
