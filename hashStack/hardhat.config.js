require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/TwJ_38kKiwqb5V8CfQYPmYVwapdZax9i",
      accounts: [
        "c14c24896b58bfbc3d76ce7c4710a226b8fcd486723cf0484d60afca22e13693",
      ],
      chainId: 80001,
    },
  },
};
