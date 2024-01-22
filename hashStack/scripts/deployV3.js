const { ethers, upgrades } = require("hardhat");

const UPGRADEABLE_PROXY = "0xDB2A1a87fb5473D771AcaD2c689A0bb4C6bd878F";

async function main() {
  const V3Contract = await ethers.getContractFactory("A3");
  const upgrade = await upgrades.upgradeProxy(UPGRADEABLE_PROXY, V3Contract);
  await upgrade.waitForDeployment();
  console.log("V3 Contract Deployed To:", upgrade.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
