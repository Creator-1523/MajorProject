const hre = require("hardhat");

async function main() {
  const chai = await hre.ethers.getContractFactory("chai");
  const contract = await chai.deploy(); //instance of contract

  await contract.waitForDeployment();
  console.log("Address of contract:", contract.target);//Address of contract: 0x69dC27561DD23f7550B10A162B20341364662240
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
