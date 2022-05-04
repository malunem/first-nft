const { ethers } = require("hardhat");

async function main() {
  const nftContract = await ethers.getContractFactory("GameItem");
  const deployedNftContract = await nftContract.deploy();
  console.log("Contract: ", deployedNftContract.address);
}

main().then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });