const { ethers, upgrades } = require("hardhat");

const UPGRADEABLE_PROXY = "0xDB2A1a87fb5473D771AcaD2c689A0bb4C6bd878F";

async function main() {
  const V2Contract = await ethers.getContractFactory("A");
  const upgrade = await upgrades.upgradeProxy(UPGRADEABLE_PROXY, V2Contract);
  await upgrade.waitForDeployment();
  console.log("V2 Contract Deployed To:", upgrade.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
