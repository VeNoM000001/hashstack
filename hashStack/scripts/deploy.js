const { ethers, upgrades } = require("hardhat");
async function main() {
  const A = await ethers.getContractFactory("A");
  const deployA = await upgrades.deployProxy(A, [0], {
    initializer: "initialvalue",
  });
  await deployA.waitForDeployment();
  console.log("A deployed to:", await deployA.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
